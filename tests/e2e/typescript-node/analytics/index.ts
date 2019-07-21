/**
 * This client was automatically generated by Segment Typewriter. ** Do Not Edit **
 */

/**
 * Ajv is a peer dependency for development builds. It's used to apply run-time validation
 * to message payloads before passing them on to the underlying analytics instance.
 *
 * Note that the production bundle does not depend on Ajv.
 *
 * You can install it with: `npm install --save-dev ajv`.
 */
import Ajv from 'ajv'
import * as Segment from './segment'

export interface CustomViolationHandler {
	'regex property': string
}
export interface DefaultViolationHandler {
	'regex property': string
}
export interface EveryNullableOptionalType {
	/**
	 * Optional any property
	 */
	'optional any'?: any | null
	/**
	 * Optional array property
	 */
	'optional array'?: any[] | null
	/**
	 * Optional boolean property
	 */
	'optional boolean'?: boolean | null
	/**
	 * Optional integer property
	 */
	'optional int'?: number | null
	/**
	 * Optional number property
	 */
	'optional number'?: number | null
	/**
	 * Optional object property
	 */
	'optional object'?: Record<string, any> | null
	/**
	 * Optional string property
	 */
	'optional string'?: string | null
	/**
	 * Optional string property with a regex conditional
	 */
	'optional string with regex'?: string | null
}
export interface EveryNullableRequiredType {
	/**
	 * Required any property
	 */
	'required any': any | null
	/**
	 * Required array property
	 */
	'required array': any[] | null
	/**
	 * Required boolean property
	 */
	'required boolean': boolean | null
	/**
	 * Required integer property
	 */
	'required int': number | null
	/**
	 * Required number property
	 */
	'required number': number | null
	/**
	 * Required object property
	 */
	'required object': Record<string, any> | null
	/**
	 * Required string property
	 */
	'required string': string | null
	/**
	 * Required string property with a regex conditional
	 */
	'required string with regex': string | null
}
export interface EveryOptionalType {
	/**
	 * Optional any property
	 */
	'optional any'?: any | null
	/**
	 * Optional array property
	 */
	'optional array'?: any[]
	/**
	 * Optional boolean property
	 */
	'optional boolean'?: boolean
	/**
	 * Optional integer property
	 */
	'optional int'?: number
	/**
	 * Optional number property
	 */
	'optional number'?: number
	/**
	 * Optional object property
	 */
	'optional object'?: Record<string, any>
	/**
	 * Optional string property
	 */
	'optional string'?: string
	/**
	 * Optional string property with a regex conditional
	 */
	'optional string with regex'?: string
}
export interface EveryRequiredType {
	/**
	 * Required any property
	 */
	'required any': any | null
	/**
	 * Required array property
	 */
	'required array': any[]
	/**
	 * Required boolean property
	 */
	'required boolean': boolean
	/**
	 * Required integer property
	 */
	'required int': number
	/**
	 * Required number property
	 */
	'required number': number
	/**
	 * Required object property
	 */
	'required object': Record<string, any>
	/**
	 * Required string property
	 */
	'required string': string
	/**
	 * Required string property with a regex conditional
	 */
	'required string with regex': string
}
export interface UniverseCharacters {
	/**
	 * The character's name.
	 */
	name: string
}
export interface NestedArrays {
	/**
	 * All known characters from each universe.
	 */
	universeCharacters: UniverseCharacters[][]
}
export interface SubterraneanLab {
	"jerry's memories"?: any[]
	"morty's memories"?: any[]
	"summer's contingency plan"?: string
}
export interface Tunnel {
	'subterranean lab': SubterraneanLab
}
export interface Garage {
	tunnel: Tunnel
}
export interface NestedObjects {
	garage: Garage
}
export interface PropertiesCollided {
	'Property Collided': string
	property_collided: string
}
export interface Occupants {
	/**
	 * The name of this occupant.
	 */
	name: string
}
export interface Universe {
	/**
	 * The common name of this universe.
	 */
	name: string
	/**
	 * The most important occupants in this universe.
	 */
	occupants: Occupants[]
}
export interface PropertyObjectNameCollision1 {
	universe?: Universe
}
export interface Occupants1 {
	/**
	 * The name of this occupant.
	 */
	name: string
}
export interface Universe1 {
	/**
	 * The common name of this universe.
	 */
	name: string
	/**
	 * The most important occupants in this universe.
	 */
	occupants: Occupants1[]
}
export interface PropertyObjectNameCollision2 {
	universe?: Universe1
}
export interface PropertySanitized {
	'0000---terrible-property-name~!3': string
}
export interface Object {
	name?: string
}
export interface SimpleArrayTypes {
	any?: any[]
	boolean?: boolean[]
	integer?: number[]
	nullable?: string[]
	number?: number[]
	object?: Object[]
	string?: string[]
}
export interface UnionType {
	universe_name: string | number | null
}

