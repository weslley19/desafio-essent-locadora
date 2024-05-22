import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Pega uma string e retorna apenas os números
 * @param {string} string - string -&gt; string que quer formatar
 */
export const numberMask = (
  string: string,
  returnTypeNumber: boolean = false
): number | string => {
  const onlyNumber = `${string}`.replace(/\D+/g, '')
  return returnTypeNumber ? parseFloat(onlyNumber) : onlyNumber
}

/**
 * Pega uma string e retorna uma string sanitizada apenas com números
 * @param {string} value - string -&gt; string que quer sanitizar
 */
export const sanitizeValueFromInput = (value: string): string => {
  return numberMask(value).toString()
}

/**
 * Pega uma string e retorna no formato de CPF
 * @param {string} cpf - string -&gt; string que quer formatar
 */
export const cpfMask = (cpf: string | number): string => {
  return sanitizeValueFromInput(`${cpf}`)
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1')
}

/**
 * Pega uma string no formato yyyy-mm-dd e retorna uma string no formato dd/mm/yyyy
 * @param {string} date - string -&gt; data que quer aplicar a mascara
 */
export const dateBrFormat = (datetime: string): string => {
  const dateObject = new Date(datetime)

  if (isNaN(dateObject.getTime())) {
    console.error('Data inválida:', datetime)
    return ''
  }

  const day = String(dateObject.getDate()).padStart(2, '0')
  const month = String(dateObject.getMonth() + 1).padStart(2, '0')
  const year = String(dateObject.getFullYear())

  const hours = String(dateObject.getHours()).padStart(2, '0');
  const minutes = String(dateObject.getMinutes()).padStart(2, '0');
  const seconds = String(dateObject.getSeconds()).padStart(2, '0');

  const formattedDateTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`
  return formattedDateTime
}

export const moneyMask = (
  value: number | string,
  options: {
    decimalPlaces: number
  } = {
    decimalPlaces: 2
  }): string => {
  const formatNumber = (value: string): string => {
    return new Intl.NumberFormat('pt-BR', {
      minimumFractionDigits: options.decimalPlaces
    })
      .format(
        parseFloat(value) / 10 ** options.decimalPlaces
      )
  }

  value = numberMask(`${value}`).toString()

  if (value === '' || value === null || value === undefined) {
    return moneyMask(0)
  }

  return formatNumber(value)
}

/**
 * Pega um objeto e serializa ele na forma de query string
 * @param {object} params - O objeto que quer serializar
 * @returns {string} - A query string
 */
export const serializeQueryParams = (params: any): string => {
  const esc = encodeURIComponent
  return Object.keys(params)
    .map((keyParam) => {
      if (Array.isArray(params[keyParam])) {
        return params[keyParam]
          .map((value: any, index: number) => {
            return esc(keyParam) + '[]=' + esc(value)
          })
          .join('&')
      } else {
        return esc(keyParam) + '=' + esc(params[keyParam])
      }
    })
    .join('&')
}

export const dateBrMask = (date: string): string => {
  const regex = /^\d{4}-\d{2}-\d{2}$/
  if (!regex.test(date)) {
    throw new Error('Formato de data inválido. Use o formato yyyy-MM-dd.')
  }

  const [ano, mes, dia] = date.split('-')
  return `${dia}/${mes}/${ano}`
}

export const translateURLName = (url: string): string => {
  const routes: { [key: string]: string } = {
    '/': 'Home',
    '/person': 'Membros',
    '/dizimo': 'Dízimos',
    '/offer': 'Ofertas',
    '/releases': 'Lançamentos'
  }

  return routes[url] ?? ''
}

export const formatDateInput = (value: string): string => {
  value = value.replace(/\D/g, '')
  if (value.length > 8) {
    value = value.substring(0, 8)
  }

  if (value.length > 4) {
    value = value.replace(/(\d{2})(\d{2})(\d{1,4})/, '$1/$2/$3')
  } else if (value.length > 2) {
    value = value.replace(/(\d{2})(\d{1,2})/, '$1/$2')
  }
  return value
}

export const formatCPFInput = (value: string): string => {
  value = value.replace(/\D/g, '')
  if (value.length > 11) {
    value = value.substring(0, 11)
  }

  if (value.length > 9) {
    value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4')
  } else if (value.length > 6) {
    value = value.replace(/(\d{3})(\d{3})(\d{1,3})/, '$1.$2.$3')
  } else if (value.length > 3) {
    value = value.replace(/(\d{3})(\d{1,3})/, '$1.$2')
  }
  return value
}

export const dateUsMask = (value: string): string => {
  if (value.length === 10) {
    const [day, month, year] = value.split('/')
    return `${year}-${month}-${day}`
  }
  return value
}

export const formatCurrencyInput = (value: string): string => {
  value = value.replace(/[^0-9,]/g, '')
  value = value.replace(',', '.')
  const number = parseFloat(value)

  if (isNaN(number)) return ''

  return number.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  })
}
