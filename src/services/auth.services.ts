import { request } from './api.services'
import type { IAuthParams } from '@/interface/auth.interface'
import { EApiURL, EApiMethods } from '@/enums/enums.api'
import type { IRequest } from '@/interface/common.interface'

export const authentication = (body: IAuthParams) =>
  request({ url: EApiURL.authentication, method: EApiMethods.POST, body } as unknown as IRequest<IAuthParams>)
