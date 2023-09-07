/* tslint:disable */
/* eslint-disable */
/**
 * Passage Management API
 * Passage\'s management API to manage your Passage apps and users.
 *
 * The version of the OpenAPI document: v1
 * Contact: support@passage.id
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface WebAuthnDevices
 */
export interface WebAuthnDevices {
    /**
     * The first time this webAuthn device was used to authenticate the user
     * @type {Date}
     * @memberof WebAuthnDevices
     */
    created_at: Date;
    /**
     * The CredID for this webAuthn device
     * @type {string}
     * @memberof WebAuthnDevices
     */
    cred_id: string;
    /**
     * The friendly name for the webAuthn device used to authenticate
     * @type {string}
     * @memberof WebAuthnDevices
     */
    friendly_name: string;
    /**
     * The ID of the webAuthn device used for authentication
     * @type {string}
     * @memberof WebAuthnDevices
     */
    id: string;
    /**
     * The last time this webAuthn device was used to authenticate the user
     * @type {Date}
     * @memberof WebAuthnDevices
     */
    last_login_at: Date;
    /**
     * The last time this webAuthn device was updated
     * @type {Date}
     * @memberof WebAuthnDevices
     */
    updated_at: Date;
    /**
     * How many times this webAuthn device has been used to authenticate the user
     * @type {number}
     * @memberof WebAuthnDevices
     */
    usage_count: number;
}

/**
 * Check if a given object implements the WebAuthnDevices interface.
 */
export function instanceOfWebAuthnDevices(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "created_at" in value;
    isInstance = isInstance && "cred_id" in value;
    isInstance = isInstance && "friendly_name" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "last_login_at" in value;
    isInstance = isInstance && "updated_at" in value;
    isInstance = isInstance && "usage_count" in value;

    return isInstance;
}

export function WebAuthnDevicesFromJSON(json: any): WebAuthnDevices {
    return WebAuthnDevicesFromJSONTyped(json, false);
}

export function WebAuthnDevicesFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebAuthnDevices {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'created_at': (new Date(json['created_at'])),
        'cred_id': json['cred_id'],
        'friendly_name': json['friendly_name'],
        'id': json['id'],
        'last_login_at': (new Date(json['last_login_at'])),
        'updated_at': (new Date(json['updated_at'])),
        'usage_count': json['usage_count'],
    };
}

export function WebAuthnDevicesToJSON(value?: WebAuthnDevices | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'created_at': (value.created_at.toISOString()),
        'cred_id': value.cred_id,
        'friendly_name': value.friendly_name,
        'id': value.id,
        'last_login_at': (value.last_login_at.toISOString()),
        'updated_at': (value.updated_at.toISOString()),
        'usage_count': value.usage_count,
    };
}