export type ViolationHandler = (
	message: Segment.TrackMessage<Record<string, any>>,
	violations: Ajv.ErrorObject[]
) => boolean

export const defaultValidationErrorHandler: ViolationHandler = (
	message,
	violations
) => {
	const msg = JSON.stringify(
		{
			type: 'Typewriter JSON Schema Validation Error',
			description:
				`You made an analytics call (${
					message.event
				}) using Typewriter that doesn't match the ` +
				'Tracking Plan spec. Your analytics call will continue to fire in production.',
			errors: violations,
		},
		undefined,
		2
	)

	if (process.env.NODE_ENV === 'test') {
		throw new Error(msg)
	}
	console.warn(msg)

	return false
}

let onViolation = defaultValidationErrorHandler

const missingAnalyticsNodeError = new Error(`You must set an analytics-node instance:

>	const SegmentAnalytics = require('analytics-node')
>	const { setTypewriterOptions } = require('./analytics')
>
>	const analytics = new SegmentAnalytics('SEGMENT_WRITE_KEY')
>	setTypewriterOptions({
>		analytics: analytics,
>	})

For more information on analytics-node, see: https://segment.com/docs/sources/server/node/quickstart/
`)

let analytics: () => Segment.AnalyticsNode | undefined = () => {
	throw missingAnalyticsNodeError
}

/** Options to customize the runtime behavior of a Typewriter client. */
export interface TypewriterOptions {
	/**
	 * Underlying analytics instance where analytics calls are forwarded on to.
	 */
	analytics: Segment.AnalyticsNode
	/**
	 * Handler fired when if an event does not match its spec. Returns a boolean
	 * indicating if the message should still be sent to Segment. This handler
	 * does not fire in production mode, because it requires inlining the full
	 * JSON Schema spec for each event in your Tracking Plan.
	 *
	 * By default, it will throw errors if NODE_ENV = "test" so that tests will fail
	 * if a message does not match the spec. Otherwise, errors will be logged to stderr.
	 * Also by default, messages that generate Violations will be dropped.
	 */
	onViolation?: ViolationHandler
}

/**
 * Updates the run-time configuration of this Typewriter client.
 * This function must be called with a configured analytics-node instance before firing
 * any analytics calls, or else a `missingAnalyticsNodeError` error will be thrown.
 */
export function setTypewriterOptions(options: TypewriterOptions) {
	analytics = options.analytics ? () => options.analytics : analytics
	onViolation = options.onViolation || onViolation
}

/**
 * Validates a message against a JSON Schema using Ajv. If the message
 * is invalid, the `onViolation` handler will be called.
 * Returns true if the message should be sent on to Segment, and false otherwise.
 */
function matchesSchema(
	message: Segment.TrackMessage<Record<string, any>>,
	schema: object
): boolean {
	const ajv = new Ajv({ schemaId: 'auto', allErrors: true, verbose: true })
	ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-06.json'))
	ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-04.json'))

	if (!ajv.validate(schema, message) && ajv.errors) {
		return onViolation(message, ajv.errors)
	}

	return true
}

/**
 * Helper to attach metadata on Typewriter to outbound requests.
 * This is used for attribution and debugging by the Segment team.
 */
function withTypewriterContext<P, T extends Segment.TrackMessage<P>>(
	message: T
): T {
	return {
		...message,
		context: {
			...(message.context || {}),
			typewriter: {
				language: 'typescript',
				version: '7.0.0',
			},
		},
	}
}

/**
 * Fires a '42_--terrible==\\"event\'++name~!3' track call.
 */
