import express from 'express'
import equiposRoutes from './routes/equipos.routes.js'
import usuariosRoutes from './routes/usuarios.routes.js'
import indexRoutes from './routes/index.routes.js'

const app  = express()
app.use((_req, res, next) => {
    
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
    // res.status(404).json({
    //     message: 'EndPoint no encontrado'
    // })
})

app.use(express.json())

app.use(indexRoutes)
//app.use('/api',employeesRoutes)
app.use('/api',equiposRoutes)

app.use('/auth',usuariosRoutes)


app.listen(3005)

console.log('Server iniciado en puerto 3005');