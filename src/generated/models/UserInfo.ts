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
import type { UserEventInfo } from './UserEventInfo';
import {
    UserEventInfoFromJSON,
    UserEventInfoFromJSONTyped,
    UserEventInfoToJSON,
} from './UserEventInfo';
import type { WebAuthnDevices } from './WebAuthnDevices';
import {
    WebAuthnDevicesFromJSON,
    WebAuthnDevicesFromJSONTyped,
    WebAuthnDevicesToJSON,
} from './WebAuthnDevices';

/**
 * 
 * @export
 * @interface UserInfo
 */
export interface UserInfo {
    /**
     * 
     * @type {Date}
     * @memberof UserInfo
     */
    created_at: Date;
    /**
     * 
     * @type {string}
     * @memberof UserInfo
     */
    email: string;
    /**
     * 
     * @type {boolean}
     * @memberof UserInfo
     */
    email_verified: boolean;
    /**
     * 
     * @type {string}
     * @memberof UserInfo
     */
    id: string;
    /**
     * 
     * @type {Date}
     * @memberof UserInfo
     */
    last_login_at: Date;
    /**
     * 
     * @type {number}
     * @memberof UserInfo
     */
    login_count: number;
    /**
     * 
     * @type {string}
     * @memberof UserInfo
     */
    phone: string;
    /**
     * 
     * @type {boolean}
     * @memberof UserInfo
     */
    phone_verified: boolean;
    /**
     * 
     * @type {Array<UserEventInfo>}
     * @memberof UserInfo
     */
    recent_events: Array<UserEventInfo>;
    /**
     * 
     * @type {string}
     * @memberof UserInfo
     */
    status: string;
    /**
     * 
     * @type {Date}
     * @memberof UserInfo
     */
    updated_at: Date;
    /**
     * 
     * @type {object}
     * @memberof UserInfo
     */
    user_metadata: object | null;
    /**
     * 
     * @type {boolean}
     * @memberof UserInfo
     */
    webauthn: boolean;
    /**
     * 
     * @type {Array<WebAuthnDevices>}
     * @memberof UserInfo
     */
    webauthn_devices: Array<WebAuthnDevices>;
}

/**
 * Check if a given object implements the UserInfo interface.
 */
export function instanceOfUserInfo(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "created_at" in value;
    isInstance = isInstance && "email" in value;
    isInstance = isInstance && "email_verified" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "last_login_at" in value;
    isInstance = isInstance && "login_count" in value;
    isInstance = isInstance && "phone" in value;
    isInstance = isInstance && "phone_verified" in value;
    isInstance = isInstance && "recent_events" in value;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "updated_at" in value;
    isInstance = isInstance && "user_metadata" in value;
    isInstance = isInstance && "webauthn" in value;
    isInstance = isInstance && "webauthn_devices" in value;

    return isInstance;
}

export function UserInfoFromJSON(json: any): UserInfo {
    return UserInfoFromJSONTyped(json, false);
}

export function UserInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'created_at': (new Date(json['created_at'])),
        'email': json['email'],
        'email_verified': json['email_verified'],
        'id': json['id'],
        'last_login_at': (new Date(json['last_login_at'])),
        'login_count': json['login_count'],
        'phone': json['phone'],
        'phone_verified': json['phone_verified'],
        'recent_events': ((json['recent_events'] as Array<any>)?.map(UserEventInfoFromJSON)),
        'status': json['status'],
        'updated_at': (new Date(json['updated_at'])),
        'user_metadata': json['user_metadata'],
        'webauthn': json['webauthn'],
        'webauthn_devices': ((json['webauthn_devices'] as Array<any>)?.map(WebAuthnDevicesFromJSON)),
    };
}

export function UserInfoToJSON(value?: UserInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'created_at': (value.created_at.toISOString()),
        'email': value.email,
        'email_verified': value.email_verified,
        'id': value.id,
        'last_login_at': (value.last_login_at.toISOString()),
        'login_count': value.login_count,
        'phone': value.phone,
        'phone_verified': value.phone_verified,
        'recent_events': ((value.recent_events as Array<any>)?.map(UserEventInfoToJSON)),
        'status': value.status,
        'updated_at': (value.updated_at.toISOString()),
        'user_metadata': value.user_metadata,
        'webauthn': value.webauthn,
        'webauthn_devices': ((value.webauthn_devices as Array<any>)?.map(WebAuthnDevicesToJSON)),
    };
}
