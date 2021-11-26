
const {Usuario} = require('../models');

const IndexController = {
	index(req,res){
		res.render('home')
	},
	async salvar(req,res){
		const{ nome,email,mensagem } = req.body;

		const resultado = await Usuario.create(
			{
				nome,
				email,
				mensagem
			}
		);
		
		console.log(resultado)
		return res.redirect('/')
	}

}

module.exports = IndexController;