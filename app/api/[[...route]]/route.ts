import {Hono} from "hono";
import {movies} from './moviesAPI'
import { handle } from 'hono/vercel'

const app = new Hono().basePath('/api')
.route('/getMovies', movies)

export const GET = handle(app)
export const POST = handle(app)

export type AppType = typeof app