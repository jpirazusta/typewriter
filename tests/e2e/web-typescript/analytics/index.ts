/**
 * This client was automatically generated by Segment Typewriter. ** Do Not Edit **
 */

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
	message: Record<string, any>,
	violations: any[]
) => boolean

let analytics: () => SegmentAnalytics.AnalyticsJS | undefined = () => {
	return window.analytics
}

/** Options to customize the runtime behavior of a Typewriter client. */
export interface TypewriterOptions {
	/**
	 * Underlying analytics instance where analytics calls are forwarded on to.
	 * Defaults to window.analytics.
	 */
	analytics?: SegmentAnalytics.AnalyticsJS
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
 */
export function setTypewriterOptions(options: TypewriterOptions) {
	analytics = options.analytics
		? () => options.analytics || window.analytics
		: analytics
}

/**
 * Helper to attach metadata on Typewriter to outbound requests.
 * This is used for attribution and debugging by the Segment team.
 */
function withTypewriterContext(message: Segment.Options = {}): Segment.Options {
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
	props?: Record<string, any>,
	options?: Segment.Options,
	callback?: Segment.Callback
): void {
	const a = analytics()
	if (a) {
		a.track(
			'42_--terrible==\\"event\'++name~!3',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * Fires a 'Analytics Instance Missing' track call.
 */
export function analyticsInstanceMissing(
	props?: Record<string, any>,
	options?: Segment.Options,
	callback?: Segment.Callback
): void {
	const a = analytics()
	if (a) {
		a.track(
			'Analytics Instance Missing',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * Fires a 'Analytics Instance Missing Threw Error' track call.
 */
export function analyticsInstanceMissingThrewError(
	props?: Record<string, any>,
	options?: Segment.Options,
	callback?: Segment.Callback
): void {
	const a = analytics()
	if (a) {
		a.track(
			'Analytics Instance Missing Threw Error',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * Fires a 'Custom Violation Handler' track call.
 */
export function customViolationHandler(
	props: CustomViolationHandler,
	options?: Segment.Options,
	callback?: Segment.Callback
): void {
	const a = analytics()
	if (a) {
		a.track(
			'Custom Violation Handler',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * Fires a 'Custom Violation Handler Called' track call.
 */
export function customViolationHandlerCalled(
	props?: Record<string, any>,
	options?: Segment.Options,
	callback?: Segment.Callback
): void {
	const a = analytics()
	if (a) {
		a.track(
			'Custom Violation Handler Called',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * Fires a 'Default Violation Handler' track call.
 */
export function defaultViolationHandler(
	props: DefaultViolationHandler,
	options?: Segment.Options,
	callback?: Segment.Callback
): void {
	const a = analytics()
	if (a) {
		a.track(
			'Default Violation Handler',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * Fires a 'Default Violation Handler Called' track call.
 */
export function defaultViolationHandlerCalled(
	props?: Record<string, any>,
	options?: Segment.Options,
	callback?: Segment.Callback
): void {
	const a = analytics()
	if (a) {
		a.track(
			'Default Violation Handler Called',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * Fires a 'Empty Event' track call.
 */
export function emptyEvent(
	props?: Record<string, any>,
	options?: Segment.Options,
	callback?: Segment.Callback
): void {
	const a = analytics()
	if (a) {
		a.track(
			'Empty Event',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * Fires a 'Event Collided' track call.
 */
export function eventCollided(
	props?: Record<string, any>,
	options?: Segment.Options,
	callback?: Segment.Callback
): void {
	const a = analytics()
	if (a) {
		a.track(
			'Event Collided',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * Fires a 'Every Nullable Optional Type' track call.
 */
export function everyNullableOptionalType(
	props?: EveryNullableOptionalType,
	options?: Segment.Options,
	callback?: Segment.Callback
): void {
	const a = analytics()
	if (a) {
		a.track(
			'Every Nullable Optional Type',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * Fires a 'Every Nullable Required Type' track call.
 */
export function everyNullableRequiredType(
	props: EveryNullableRequiredType,
	options?: Segment.Options,
	callback?: Segment.Callback
): void {
	const a = analytics()
	if (a) {
		a.track(
			'Every Nullable Required Type',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * Fires a 'Every Optional Type' track call.
 */
export function everyOptionalType(
	props?: EveryOptionalType,
	options?: Segment.Options,
	callback?: Segment.Callback
): void {
	const a = analytics()
	if (a) {
		a.track(
			'Every Optional Type',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * Fires a 'Every Required Type' track call.
 */
export function everyRequiredType(
	props: EveryRequiredType,
	options?: Segment.Options,
	callback?: Segment.Callback
): void {
	const a = analytics()
	if (a) {
		a.track(
			'Every Required Type',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * Fires a 'Nested Arrays' track call.
 */
export function nestedArrays(
	props: NestedArrays,
	options?: Segment.Options,
	callback?: Segment.Callback
): void {
	const a = analytics()
	if (a) {
		a.track(
			'Nested Arrays',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * Fires a 'Nested Objects' track call.
 */
export function nestedObjects(
	props: NestedObjects,
	options?: Segment.Options,
	callback?: Segment.Callback
): void {
	const a = analytics()
	if (a) {
		a.track(
			'Nested Objects',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * Fires a 'Properties Collided' track call.
 */
export function propertiesCollided(
	props: PropertiesCollided,
	options?: Segment.Options,
	callback?: Segment.Callback
): void {
	const a = analytics()
	if (a) {
		a.track(
			'Properties Collided',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * Fires a 'Property Object Name Collision #1' track call.
 */
export function propertyObjectNameCollision1(
	props?: PropertyObjectNameCollision1,
	options?: Segment.Options,
	callback?: Segment.Callback
): void {
	const a = analytics()
	if (a) {
		a.track(
			'Property Object Name Collision #1',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * Fires a 'Property Object Name Collision #2' track call.
 */
export function propertyObjectNameCollision2(
	props?: PropertyObjectNameCollision2,
	options?: Segment.Options,
	callback?: Segment.Callback
): void {
	const a = analytics()
	if (a) {
		a.track(
			'Property Object Name Collision #2',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * Fires a 'Property Sanitized' track call.
 */
export function propertySanitized(
	props: PropertySanitized,
	options?: Segment.Options,
	callback?: Segment.Callback
): void {
	const a = analytics()
	if (a) {
		a.track(
			'Property Sanitized',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * Fires a 'Simple Array Types' track call.
 */
export function simpleArrayTypes(
	props?: SimpleArrayTypes,
	options?: Segment.Options,
	callback?: Segment.Callback
): void {
	const a = analytics()
	if (a) {
		a.track(
			'Simple Array Types',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * Fires a 'Union Type' track call.
 */
export function unionType(
	props: UnionType,
	options?: Segment.Options,
	callback?: Segment.Callback
): void {
	const a = analytics()
	if (a) {
		a.track('Union Type', props || {}, withTypewriterContext(options), callback)
	}
}
/**
 * Fires a 'event_collided' track call.
 */
export function eventCollided1(
	props?: Record<string, any>,
	options?: Segment.Options,
	callback?: Segment.Callback
): void {
	const a = analytics()
	if (a) {
		a.track(
			'event_collided',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
