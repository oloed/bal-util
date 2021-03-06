# Requires
assert = require('assert')
joe = require('joe')
balUtil = require(__dirname+'/../lib/balutil')
util = require('util')


# =====================================
# Tests

# Types
joe.describe 'type', (describe,it) ->
	# Prepare
	typeTestData = [
		[false,'boolean']
		[true,'boolean']
		['','string']
		[{},'object']
		[(->),'function']
		[null,'null']
		[undefined,'undefined']
		[/a/,'regex']
		[1,'number']
	]

	# Handler
	testType = (value,typeExpected,typeActual) ->
		it "should detect #{util.inspect value} is of type #{typeExpected}", ->
			assert.equal(typeActual,typeExpected)

	# Run
	for [value,typeExpected] in typeTestData
		typeActual = balUtil.type.get(value)
		testType(value,typeExpected,typeActual)

