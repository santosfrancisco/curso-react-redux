const restful = require('node-restful')
const mongoose = restful.mongoose

const creditSchema = new mongoose.Schema({
	name: {
		type: String,
		 required: true
		},
	value: {
		type: Number,
		min: 0,
		required: true
	}
})

const debtSchema = new mongoose.Schema({
	name: {
		type: String, 
		required: true
	},
	value: {
		type: Number, 
		required: true
	},
	status: {
		type: String,
		required: false,
		enum: ['PAGO', 'PENDENTE', 'AGENDADO']
	}
})

const billingCycleSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'O campo NOME é obrigatório'],
	},
	month: {
		type: Number,
		min: 1,
		max: 12,
		required: [true, 'O campo MÊS é obrigatório'],
	},
	year: {
		type: Number,
		required: [true, 'O campo ANO é obrigatório'],
		min: 1970,
		max: 2100
	},
	credits: [creditSchema],
	debts: [debtSchema]
})

module.exports = restful.model('BillingCycle', billingCycleSchema)