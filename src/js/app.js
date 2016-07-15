(function(Vue) {
	'use strict';

	new Vue({
		el: "#app",
		data: {
			resultado : 'Seu resultado é '
		},

		methods: {
			calculaImc : function(imc, event) {
				event.preventDefault();

				var calculo = (imc.peso/ Math.pow(imc.altura, 2) * 10000) ;

				this.resultado = this.resultado + calculo.toFixed(2);
			}
		}
	});
})(Vue);