export function I42TerribleEventName3(
	message: Segment.TrackMessage<Record<string, any>>,
	callback?: Segment.Callback
): void {
	const msg = withTypewriterContext({
		properties: {},
		...message,
		event: '42_--terrible==\\"event\'++name~!3',
	})

	const schema = {
		$schema: 'http://json-schema.org/draft-07/schema#',
		labels: {},
		properties: {
			context: {},
			properties: {
				type: 'object',
			},
			traits: {
				type: 'object',
			},
		},
		type: 'object',
		title: '42_--terrible==\\"event\'++name~!3',
	}
	if (!matchesSchema(msg, schema)) {
		return
	}

	const a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
/**
 * Fires a 'Analytics Instance Missing' track call.
 */
export function analyticsInstanceMissing(
	message: Segment.TrackMessage<Record<string, any>>,
	callback?: Segment.Callback
): void {
	const msg = withTypewriterContext({
		properties: {},
		...message,
		event: 'Analytics Instance Missing',
	})

	const schema = {
		$schema: 'http://json-schema.org/draft-07/schema#',
		labels: {},
		properties: {
			context: {},
			properties: {
				type: 'object',
			},
			traits: {
				type: 'object',
			},
		},
		type: 'object',
		title: 'Analytics Instance Missing',
	}
	if (!matchesSchema(msg, schema)) {
		return
	}

	const a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
/**
 * Fires a 'Analytics Instance Missing Threw Error' track call.
 */
export function analyticsInstanceMissingThrewError(
	message: Segment.TrackMessage<Record<string, any>>,
	callback?: Segment.Callback
): void {
	const msg = withTypewriterContext({
		properties: {},
		...message,
		event: 'Analytics Instance Missing Threw Error',
	})

	const schema = {
		$schema: 'http://json-schema.org/draft-07/schema#',
		labels: {},
		properties: {
			context: {},
			properties: {
				type: 'object',
			},
			traits: {
				type: 'object',
			},
		},
		type: 'object',
		title: 'Analytics Instance Missing Threw Error',
	}
	if (!matchesSchema(msg, schema)) {
		return
	}

	const a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
/**
 * Fires a 'Custom Violation Handler' track call.
 */
export function customViolationHandler(
	message: Segment.TrackMessage<CustomViolationHandler>,
	callback?: Segment.Callback
): void {
	const msg = withTypewriterContext({
		properties: {},
		...message,
		event: 'Custom Violation Handler',
	})

	const schema = {
		$schema: 'http://json-schema.org/draft-07/schema#',
		labels: {},
		properties: {
			context: {},
			properties: {
				properties: {
					'regex property': {
						description: '',
						pattern: 'Lawyer Morty|Evil Morty',
						type: 'string',
					},
				},
				required: ['regex property'],
				type: 'object',
			},
			traits: {
				type: 'object',
			},
		},
		required: ['properties'],
		type: 'object',
		title: 'Custom Violation Handler',
	}
	if (!matchesSchema(msg, schema)) {
		return
	}

	const a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
/**
 * Fires a 'Custom Violation Handler Called' track call.
 */
export function customViolationHandlerCalled(
	message: Segment.TrackMessage<Record<string, any>>,
	callback?: Segment.Callback
): void {
	const msg = withTypewriterContext({
		properties: {},
		...message,
		event: 'Custom Violation Handler Called',
	})

	const schema = {
		$schema: 'http://json-schema.org/draft-07/schema#',
		labels: {},
		properties: {
			context: {},
			properties: {
				type: 'object',
			},
			traits: {
				type: 'object',
			},
		},
		type: 'object',
		title: 'Custom Violation Handler Called',
	}
	if (!matchesSchema(msg, schema)) {
		return
	}

	const a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
/**
 * Fires a 'Default Violation Handler' track call.
 */
export function defaultViolationHandler(
	message: Segment.TrackMessage<DefaultViolationHandler>,
	callback?: Segment.Callback
): void {
	const msg = withTypewriterContext({
		properties: {},
		...message,
		event: 'Default Violation Handler',
	})

	const schema = {
		$schema: 'http://json-schema.org/draft-07/schema#',
		labels: {},
		properties: {
			context: {},
			properties: {
				properties: {
					'regex property': {
						description: '',
						pattern: 'Lawyer Morty|Evil Morty',
						type: 'string',
					},
				},
				required: ['regex property'],
				type: 'object',
			},
			traits: {
				type: 'object',
			},
		},
		required: ['properties'],
		type: 'object',
		title: 'Default Violation Handler',
	}
	if (!matchesSchema(msg, schema)) {
		return
	}

	const a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
/**
 * Fires a 'Default Violation Handler Called' track call.
 */
export function defaultViolationHandlerCalled(
	message: Segment.TrackMessage<Record<string, any>>,
	callback?: Segment.Callback
): void {
	const msg = withTypewriterContext({
		properties: {},
		...message,
		event: 'Default Violation Handler Called',
	})

	const schema = {
		$schema: 'http://json-schema.org/draft-07/schema#',
		labels: {},
		properties: {
			context: {},
			properties: {
				type: 'object',
			},
			traits: {
				type: 'object',
			},
		},
		type: 'object',
		title: 'Default Violation Handler Called',
	}
	if (!matchesSchema(msg, schema)) {
		return
	}

	const a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
/**
 * Fires a 'Empty Event' track call.
 */
export function emptyEvent(
	message: Segment.TrackMessage<Record<string, any>>,
	callback?: Segment.Callback
): void {
	const msg = withTypewriterContext({
		properties: {},
		...message,
		event: 'Empty Event',
	})

	const schema = {
		$schema: 'http://json-schema.org/draft-07/schema#',
		labels: {},
		properties: {
			context: {},
			properties: {
				type: 'object',
			},
			traits: {
				type: 'object',
			},
		},
		type: 'object',
		title: 'Empty Event',
	}
	if (!matchesSchema(msg, schema)) {
		return
	}

	const a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
/**
 * Fires a 'Event Collided' track call.
 */
export function eventCollided(
	message: Segment.TrackMessage<Record<string, any>>,
	callback?: Segment.Callback
): void {
	const msg = withTypewriterContext({
		properties: {},
		...message,
		event: 'Event Collided',
	})

	const schema = {
		$schema: 'http://json-schema.org/draft-07/schema#',
		labels: {},
		properties: {
			context: {},
			properties: {
				type: 'object',
			},
			traits: {
				type: 'object',
			},
		},
		type: 'object',
		title: 'Event Collided',
	}
	if (!matchesSchema(msg, schema)) {
		return
	}

	const a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
/**
 * Fires a 'Every Nullable Optional Type' track call.
 */
export function everyNullableOptionalType(
	message: Segment.TrackMessage<EveryNullableOptionalType>,
	callback?: Segment.Callback
): void {
	const msg = withTypewriterContext({
		properties: {},
		...message,
		event: 'Every Nullable Optional Type',
	})

	const schema = {
		$schema: 'http://json-schema.org/draft-07/schema#',
		properties: {
			context: {},
			properties: {
				properties: {
					'optional any': {
						description: 'Optional any property',
					},
					'optional array': {
						description: 'Optional array property',
						type: ['array', 'null'],
					},
					'optional boolean': {
						description: 'Optional boolean property',
						type: ['boolean', 'null'],
					},
					'optional int': {
						description: 'Optional integer property',
						type: ['integer', 'null'],
					},
					'optional number': {
						description: 'Optional number property',
						type: ['number', 'null'],
					},
					'optional object': {
						description: 'Optional object property',
						properties: {},
						required: [],
						type: ['object', 'null'],
					},
					'optional string': {
						description: 'Optional string property',
						type: ['string', 'null'],
					},
					'optional string with regex': {
						description: 'Optional string property with a regex conditional',
						pattern: 'Evil Morty|Lawyer Morty',
						type: ['string', 'null'],
					},
				},
				type: 'object',
			},
			traits: {},
		},
		type: 'object',
		title: 'Every Nullable Optional Type',
	}
	if (!matchesSchema(msg, schema)) {
		return
	}

	const a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
/**
 * Fires a 'Every Nullable Required Type' track call.
 */
export function everyNullableRequiredType(
	message: Segment.TrackMessage<EveryNullableRequiredType>,
	callback?: Segment.Callback
): void {
	const msg = withTypewriterContext({
		properties: {},
		...message,
		event: 'Every Nullable Required Type',
	})

	const schema = {
		$schema: 'http://json-schema.org/draft-07/schema#',
		properties: {
			context: {},
			properties: {
				properties: {
					'required any': {
						description: 'Required any property',
					},
					'required array': {
						description: 'Required array property',
						type: ['array', 'null'],
					},
					'required boolean': {
						description: 'Required boolean property',
						type: ['boolean', 'null'],
					},
					'required int': {
						description: 'Required integer property',
						type: ['integer', 'null'],
					},
					'required number': {
						description: 'Required number property',
						type: ['number', 'null'],
					},
					'required object': {
						description: 'Required object property',
						properties: {},
						required: [],
						type: ['object', 'null'],
					},
					'required string': {
						description: 'Required string property',
						type: ['string', 'null'],
					},
					'required string with regex': {
						description: 'Required string property with a regex conditional',
						pattern: 'Evil Morty|Lawyer Morty',
						type: ['string', 'null'],
					},
				},
				required: [
					'required any',
					'required array',
					'required boolean',
					'required int',
					'required number',
					'required object',
					'required string',
					'required string with regex',
				],
				type: 'object',
			},
			traits: {},
		},
		required: ['properties'],
		type: 'object',
		title: 'Every Nullable Required Type',
	}
	if (!matchesSchema(msg, schema)) {
		return
	}

	const a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
/**
 * Fires a 'Every Optional Type' track call.
 */
export function everyOptionalType(
	message: Segment.TrackMessage<EveryOptionalType>,
	callback?: Segment.Callback
): void {
	const msg = withTypewriterContext({
		properties: {},
		...message,
		event: 'Every Optional Type',
	})

	const schema = {
		$schema: 'http://json-schema.org/draft-07/schema#',
		properties: {
			context: {},
			properties: {
				properties: {
					'optional any': {
						description: 'Optional any property',
					},
					'optional array': {
						description: 'Optional array property',
						type: 'array',
					},
					'optional boolean': {
						description: 'Optional boolean property',
						type: 'boolean',
					},
					'optional int': {
						description: 'Optional integer property',
						type: 'integer',
					},
					'optional number': {
						description: 'Optional number property',
						type: 'number',
					},
					'optional object': {
						description: 'Optional object property',
						key: 'optional object',
						properties: {},
						required: [],
						type: 'object',
					},
					'optional string': {
						description: 'Optional string property',
						type: 'string',
					},
					'optional string with regex': {
						description: 'Optional string property with a regex conditional',
						pattern: 'Evil Morty|Lawyer Morty',
						type: 'string',
					},
				},
				type: 'object',
			},
			traits: {},
		},
		type: 'object',
		title: 'Every Optional Type',
	}
	if (!matchesSchema(msg, schema)) {
		return
	}

	const a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
/**
 * Fires a 'Every Required Type' track call.
 */
export function everyRequiredType(
	message: Segment.TrackMessage<EveryRequiredType>,
	callback?: Segment.Callback
): void {
	const msg = withTypewriterContext({
		properties: {},
		...message,
		event: 'Every Required Type',
	})

	const schema = {
		$schema: 'http://json-schema.org/draft-07/schema#',
		properties: {
			context: {},
			properties: {
				properties: {
					'required any': {
						description: 'Required any property',
					},
					'required array': {
						description: 'Required array property',
						type: 'array',
					},
					'required boolean': {
						description: 'Required boolean property',
						type: 'boolean',
					},
					'required int': {
						description: 'Required integer property',
						type: 'integer',
					},
					'required number': {
						description: 'Required number property',
						type: 'number',
					},
					'required object': {
						description: 'Required object property',
						key: 'required object',
						properties: {},
						required: [],
						type: 'object',
					},
					'required string': {
						description: 'Required string property',
						type: 'string',
					},
					'required string with regex': {
						description: 'Required string property with a regex conditional',
						pattern: 'Evil Morty|Lawyer Morty',
						type: 'string',
					},
				},
				required: [
					'required any',
					'required array',
					'required boolean',
					'required int',
					'required number',
					'required object',
					'required string',
					'required string with regex',
				],
				type: 'object',
			},
			traits: {},
		},
		required: ['properties'],
		type: 'object',
		title: 'Every Required Type',
	}
	if (!matchesSchema(msg, schema)) {
		return
	}

	const a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
/**
 * Fires a 'Nested Arrays' track call.
 */
export function nestedArrays(
	message: Segment.TrackMessage<NestedArrays>,
	callback?: Segment.Callback
): void {
	const msg = withTypewriterContext({
		properties: {},
		...message,
		event: 'Nested Arrays',
	})

	const schema = {
		$schema: 'http://json-schema.org/draft-07/schema#',
		labels: {},
		properties: {
			context: {},
			properties: {
				properties: {
					universeCharacters: {
						description: 'All known characters from each universe.',
						items: {
							description: '',
							items: {
								description: '',
								properties: {
									name: {
										description: "The character's name.",
										type: 'string',
									},
								},
								required: ['name'],
								type: 'object',
							},
							type: 'array',
						},
						type: 'array',
					},
				},
				required: ['universeCharacters'],
				type: 'object',
			},
			traits: {
				type: 'object',
			},
		},
		required: ['properties'],
		type: 'object',
		title: 'Nested Arrays',
	}
	if (!matchesSchema(msg, schema)) {
		return
	}

	const a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
/**
 * Fires a 'Nested Objects' track call.
 */
export function nestedObjects(
	message: Segment.TrackMessage<NestedObjects>,
	callback?: Segment.Callback
): void {
	const msg = withTypewriterContext({
		properties: {},
		...message,
		event: 'Nested Objects',
	})

	const schema = {
		$schema: 'http://json-schema.org/draft-07/schema#',
		labels: {},
		properties: {
			context: {},
			properties: {
				properties: {
					garage: {
						description: '',
						properties: {
							tunnel: {
								description: '',
								properties: {
									'subterranean lab': {
										description: '',
										properties: {
											"jerry's memories": {
												description: '',
												type: 'array',
											},
											"morty's memories": {
												description: '',
												type: 'array',
											},
											"summer's contingency plan": {
												description: '',
												type: 'string',
											},
										},
										required: [],
										type: 'object',
									},
								},
								required: ['subterranean lab'],
								type: 'object',
							},
						},
						required: ['tunnel'],
						type: 'object',
					},
				},
				required: ['garage'],
				type: 'object',
			},
			traits: {
				type: 'object',
			},
		},
		required: ['properties'],
		type: 'object',
		title: 'Nested Objects',
	}
	if (!matchesSchema(msg, schema)) {
		return
	}

	const a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
/**
 * Fires a 'Properties Collided' track call.
 */
export function propertiesCollided(
	message: Segment.TrackMessage<PropertiesCollided>,
	callback?: Segment.Callback
): void {
	const msg = withTypewriterContext({
		properties: {},
		...message,
		event: 'Properties Collided',
	})

	const schema = {
		$schema: 'http://json-schema.org/draft-07/schema#',
		labels: {},
		properties: {
			context: {},
			properties: {
				properties: {
					'Property Collided': {
						description: '',
						type: 'string',
					},
					property_collided: {
						description: '',
						type: 'string',
					},
				},
				required: ['property_collided', 'Property Collided'],
				type: 'object',
			},
			traits: {
				type: 'object',
			},
		},
		required: ['properties'],
		type: 'object',
		title: 'Properties Collided',
	}
	if (!matchesSchema(msg, schema)) {
		return
	}

	const a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
/**
 * Fires a 'Property Object Name Collision #1' track call.
 */
export function propertyObjectNameCollision1(
	message: Segment.TrackMessage<PropertyObjectNameCollision1>,
	callback?: Segment.Callback
): void {
	const msg = withTypewriterContext({
		properties: {},
		...message,
		event: 'Property Object Name Collision #1',
	})

	const schema = {
		$schema: 'http://json-schema.org/draft-07/schema#',
		labels: {},
		properties: {
			context: {},
			properties: {
				properties: {
					universe: {
						description: '',
						properties: {
							name: {
								description: 'The common name of this universe.',
								type: 'string',
							},
							occupants: {
								description: 'The most important occupants in this universe.',
								items: {
									description: '',
									properties: {
										name: {
											description: 'The name of this occupant.',
											type: 'string',
										},
									},
									required: ['name'],
									type: 'object',
								},
								type: 'array',
							},
						},
						required: ['name', 'occupants'],
						type: 'object',
					},
				},
				type: 'object',
			},
			traits: {
				type: 'object',
			},
		},
		type: 'object',
		title: 'Property Object Name Collision #1',
	}
	if (!matchesSchema(msg, schema)) {
		return
	}

	const a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
/**
 * Fires a 'Property Object Name Collision #2' track call.
 */
export function propertyObjectNameCollision2(
	message: Segment.TrackMessage<PropertyObjectNameCollision2>,
	callback?: Segment.Callback
): void {
	const msg = withTypewriterContext({
		properties: {},
		...message,
		event: 'Property Object Name Collision #2',
	})

	const schema = {
		$schema: 'http://json-schema.org/draft-07/schema#',
		labels: {},
		properties: {
			context: {},
			properties: {
				properties: {
					universe: {
						description: '',
						properties: {
							name: {
								description: 'The common name of this universe.',
								type: 'string',
							},
							occupants: {
								description: 'The most important occupants in this universe.',
								items: {
									description: '',
									properties: {
										name: {
											description: 'The name of this occupant.',
											type: 'string',
										},
									},
									required: ['name'],
									type: 'object',
								},
								type: 'array',
							},
						},
						required: ['name', 'occupants'],
						type: 'object',
					},
				},
				type: 'object',
			},
			traits: {
				type: 'object',
			},
		},
		type: 'object',
		title: 'Property Object Name Collision #2',
	}
	if (!matchesSchema(msg, schema)) {
		return
	}

	const a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
/**
 * Fires a 'Property Sanitized' track call.
 */
export function propertySanitized(
	message: Segment.TrackMessage<PropertySanitized>,
	callback?: Segment.Callback
): void {
	const msg = withTypewriterContext({
		properties: {},
		...message,
		event: 'Property Sanitized',
	})

	const schema = {
		$schema: 'http://json-schema.org/draft-07/schema#',
		labels: {},
		properties: {
			context: {},
			properties: {
				properties: {
					'0000---terrible-property-name~!3': {
						description: '',
						type: 'string',
					},
				},
				required: ['0000---terrible-property-name~!3'],
				type: 'object',
			},
			traits: {
				type: 'object',
			},
		},
		required: ['properties'],
		type: 'object',
		title: 'Property Sanitized',
	}
	if (!matchesSchema(msg, schema)) {
		return
	}

	const a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
/**
 * Fires a 'Simple Array Types' track call.
 */
export function simpleArrayTypes(
	message: Segment.TrackMessage<SimpleArrayTypes>,
	callback?: Segment.Callback
): void {
	const msg = withTypewriterContext({
		properties: {},
		...message,
		event: 'Simple Array Types',
	})

	const schema = {
		$schema: 'http://json-schema.org/draft-07/schema#',
		labels: {},
		properties: {
			context: {},
			properties: {
				properties: {
					any: {
						description: '',
						items: {
							description: '',
						},
						type: 'array',
					},
					boolean: {
						description: '',
						items: {
							description: '',
							type: 'boolean',
						},
						type: 'array',
					},
					integer: {
						description: '',
						items: {
							description: '',
							type: 'integer',
						},
						type: 'array',
					},
					nullable: {
						description: '',
						items: {
							description: '',
							type: ['string', 'null'],
						},
						type: 'array',
					},
					number: {
						description: '',
						items: {
							description: '',
							type: 'number',
						},
						type: 'array',
					},
					object: {
						description: '',
						items: {
							description: '',
							properties: {
								name: {
									description: '',
									type: 'string',
								},
							},
							required: [],
							type: 'object',
						},
						type: 'array',
					},
					string: {
						description: '',
						items: {
							description: '',
							type: 'string',
						},
						type: 'array',
					},
				},
				type: 'object',
			},
			traits: {
				type: 'object',
			},
		},
		type: 'object',
		title: 'Simple Array Types',
	}
	if (!matchesSchema(msg, schema)) {
		return
	}

	const a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
/**
 * Fires a 'Union Type' track call.
 */
export function unionType(
	message: Segment.TrackMessage<UnionType>,
	callback?: Segment.Callback
): void {
	const msg = withTypewriterContext({
		properties: {},
		...message,
		event: 'Union Type',
	})

	const schema = {
		$schema: 'http://json-schema.org/draft-07/schema#',
		labels: {},
		properties: {
			context: {},
			properties: {
				properties: {
					universe_name: {
						description: '',
						type: ['string', 'null', 'integer'],
					},
				},
				required: ['universe_name'],
				type: 'object',
			},
			traits: {
				type: 'object',
			},
		},
		required: ['properties'],
		type: 'object',
		title: 'Union Type',
	}
	if (!matchesSchema(msg, schema)) {
		return
	}

	const a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
/**
 * Fires a 'event_collided' track call.
 */
export function eventCollided1(
	message: Segment.TrackMessage<Record<string, any>>,
	callback?: Segment.Callback
): void {
	const msg = withTypewriterContext({
		properties: {},
		...message,
		event: 'event_collided',
	})

	const schema = {
		$schema: 'http://json-schema.org/draft-07/schema#',
		labels: {},
		properties: {
			context: {},
			properties: {
				type: 'object',
			},
			traits: {
				type: 'object',
			},
		},
		type: 'object',
		title: 'event_collided',
	}
	if (!matchesSchema(msg, schema)) {
		return
	}

	const a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
