// jest.setup.js
import 'jsdom-global/register'; // Import jsdom-global to set up the DOM environment
import { JSDOM } from 'jsdom';

const dom = new JSDOM('<!doctype html><html><body></body></html>');
global.document = dom.window.document;
global.window = dom.window;
