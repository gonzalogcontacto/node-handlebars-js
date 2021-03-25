import express from 'express'
import handlebars from 'express-handlebars'
import path from 'path'

const app = express();
const __dirname = path.dirname(new URL(import.meta.url).pathname);

//Cargamos el folder de las vistas
app.set('views', path.join(__dirname, 'views'))

// Cómo funciona el módulo de plantillas
app.engine('.hbs', handlebars({
    extname: '.hbs', // Extensiones de los archivos para handlebars
    layoutsDir: path.join(app.get('views'), 'layouts'), // Directorio principal de layouts
    partialsDir: path.join(app.get('views'), 'partials'), // trozos html reutilizables en el proyecto
    defaultLayout: 'main' // Archivo principal para las vistas
}));

// Una vez definido, usamos como engine hbs (handlebars)
app.set('view engine', '.hbs')

//Static Files
app.use(express.static(path.join(__dirname, 'public'))); //Le decimos a express que carge la carpeta public para CSS, JS, images etc

app.get('/prueba',(req,res)=>{
    res.render('index')
});

app.listen(3000, () => {
    console.log('Server is running');
})
