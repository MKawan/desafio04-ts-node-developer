/* mock userController */

import { Request, Response } from "express";
import {Params} from 'express-serve-static-core'

//mock request
export const makeMockRequest = ({params, query}: {params?: Params, query?: Params}): Request =>{
    const req = {
        params: params || {},
        query: query || {}
    } as unknown

    return req as Request
}

// mock response
type MockResponse<TResult> = Response & {
    state: {
        status?: number,
        json?: TResult | unknown

    }
}

export function makeMockResponse<TResult>() {
    const res = {
        state:{}
    } as MockResponse<TResult>

    res.status = (status: number) => {
        res.state.status = status
        return res
    }
    res.json = (json: TResult) => {
        res.state.json = json
        return res
    }

    return res
}