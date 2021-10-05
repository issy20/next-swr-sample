import { SWRResponse } from 'swr'
import { useStaticSWR } from './useStaticSWR'

export const useCount = (
  initialData?: number
): SWRResponse<number | null, Error> => {
  return useStaticSWR<number | null, Error>('count', initialData)
}
