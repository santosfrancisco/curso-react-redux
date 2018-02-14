const express = require('express')

module.exports = function(server){

	const router = express.Router()
	server.use('/api', router)

	// routes
	const BillingCycle = require('../api/billing-cycle/billing-cycle-service')
	BillingCycle.register(router, '/billingcycles')
}