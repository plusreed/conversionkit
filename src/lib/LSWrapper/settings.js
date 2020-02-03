import { CONFIG_KEY, EMPTY_OBJECT, ERRORS } from './defs';
import { checkLocalStorageSupport } from './utils';

let { ERRORS: { LS_NOT_AVAILABLE, KEY_NONEXISTANT, SETTINGS_NOT_AVAILABLE } } = ERRORS;

export function initializeNewSettingsRepository() {
    if (checkLocalStorageSupport() === true) {
        localStorage.setItem(CONFIG_KEY, JSON.stringify(EMPTY_OBJECT))
    } else throw new Error(LS_NOT_AVAILABLE);
}

export function isSettingsExist() {
    if (checkLocalStorageSupport() === true) {
        let settings = localStorage.getItem(CONFIG_KEY);

        if (settings == null) {
            return false;
        } else return true;
    } else throw new Error(LS_NOT_AVAILABLE);
}

export function getSettings() {
    if (checkLocalStorageSupport() === true) {
        let settings = JSON.parse(localStorage.getItem(CONFIG_KEY));

        if (settings == null) {
             throw new Error(SETTINGS_NOT_AVAILABLE);
        } else return settings;
    } else throw new Error(LS_NOT_AVAILABLE);
}

export function writeSetting(key, data) {
    if (checkLocalStorageSupport() === true) {
        let settings = JSON.parse(localStorage.getItem(CONFIG_KEY));
        settings[key] = data;

        localStorage.setItem(CONFIG_KEY, JSON.stringify(settings));
    } else throw new Error(LS_NOT_AVAILABLE);
}

export function readSetting(key) {
    if (checkLocalStorageSupport() === true) {
        let settings = JSON.parse(localStorage.getItem(CONFIG_KEY));

        if (typeof settings[key] === 'undefined') {
            throw new Error(KEY_NONEXISTANT);
        } else return settings[key];
    } else throw new Error(LS_NOT_AVAILABLE);
}