const express = require('express')
const auth = require("./auth")

module.exports = function(server){

  // api com validaçao de token
	const protectedApi = express.Router()
  server.use('/api', protectedApi)
  
  protectedApi.use(auth)

	const BillingCycle = require('../api/billing-cycle/billing-cycle-service')
  BillingCycle.register(protectedApi, '/billingcycles')
  
  // api sem necessidade de validaçao de token
  const openApi = express.Router()
  server.use("/oapi", openApi)

  const authService = require("../api/user/authService")
  openApi.post("/login", authService.login)
  openApi.post("/signup", authService.signup)
  openApi.post("/validatetoken", authService.validateToken)
}