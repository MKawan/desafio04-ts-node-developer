import express,{Request, Response, request} from 'express';
import { router } from './routes';


const server = express();
server.use(express.json());

server.use(router);
//get
server.get('/', (req: Request, res: Response) => {
    return res.status(200).json({message: 'DioBank Api'});
})

server.listen(5055, () => console.log('Server o update'));