$(function()
{



function Contenido(num){
	var Botones =` 		<div class="btn-group" role="group" aria-label="...">
						<button type="button" id="Inicio" class="btn btn-primary">Inicio</button>
  						<button type="button" id="Binomial" class="btn btn-primary">Binomial</button>
  						<button type="button" id="BinomialNegativa" class="btn btn-primary">Binomial Negativa</button>
  						<button type="button" id="Poisson" class="btn btn-primary">Poisson</button>
  						<button type="button" id="Normal" class="btn btn-primary">Normal Estándar</button>
  						<button type="button" id="Uniforme" class="btn btn-primary">Uniforme Discreta</button>
  						<button type="button" id="Continua" class="btn btn-primary">Continua</button>
  						<button type="button" id="UniformeContinua" class="btn btn-primary">Uniforme Continua</button>
						</div> `
	switch(num){
		case 0:
			var str = `	<div class='animated rotateIn'>	
						<h2>Presentado por: </h2>
						<h2>Franklyn Lombana Molina </h2>
						<h2>Andres Mauricio Valenzuela</h2>
						<h2>Daniel Paramo Torres</h2>
						</div>
						`
		break; 
		case 1: 
			var str = `	<div class='animated zoomInRight'>	
						<h1>Distribución Binomial</h1>
						<p>
						En estadística, la distribución binomial es una distribución de probabilidad discreta que cuenta el número de éxitos en una secuencia de n ensayos de Bernoulli independientes entre sí, con una probabilidad fija p de ocurrencia del éxito entre los ensayos. Un experimento de Bernoulli se caracteriza por ser dicotómico, esto es, sólo son posibles dos resultados. A uno de estos se denomina éxito y tiene una probabilidad de ocurrencia p y al otro, fracaso, con una probabilidad q = 1 - p. En la distribución binomial el anterior experimento se repite n veces, de forma independiente, y se trata de calcular la probabilidad de un determinado número de éxitos. Para n = 1, la binomial se convierte, de hecho, en una distribución de Bernoulli.
						<button type="button" id="EjBinomial" class="btn btn-info Micss" data-toggle="modal" data-target="#MiVentana">Ejemplo</button>
						</p>
						<img id="Graficas" src="http://4.bp.blogspot.com/-IFBNMkkc-d4/UZM--sjiw4I/AAAAAAAAD_Y/e6Gg6b_mV7c/s1600/Captura+de+pantalla+de+2013-05-15+09:51:54.png">
						</div>
						`
		break;
		case 2:
			var str = `	<div class='animated lightSpeedIn'>	
						<h1>Distribución de Poisson</h1>
						<p>
						En teoría de probabilidad y estadística, la distribución de Poisson es una distribución de probabilidad discreta que expresa, a partir de una frecuencia de ocurrencia media, la probabilidad de que ocurra un determinado número de eventos durante cierto período de tiempo. Concretamente, se especializa en la probabilidad de ocurrencia de sucesos con probabilidades muy pequeñas, o sucesos "raros".
						<button type="button" id="EjPoisson" class="btn btn-info Micss" data-toggle="modal" data-target="#MiVentana">Ejemplo</button>
						</p>
						<img id="Graficas" src="https://descalzarte5678.files.wordpress.com/2014/12/poisson-2.jpg">
						</div>
						`
		break;
		case 3:
			var str = `	<div class='animated fadeInLeftBig'>	
						<h1>Distribución Normal Estándar</h1>
						<p>
						En estadística y probabilidad se llama distribución normal, distribución de Gauss o distribución gaussiana, a una de las distribuciones de probabilidad de variable continua que con más frecuencia aparece aproximada en fenómenos reales.
						<button type="button" id="EjNormal" class="btn btn-info Micss" data-toggle="modal" data-target="#MiVentana">Ejemplo</button>
						</p>
						<img id="Graficas" src="https://qualitasaagg.files.wordpress.com/2015/01/curva-distribucic3b3n-normal.jpg">
						</div>
						`
		break;
		case 4:
			var str = `	<div class='animated fadeInRightBig'>	
						<h1>Distribución Uniforme Discreta</h1>
						<p>
						Tenemos esta distribución cuando el resultado de una experiencia aleatoria puede ser un conjunto finito de n posibles resultados, todos ellos igualmente probables.
						<button type="button" id="EjUniforme" class="btn btn-info Micss" data-toggle="modal" data-target="#MiVentana">Ejemplo</button>
						</p>
						<img id="Graficas" src="http://www.ub.edu/stat/GrupsInnovacio/Statmedia/demo/Temas/Capitulo3/Images/C3funiforme.gif">
						</div>
						`
		break;
		case 5:
			var str = `	<div class='animated zoomInDown'>	
						<h1>Distribución Continua</h1>
						<p>
						En teoría de la probabilidad una distribución de probabilidad se llama continua si su función de distribución es continua. Puesto que la función de distribución de una variable aleatoria X viene dada por <img id="Formula" src="https://upload.wikimedia.org/math/6/e/e/6eecbc08ae1a78514537162cf3adcba0.png">, la definición implica que en una distribución
						de probabilidad continua X se cumple P[X = a] = 0 para todo número real "a", esto es, la probabilidad de que X tome el valor "a" es cero para cualquier valor de "a". Si la distribución de X es continua, se llama a X variable aleatoria continua.
						En las distribuciones de probabilidad continuas, la distribución de probabilidad es la integral de la función de densidad, por lo que tenemos entonces que:
						<img id="Formulas" src="https://upload.wikimedia.org/math/4/b/0/4b0422c64cd974ebaceac1ee1327d6ae.png">
						<button type="button" id="EjContinua" class="btn btn-info Micss" data-toggle="modal" data-target="#MiVentana">Ejemplo</button>
						</p>
						<img id="Graficas" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Exponential_cdf.svg/300px-Exponential_cdf.svg.png">
						</div>
						`
		break;
		case 6:
			var str = `	<div class='animated bounceInDown'>	
						<h1>Distribución Uniforme Continua</h1>
						<p>
						En la distribución uniforme continua todos los intervalos de igual longitud en la distribución en su rango son igualmente probables. El
						dominio está definido por dos parámetros, a y b, que son sus valores minimo y maximo.
						<button type="button" id="EjUniformeContinua" class="btn btn-info Micss" data-toggle="modal" data-target="#MiVentana">Ejemplo</button>
						</p>
						<img id="Graficas" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Uniform_distribution_PDF.png/1024px-Uniform_distribution_PDF.png">
						</div>
						`
		break;
		case 7:
			var str = `	<div class='animated bounceInDown'>	
						<h1>Distribución Binomial Negativa</h1>
						<p>
						 Esta distribución puede considerarse como una extensión o ampliación de la distribución geométrica . La distribución binomial negativa es un modelo adecuado para tratar aquellos procesos en los que se repite un determinado ensayo o prueba hasta conseguir un número determinado de resultados favorables (por vez primera).
						<br>La función de cuantía de la distribución binomial negativa es: <img id="FormulaBinomial" src="https://www.uv.es/ceaces/base/modelos%20de%20probabilidad/Image138.gif">
						<br>La media y la Varianza: <img id="FormulasMedia" src="https://www.uv.es/ceaces/base/modelos%20de%20probabilidad/Image144.gif">
						<button type="button" id="EjBinomialNegativa" class="btn btn-info Micss" data-toggle="modal" data-target="#MiVentana">Ejemplo</button>
						</p>
						<img id="Graficas" src="http://gmein.uib.es/bioinformatica/estadistica/imagenes/dbinomialnegativa.gif">
						</div>
						`
		break;
	}
	$('#Texto').html(Botones+str);

//Navegación
	$('#Inicio').click(function(){
		Contenido(0);
	});

	$('#Binomial').click(function(){
		Contenido(1);
	});
	$('#Poisson').click(function(){
		Contenido(2);
	});
	$('#Normal').click(function(){
		Contenido(3);
	});

	$('#Uniforme').click(function(){
		Contenido(4);
	});
	$('#Continua').click(function(){
		Contenido(5);
	});
	$('#UniformeContinua').click(function(){
		Contenido(6);
	});
	$('#BinomialNegativa').click(function(){
		Contenido(7);
	});
	
//Botones de Ejemplos
	$('#EjBinomial').click(function(){
		Ejemplos(1,'Distribución Binomial');
	});

	$('#EjPoisson').click(function(){
		Ejemplos(2,'Distribución de Poisson');
	});

	$('#EjNormal').click(function(){
		Ejemplos(3,'Distribución Normal');
	});

	$('#EjUniforme').click(function(){
		Ejemplos(4,'Distribución Uniforme Discreta');
	});

	$('#EjContinua').click(function(){
		Ejemplos(5,'Distribución Continua');
	});

	$('#EjUniformeContinua').click(function(){
		Ejemplos(6,'Distribución Uniforme Continua');
	});

	$('#EjBinomialNegativa').click(function(){
		Ejemplos(7,'Distribución Binomial Negativa');
	});


}Contenido(0);

//Funciones de los Ejemplos

function Ejemplos (num,title){
	
	var head = `<div class="modal fade" id="MiVentana" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">${title}</h4>
                  </div>
                  <div id="DatosModal" class="modal-body">
                  `

	switch(num){
		case 1:
			Titulo = 'Distribución Binomial';
			var str = MuestraEjemploBinomial();
		break;
		case 2:
			Titulo = 'Distribución de Poisson';
			var str = "Ejemplo Poisson";
		break;
		case 3:
			Titulo = 'Distribución Normal';
			var str = "Ejemplo Normal";
		break;
		case 4:
			Titulo = 'Distribución Uniforme Discreta';
			var str = "Ejemplo Uniforme Discreta";
		break;
		case 5:
			Titulo = 'Distribución Continua';
			var str = "Ejemplo Distribución Continua";
		break;
		case 6:
			Titulo = 'Distribución Uniforme Continua';
			var str = "Ejemplo Distribución Uniforme Continua";
		break;
		case 7:
			Titulo = 'Distribución Binomial Negativa';
			var str = "Ejemplo Distribución Binomial Negativa";
		break;
	}
		var footer = `</div>
             <div class="modal-footer">
            </div>
           </div>
          </div>
         </div>`

$('#Ejemplos').html(head+str+footer);

$('#CalculaBinomial').click(function(){
	$('#Result').val(CalculaBinomial($('#k').val(),$('#n').val(),$('#p').val(),$('#q').val()));
	$('#ResultPorc').val(CalculaBinomial($('#k').val(),$('#n').val(),$('#p').val(),$('#q').val())*100 + "%");
})

$()

}Ejemplos(1,'Distribución Binomial');


function MuestraEjemploBinomial(){

	return 			`<p class="pModal">
							Tenmos el siguiente caso: Calcule la probabilidad de que en una familia que tiene cuatro hijos, tres de ellos sean "niños"
					   </p>
					   <br>
					   <p class="pModal">
					   		Debido a que es una distribución binomial, los hijos sólo pueden ser niños o niñas.
					   </p>
					   <br>
					   <p class="pModal">	Por lo tanto al tener dos posibles, la probabilidad es del 50/50 entoces: </p>
					   <br>
					   <div align="left">
					   <ul>
					   		<li>k = 3, Nos preguntan cual es la probabilidad de tener 3 "niños"</li>
					   		<li>n = 4, El espectro muestral, la familia tiene 4 hijos</li>
					   		<li>p = 0,5, La probabilidad de exito, 50% dado en decimales</li>
					   		<li>q = 0,5, La probabilidad de error, 50% dado en decimales</li>
					   </ul>
					   <p class="pModal">La formula que nos permite encontrar la probabilidad binomial es: <img class="imgModal" src="img/FormulaBinomial.PNG">
					    ahora bastara con sustituir los valores de la formula con los qué, ya hemos optenido del ejericio.
					   </p>
					   <input type="number" class="form-control inputModal" id="k" placeholder="K" required>
					   <input type="number" class="form-control inputModal" id="n" placeholder="n" required>
					   <input type="number" class="form-control inputModal" id="p" placeholder="p" required>
					   <input type="number" class="form-control inputModal" id="q" placeholder="q" required>
					   <p class="pModel">Nos piden P(X=3) = <input type="number" class="inputModalResult" id="Result" placeholder="Resultado">
					   <input type="text" class="inputModalResult" id="ResultPorc" placeholder="Porcentaje">
					   <button type="button" id="CalculaBinomial" class="btn btn-success">Calcular</button>
					  </p>
					   </div>
					   `;
}

function CalculaBinomial(k,n,p,q){
	return combinatoria(n,k)*Math.pow(p,k)*Math.pow(q,n-k);
}

function factorial(num){
	var factorial = 1;
 
        for (var i=1; i <= num; i++){
            factorial *= i;
        }
 
        return factorial;
}

function combinatoria(n,k){
	return factorial(n)/(factorial(k)*factorial(n-k));
}

})