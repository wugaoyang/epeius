function __cf_cjs(esm) {
    const cjs = 'default' in esm ? esm.default : {};
    for (const [k, v] of Object.entries(esm)) {
        if (k !== 'default') {
            Object.defineProperty(cjs, k, {
                enumerable: true,
                value: v,
            });
        }
    }
    return cjs;
}
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn2, res) => function __init() {
    return fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])(fn2 = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
    for (var name in all)
        __defProp(target, name, { get: all[name], enumerable: true });
};
var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
};

// node_modules/wrangler/_virtual_unenv_global_polyfill-clear$immediate.js
var init_virtual_unenv_global_polyfill_clear_immediate = __esm({
    "node_modules/wrangler/_virtual_unenv_global_polyfill-clear$immediate.js"() {
        init_cloudflare();
        globalThis.clearImmediate = clearImmediateFallback;
    }
});

// node_modules/unenv/runtime/_internal/utils.mjs
function createNotImplementedError(name) {
    return new Error(`[unenv] ${name} is not implemented yet!`);
}
function notImplemented(name) {
    const fn2 = /* @__PURE__ */ __name(() => {
        throw createNotImplementedError(name);
    }, "fn");
    return Object.assign(fn2, { __unenv__: true });
}
function notImplementedClass(name) {
    return class {
        __unenv__ = true;
        constructor() {
            throw new Error(`[unenv] ${name} is not implemented yet!`);
        }
    };
}
var init_utils = __esm({
    "node_modules/unenv/runtime/_internal/utils.mjs"() {
        init_virtual_unenv_global_polyfill_process();
        init_virtual_unenv_global_polyfill_performance();
        init_virtual_unenv_global_polyfill_console();
        init_virtual_unenv_global_polyfill_set_immediate();
        init_virtual_unenv_global_polyfill_clear_immediate();
        __name(createNotImplementedError, "createNotImplementedError");
        __name(notImplemented, "notImplemented");
        __name(notImplementedClass, "notImplementedClass");
    }
});

// node_modules/unenv/runtime/mock/noop.mjs
var noop_default;
var init_noop = __esm({
    "node_modules/unenv/runtime/mock/noop.mjs"() {
        init_virtual_unenv_global_polyfill_process();
        init_virtual_unenv_global_polyfill_performance();
        init_virtual_unenv_global_polyfill_console();
        init_virtual_unenv_global_polyfill_set_immediate();
        init_virtual_unenv_global_polyfill_clear_immediate();
        noop_default = Object.assign(() => {
        }, { __unenv__: true });
    }
});

// node_modules/unenv/runtime/node/timers/internal/immediate.mjs
var Immediate;
var init_immediate = __esm({
    "node_modules/unenv/runtime/node/timers/internal/immediate.mjs"() {
        init_virtual_unenv_global_polyfill_process();
        init_virtual_unenv_global_polyfill_performance();
        init_virtual_unenv_global_polyfill_console();
        init_virtual_unenv_global_polyfill_set_immediate();
        init_virtual_unenv_global_polyfill_clear_immediate();
        Immediate = class {
            _onImmediate;
            _timeout;
            constructor(callback, args) {
                this._onImmediate = callback;
                if ("setTimeout" in globalThis) {
                    this._timeout = setTimeout(callback, 0, ...args);
                } else {
                    callback(...args);
                }
            }
            ref() {
                this._timeout?.ref();
                return this;
            }
            unref() {
                this._timeout?.unref();
                return this;
            }
            hasRef() {
                return this._timeout?.hasRef() ?? false;
            }
            [Symbol.dispose]() {
                if ("clearTimeout" in globalThis) {
                    clearTimeout(this._timeout);
                }
            }
        };
        __name(Immediate, "Immediate");
    }
});

// node_modules/unenv/runtime/node/timers/internal/set-immediate.mjs
function setImmediateFallbackPromises(value) {
    return new Promise((res) => {
        res(value);
    });
}
function setImmediateFallback(callback, ...args) {
    return new Immediate(callback, args);
}
function clearImmediateFallback(immediate) {
    immediate?.[Symbol.dispose]();
}
var init_set_immediate = __esm({
    "node_modules/unenv/runtime/node/timers/internal/set-immediate.mjs"() {
        init_virtual_unenv_global_polyfill_process();
        init_virtual_unenv_global_polyfill_performance();
        init_virtual_unenv_global_polyfill_console();
        init_virtual_unenv_global_polyfill_set_immediate();
        init_virtual_unenv_global_polyfill_clear_immediate();
        init_immediate();
        __name(setImmediateFallbackPromises, "setImmediateFallbackPromises");
        __name(setImmediateFallback, "setImmediateFallback");
        setImmediateFallback.__promisify__ = setImmediateFallbackPromises;
        __name(clearImmediateFallback, "clearImmediateFallback");
    }
});

// node_modules/unenv/runtime/node/timers/$cloudflare.mjs
var init_cloudflare = __esm({
    "node_modules/unenv/runtime/node/timers/$cloudflare.mjs"() {
        init_virtual_unenv_global_polyfill_process();
        init_virtual_unenv_global_polyfill_performance();
        init_virtual_unenv_global_polyfill_console();
        init_virtual_unenv_global_polyfill_set_immediate();
        init_virtual_unenv_global_polyfill_clear_immediate();
        init_set_immediate();
    }
});

// node_modules/wrangler/_virtual_unenv_global_polyfill-set$immediate.js
var init_virtual_unenv_global_polyfill_set_immediate = __esm({
    "node_modules/wrangler/_virtual_unenv_global_polyfill-set$immediate.js"() {
        init_cloudflare();
        globalThis.setImmediate = setImmediateFallback;
    }
});

// node_modules/unenv/runtime/mock/proxy.mjs
function createMock(name, overrides = {}) {
    fn.prototype.name = name;
    const props = {};
    return new Proxy(fn, {
        get(_target, prop) {
            if (prop === "caller") {
                return null;
            }
            if (prop === "__createMock__") {
                return createMock;
            }
            if (prop === "__unenv__") {
                return true;
            }
            if (prop in overrides) {
                return overrides[prop];
            }
            return props[prop] = props[prop] || createMock(`${name}.${prop.toString()}`);
        },
        apply(_target, _this, _args) {
            return createMock(`${name}()`);
        },
        construct(_target, _args, _newT) {
            return createMock(`[${name}]`);
        },
        // @ts-ignore (ES6-only - removed in ES7)
        // https://github.com/tc39/ecma262/issues/161
        enumerate() {
            return [];
        }
    });
}
var fn, proxy_default;
var init_proxy = __esm({
    "node_modules/unenv/runtime/mock/proxy.mjs"() {
        init_virtual_unenv_global_polyfill_process();
        init_virtual_unenv_global_polyfill_performance();
        init_virtual_unenv_global_polyfill_console();
        init_virtual_unenv_global_polyfill_set_immediate();
        init_virtual_unenv_global_polyfill_clear_immediate();
        fn = /* @__PURE__ */ __name(function() {
        }, "fn");
        __name(createMock, "createMock");
        proxy_default = createMock("mock");
    }
});

// node_modules/unenv/runtime/node/console/index.mjs
import { Writable } from "node:stream";
var _console, _ignoreErrors, _stderr, _stdout, log, info, trace, debug, table, error, warn, createTask, assert, clear, count, countReset, dir, dirxml, group, groupEnd, groupCollapsed, profile, profileEnd, time, timeEnd, timeLog, timeStamp, Console;
var init_console = __esm({
    "node_modules/unenv/runtime/node/console/index.mjs"() {
        init_virtual_unenv_global_polyfill_process();
        init_virtual_unenv_global_polyfill_performance();
        init_virtual_unenv_global_polyfill_console();
        init_virtual_unenv_global_polyfill_set_immediate();
        init_virtual_unenv_global_polyfill_clear_immediate();
        init_proxy();
        init_noop();
        init_utils();
        init_proxy();
        init_noop();
        _console = globalThis.console;
        _ignoreErrors = true;
        _stderr = new Writable();
        _stdout = new Writable();
        log = _console?.log ?? noop_default;
        info = _console?.info ?? log;
        trace = _console?.trace ?? info;
        debug = _console?.debug ?? log;
        table = _console?.table ?? log;
        error = _console?.error ?? log;
        warn = _console?.warn ?? error;
        createTask = _console?.createTask ?? notImplemented("console.createTask");
        assert = notImplemented("console.assert");
        clear = _console?.clear ?? noop_default;
        count = _console?.count ?? noop_default;
        countReset = _console?.countReset ?? noop_default;
        dir = _console?.dir ?? noop_default;
        dirxml = _console?.dirxml ?? noop_default;
        group = _console?.group ?? noop_default;
        groupEnd = _console?.groupEnd ?? noop_default;
        groupCollapsed = _console?.groupCollapsed ?? noop_default;
        profile = _console?.profile ?? noop_default;
        profileEnd = _console?.profileEnd ?? noop_default;
        time = _console?.time ?? noop_default;
        timeEnd = _console?.timeEnd ?? noop_default;
        timeLog = _console?.timeLog ?? noop_default;
        timeStamp = _console?.timeStamp ?? noop_default;
        Console = _console?.Console ?? proxy_default.__createMock__("console.Console");
    }
});

// node_modules/unenv/runtime/node/console/$cloudflare.mjs
var workerdConsole, assert2, clear2, context, count2, countReset2, createTask2, debug2, dir2, dirxml2, error2, group2, groupCollapsed2, groupEnd2, info2, log2, profile2, profileEnd2, table2, time2, timeEnd2, timeLog2, timeStamp2, trace2, warn2, cloudflare_default;
var init_cloudflare2 = __esm({
    "node_modules/unenv/runtime/node/console/$cloudflare.mjs"() {
        init_virtual_unenv_global_polyfill_process();
        init_virtual_unenv_global_polyfill_performance();
        init_virtual_unenv_global_polyfill_console();
        init_virtual_unenv_global_polyfill_set_immediate();
        init_virtual_unenv_global_polyfill_clear_immediate();
        init_console();
        workerdConsole = globalThis["console"];
        ({
            assert: assert2,
            clear: clear2,
            context: (
                // @ts-expect-error undocumented public API
                context
            ),
            count: count2,
            countReset: countReset2,
            createTask: (
                // @ts-expect-error undocumented public API
                createTask2
            ),
            debug: debug2,
            dir: dir2,
            dirxml: dirxml2,
            error: error2,
            group: group2,
            groupCollapsed: groupCollapsed2,
            groupEnd: groupEnd2,
            info: info2,
            log: log2,
            profile: profile2,
            profileEnd: profileEnd2,
            table: table2,
            time: time2,
            timeEnd: timeEnd2,
            timeLog: timeLog2,
            timeStamp: timeStamp2,
            trace: trace2,
            warn: warn2
        } = workerdConsole);
        Object.assign(workerdConsole, {
            Console,
            _ignoreErrors,
            _stderr,
            _stderrErrorHandler: noop_default,
            _stdout,
            _stdoutErrorHandler: noop_default,
            _times: proxy_default
        });
        cloudflare_default = workerdConsole;
    }
});

// node_modules/wrangler/_virtual_unenv_global_polyfill-console.js
var init_virtual_unenv_global_polyfill_console = __esm({
    "node_modules/wrangler/_virtual_unenv_global_polyfill-console.js"() {
        init_cloudflare2();
        globalThis.console = cloudflare_default;
    }
});

// node_modules/unenv/runtime/web/performance/_entry.mjs
var _supportedEntryTypes, _PerformanceEntry, PerformanceEntry, _PerformanceMark, PerformanceMark, _PerformanceMeasure, PerformanceMeasure, _PerformanceResourceTiming, PerformanceResourceTiming;
var init_entry = __esm({
    "node_modules/unenv/runtime/web/performance/_entry.mjs"() {
        init_virtual_unenv_global_polyfill_process();
        init_virtual_unenv_global_polyfill_performance();
        init_virtual_unenv_global_polyfill_console();
        init_virtual_unenv_global_polyfill_set_immediate();
        init_virtual_unenv_global_polyfill_clear_immediate();
        _supportedEntryTypes = [
            "event",
            // PerformanceEntry
            "mark",
            // PerformanceMark
            "measure",
            // PerformanceMeasure
            "resource"
            // PerformanceResourceTiming
        ];
        _PerformanceEntry = class {
            __unenv__ = true;
            detail;
            entryType = "event";
            name;
            startTime;
            constructor(name, options) {
                this.name = name;
                this.startTime = options?.startTime || performance.now();
                this.detail = options?.detail;
            }
            get duration() {
                return performance.now() - this.startTime;
            }
            toJSON() {
                return {
                    name: this.name,
                    entryType: this.entryType,
                    startTime: this.startTime,
                    duration: this.duration,
                    detail: this.detail
                };
            }
        };
        __name(_PerformanceEntry, "_PerformanceEntry");
        PerformanceEntry = globalThis.PerformanceEntry || _PerformanceEntry;
        _PerformanceMark = class extends _PerformanceEntry {
            entryType = "mark";
        };
        __name(_PerformanceMark, "_PerformanceMark");
        PerformanceMark = globalThis.PerformanceMark || _PerformanceMark;
        _PerformanceMeasure = class extends _PerformanceEntry {
            entryType = "measure";
        };
        __name(_PerformanceMeasure, "_PerformanceMeasure");
        PerformanceMeasure = globalThis.PerformanceMeasure || _PerformanceMeasure;
        _PerformanceResourceTiming = class extends _PerformanceEntry {
            entryType = "resource";
            serverTiming = [];
            connectEnd = 0;
            connectStart = 0;
            decodedBodySize = 0;
            domainLookupEnd = 0;
            domainLookupStart = 0;
            encodedBodySize = 0;
            fetchStart = 0;
            initiatorType = "";
            name = "";
            nextHopProtocol = "";
            redirectEnd = 0;
            redirectStart = 0;
            requestStart = 0;
            responseEnd = 0;
            responseStart = 0;
            secureConnectionStart = 0;
            startTime = 0;
            transferSize = 0;
            workerStart = 0;
        };
        __name(_PerformanceResourceTiming, "_PerformanceResourceTiming");
        PerformanceResourceTiming = globalThis.PerformanceResourceTiming || _PerformanceResourceTiming;
    }
});

// node_modules/unenv/runtime/web/performance/_performance.mjs
var _timeOrigin, _Performance, Performance, performance2;
var init_performance = __esm({
    "node_modules/unenv/runtime/web/performance/_performance.mjs"() {
        init_virtual_unenv_global_polyfill_process();
        init_virtual_unenv_global_polyfill_performance();
        init_virtual_unenv_global_polyfill_console();
        init_virtual_unenv_global_polyfill_set_immediate();
        init_virtual_unenv_global_polyfill_clear_immediate();
        init_utils();
        init_proxy();
        init_entry();
        _timeOrigin = Date.now();
        _Performance = class {
            __unenv__ = true;
            timeOrigin = _timeOrigin;
            eventCounts = /* @__PURE__ */ new Map();
            _entries = [];
            _resourceTimingBufferSize = 0;
            navigation = proxy_default.__createMock__("PerformanceNavigation");
            timing = proxy_default.__createMock__("PerformanceTiming");
            onresourcetimingbufferfull = null;
            now() {
                if (globalThis?.performance?.now && this.timeOrigin === _timeOrigin) {
                    return globalThis.performance.now();
                }
                return Date.now() - this.timeOrigin;
            }
            clearMarks(markName) {
                this._entries = markName ? this._entries.filter((e) => e.name !== markName) : this._entries.filter((e) => e.entryType !== "mark");
            }
            clearMeasures(measureName) {
                this._entries = measureName ? this._entries.filter((e) => e.name !== measureName) : this._entries.filter((e) => e.entryType !== "measure");
            }
            clearResourceTimings() {
                this._entries = this._entries.filter(
                    (e) => e.entryType !== "resource" || e.entryType !== "navigation"
                );
            }
            getEntries() {
                return this._entries;
            }
            getEntriesByName(name, type) {
                return this._entries.filter(
                    (e) => e.name === name && (!type || e.entryType === type)
                );
            }
            getEntriesByType(type) {
                return this._entries.filter(
                    (e) => e.entryType === type
                );
            }
            mark(name, options) {
                const entry = new _PerformanceMark(name, options);
                this._entries.push(entry);
                return entry;
            }
            measure(measureName, startOrMeasureOptions, endMark) {
                let start;
                let end;
                if (typeof startOrMeasureOptions === "string") {
                    start = this.getEntriesByName(startOrMeasureOptions, "mark")[0]?.startTime;
                    end = this.getEntriesByName(endMark, "mark")[0]?.startTime;
                } else {
                    start = Number.parseFloat(startOrMeasureOptions?.start) || performance2.now();
                    end = Number.parseFloat(startOrMeasureOptions?.end) || performance2.now();
                }
                const entry = new _PerformanceMeasure(measureName, {
                    startTime: start,
                    detail: { start, end }
                });
                this._entries.push(entry);
                return entry;
            }
            setResourceTimingBufferSize(maxSize) {
                this._resourceTimingBufferSize = maxSize;
            }
            toJSON() {
                return this;
            }
            addEventListener(type, listener, options) {
                throw createNotImplementedError("Performance.addEventListener");
            }
            removeEventListener(type, listener, options) {
                throw createNotImplementedError("Performance.removeEventListener");
            }
            dispatchEvent(event) {
                throw createNotImplementedError("Performance.dispatchEvent");
            }
        };
        __name(_Performance, "_Performance");
        Performance = globalThis.Performance || _Performance;
        performance2 = globalThis.performance || new Performance();
    }
});

// node_modules/unenv/runtime/web/performance/_observer.mjs
var _PerformanceObserver, PerformanceObserver, _PerformanceObserverEntryList, PerformanceObserverEntryList;
var init_observer = __esm({
    "node_modules/unenv/runtime/web/performance/_observer.mjs"() {
        init_virtual_unenv_global_polyfill_process();
        init_virtual_unenv_global_polyfill_performance();
        init_virtual_unenv_global_polyfill_console();
        init_virtual_unenv_global_polyfill_set_immediate();
        init_virtual_unenv_global_polyfill_clear_immediate();
        init_utils();
        init_entry();
        _PerformanceObserver = class {
            __unenv__ = true;
            _callback = null;
            constructor(callback) {
                this._callback = callback;
            }
            takeRecords() {
                return [];
            }
            disconnect() {
                throw createNotImplementedError("PerformanceObserver.disconnect");
            }
            observe(options) {
                throw createNotImplementedError("PerformanceObserver.observe");
            }
        };
        __name(_PerformanceObserver, "_PerformanceObserver");
        __publicField(_PerformanceObserver, "supportedEntryTypes", _supportedEntryTypes);
        PerformanceObserver = globalThis.PerformanceObserver || _PerformanceObserver;
        _PerformanceObserverEntryList = class {
            __unenv__ = true;
            getEntries() {
                return [];
            }
            getEntriesByName(_name, _type) {
                return [];
            }
            getEntriesByType(type) {
                return [];
            }
        };
        __name(_PerformanceObserverEntryList, "_PerformanceObserverEntryList");
        PerformanceObserverEntryList = globalThis.PerformanceObserverEntryList || _PerformanceObserverEntryList;
    }
});

// node_modules/unenv/runtime/web/performance/index.mjs
var init_performance2 = __esm({
    "node_modules/unenv/runtime/web/performance/index.mjs"() {
        init_virtual_unenv_global_polyfill_process();
        init_virtual_unenv_global_polyfill_performance();
        init_virtual_unenv_global_polyfill_console();
        init_virtual_unenv_global_polyfill_set_immediate();
        init_virtual_unenv_global_polyfill_clear_immediate();
        init_performance();
        init_observer();
        init_entry();
    }
});

// node_modules/unenv/runtime/polyfill/global-this.mjs
function getGlobal() {
    if (typeof globalThis !== "undefined") {
        return globalThis;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    return {};
}
var global_this_default;
var init_global_this = __esm({
    "node_modules/unenv/runtime/polyfill/global-this.mjs"() {
        init_virtual_unenv_global_polyfill_process();
        init_virtual_unenv_global_polyfill_performance();
        init_virtual_unenv_global_polyfill_console();
        init_virtual_unenv_global_polyfill_set_immediate();
        init_virtual_unenv_global_polyfill_clear_immediate();
        __name(getGlobal, "getGlobal");
        global_this_default = getGlobal();
    }
});

// node_modules/unenv/runtime/polyfill/performance.mjs
var performance_default;
var init_performance3 = __esm({
    "node_modules/unenv/runtime/polyfill/performance.mjs"() {
        init_virtual_unenv_global_polyfill_process();
        init_virtual_unenv_global_polyfill_performance();
        init_virtual_unenv_global_polyfill_console();
        init_virtual_unenv_global_polyfill_set_immediate();
        init_virtual_unenv_global_polyfill_clear_immediate();
        init_performance2();
        init_global_this();
        global_this_default.performance = global_this_default.performance || performance2;
        global_this_default.Performance = global_this_default.Performance || Performance;
        global_this_default.PerformanceEntry = global_this_default.PerformanceEntry || PerformanceEntry;
        global_this_default.PerformanceMark = global_this_default.PerformanceMark || PerformanceMark;
        global_this_default.PerformanceMeasure = global_this_default.PerformanceMeasure || PerformanceMeasure;
        global_this_default.PerformanceObserver = global_this_default.PerformanceObserver || PerformanceObserver;
        global_this_default.PerformanceObserverEntryList = global_this_default.PerformanceObserverEntryList || PerformanceObserverEntryList;
        global_this_default.PerformanceResourceTiming = global_this_default.PerformanceResourceTiming || PerformanceResourceTiming;
        performance_default = global_this_default.performance;
    }
});

// node_modules/wrangler/_virtual_unenv_global_polyfill-performance.js
var init_virtual_unenv_global_polyfill_performance = __esm({
    "node_modules/wrangler/_virtual_unenv_global_polyfill-performance.js"() {
        init_performance3();
        globalThis.performance = performance_default;
    }
});

// node_modules/unenv/runtime/mock/empty.mjs
var empty_default;
var init_empty = __esm({
    "node_modules/unenv/runtime/mock/empty.mjs"() {
        init_virtual_unenv_global_polyfill_process();
        init_virtual_unenv_global_polyfill_performance();
        init_virtual_unenv_global_polyfill_console();
        init_virtual_unenv_global_polyfill_set_immediate();
        init_virtual_unenv_global_polyfill_clear_immediate();
        empty_default = Object.freeze(
            Object.create(null, {
                __unenv__: { get: () => true }
            })
        );
    }
});

// node_modules/unenv/runtime/node/process/internal/env.mjs
var _envShim, _processEnv, _getEnv, env;
var init_env = __esm({
    "node_modules/unenv/runtime/node/process/internal/env.mjs"() {
        init_virtual_unenv_global_polyfill_process();
        init_virtual_unenv_global_polyfill_performance();
        init_virtual_unenv_global_polyfill_console();
        init_virtual_unenv_global_polyfill_set_immediate();
        init_virtual_unenv_global_polyfill_clear_immediate();
        _envShim = /* @__PURE__ */ Object.create(null);
        _processEnv = globalThis.process?.env;
        _getEnv = /* @__PURE__ */ __name((useShim) => _processEnv || globalThis.__env__ || (useShim ? _envShim : globalThis), "_getEnv");
        env = new Proxy(_envShim, {
            get(_, prop) {
                const env22 = _getEnv();
                return env22[prop] ?? _envShim[prop];
            },
            has(_, prop) {
                const env22 = _getEnv();
                return prop in env22 || prop in _envShim;
            },
            set(_, prop, value) {
                const env22 = _getEnv(true);
                env22[prop] = value;
                return true;
            },
            deleteProperty(_, prop) {
                const env22 = _getEnv(true);
                delete env22[prop];
                return true;
            },
            ownKeys() {
                const env22 = _getEnv();
                return Object.keys(env22);
            }
        });
    }
});

// node_modules/unenv/runtime/node/process/internal/time.mjs
function _createNextTickWithTimeout() {
    let queue = [];
    let draining = false;
    let currentQueue;
    let queueIndex = -1;
    function cleanUpNextTick() {
        if (!draining || !currentQueue) {
            return;
        }
        draining = false;
        if (currentQueue.length > 0) {
            queue = [...currentQueue, ...queue];
        } else {
            queueIndex = -1;
        }
        if (queue.length > 0) {
            drainQueue();
        }
    }
    __name(cleanUpNextTick, "cleanUpNextTick");
    function drainQueue() {
        if (draining) {
            return;
        }
        const timeout = setTimeout(cleanUpNextTick);
        draining = true;
        let len = queue.length;
        while (len) {
            currentQueue = queue;
            queue = [];
            while (++queueIndex < len) {
                if (currentQueue) {
                    currentQueue[queueIndex]();
                }
            }
            queueIndex = -1;
            len = queue.length;
        }
        currentQueue = void 0;
        draining = false;
        clearTimeout(timeout);
    }
    __name(drainQueue, "drainQueue");
    const nextTick22 = /* @__PURE__ */ __name((cb, ...args) => {
        queue.push(cb.bind(void 0, ...args));
        if (queue.length === 1 && !draining) {
            setTimeout(drainQueue);
        }
    }, "nextTick2");
    return nextTick22;
}
var hrtime, nextTick;
var init_time = __esm({
    "node_modules/unenv/runtime/node/process/internal/time.mjs"() {
        init_virtual_unenv_global_polyfill_process();
        init_virtual_unenv_global_polyfill_performance();
        init_virtual_unenv_global_polyfill_console();
        init_virtual_unenv_global_polyfill_set_immediate();
        init_virtual_unenv_global_polyfill_clear_immediate();
        hrtime = Object.assign(
            /* @__PURE__ */ __name(function hrtime2(startTime) {
                const now = Date.now();
                const seconds = Math.trunc(now / 1e3);
                const nanos = now % 1e3 * 1e6;
                if (startTime) {
                    let diffSeconds = seconds - startTime[0];
                    let diffNanos = nanos - startTime[0];
                    if (diffNanos < 0) {
                        diffSeconds = diffSeconds - 1;
                        diffNanos = 1e9 + diffNanos;
                    }
                    return [diffSeconds, diffNanos];
                }
                return [seconds, nanos];
            }, "hrtime2"),
            {
                bigint: /* @__PURE__ */ __name(function bigint() {
                    return BigInt(Date.now() * 1e6);
                }, "bigint")
            }
        );
        nextTick = globalThis.queueMicrotask ? (cb, ...args) => {
            globalThis.queueMicrotask(cb.bind(void 0, ...args));
        } : _createNextTickWithTimeout();
        __name(_createNextTickWithTimeout, "_createNextTickWithTimeout");
    }
});

// node_modules/unenv/runtime/node/process/internal/process.mjs
function noop() {
    return process2;
}
var title, argv, version, versions, on, addListener, once, off, removeListener, removeAllListeners, emit, prependListener, prependOnceListener, listeners, listenerCount, binding, _cwd, cwd, chdir, umask, getegid, geteuid, getgid, getuid, getgroups, getBuiltinModule, abort, allowedNodeEnvironmentFlags, arch, argv0, config, connected, constrainedMemory, availableMemory, cpuUsage, debugPort, dlopen, disconnect, emitWarning, eventNames, execArgv, execPath, exit, features, getActiveResourcesInfo, getMaxListeners, kill, memoryUsage, pid, platform, ppid, rawListeners, release, report, resourceUsage, setegid, seteuid, setgid, setgroups, setuid, setMaxListeners, setSourceMapsEnabled, stdout, stderr, stdin, traceDeprecation, uptime, exitCode, setUncaughtExceptionCaptureCallback, hasUncaughtExceptionCaptureCallback, sourceMapsEnabled, loadEnvFile, mainModule, permission, channel, throwDeprecation, assert3, openStdin, _debugEnd, _debugProcess, _fatalException, _getActiveHandles, _getActiveRequests, _kill, _preload_modules, _rawDebug, _startProfilerIdleNotifier, _stopProfilerIdleNotifier, _tickCallback, _linkedBinding, domain, initgroups, moduleLoadList, reallyExit, _exiting, _events, _eventsCount, _maxListeners, process2;
var init_process = __esm({
    "node_modules/unenv/runtime/node/process/internal/process.mjs"() {
        init_virtual_unenv_global_polyfill_process();
        init_virtual_unenv_global_polyfill_performance();
        init_virtual_unenv_global_polyfill_console();
        init_virtual_unenv_global_polyfill_set_immediate();
        init_virtual_unenv_global_polyfill_clear_immediate();
        init_proxy();
        init_empty();
        init_utils();
        init_env();
        init_time();
        init_time();
        title = "unenv";
        argv = [];
        version = "";
        versions = {
            ares: "",
            http_parser: "",
            icu: "",
            modules: "",
            node: "",
            openssl: "",
            uv: "",
            v8: "",
            zlib: ""
        };
        __name(noop, "noop");
        on = noop;
        addListener = noop;
        once = noop;
        off = noop;
        removeListener = noop;
        removeAllListeners = noop;
        emit = /* @__PURE__ */ __name(function emit2(event) {
            if (event === "message" || event === "multipleResolves") {
                return process2;
            }
            return false;
        }, "emit2");
        prependListener = noop;
        prependOnceListener = noop;
        listeners = /* @__PURE__ */ __name(function(name) {
            return [];
        }, "listeners");
        listenerCount = /* @__PURE__ */ __name(() => 0, "listenerCount");
        binding = /* @__PURE__ */ __name(function(name) {
            throw new Error("[unenv] process.binding is not supported");
        }, "binding");
        _cwd = "/";
        cwd = /* @__PURE__ */ __name(function cwd2() {
            return _cwd;
        }, "cwd2");
        chdir = /* @__PURE__ */ __name(function chdir2(dir3) {
            _cwd = dir3;
        }, "chdir2");
        umask = /* @__PURE__ */ __name(function umask2() {
            return 0;
        }, "umask2");
        getegid = /* @__PURE__ */ __name(function getegid2() {
            return 1e3;
        }, "getegid2");
        geteuid = /* @__PURE__ */ __name(function geteuid2() {
            return 1e3;
        }, "geteuid2");
        getgid = /* @__PURE__ */ __name(function getgid2() {
            return 1e3;
        }, "getgid2");
        getuid = /* @__PURE__ */ __name(function getuid2() {
            return 1e3;
        }, "getuid2");
        getgroups = /* @__PURE__ */ __name(function getgroups2() {
            return [];
        }, "getgroups2");
        getBuiltinModule = /* @__PURE__ */ __name((_name) => void 0, "getBuiltinModule");
        abort = notImplemented("process.abort");
        allowedNodeEnvironmentFlags = /* @__PURE__ */ new Set();
        arch = "";
        argv0 = "";
        config = empty_default;
        connected = false;
        constrainedMemory = /* @__PURE__ */ __name(() => 0, "constrainedMemory");
        availableMemory = /* @__PURE__ */ __name(() => 0, "availableMemory");
        cpuUsage = notImplemented("process.cpuUsage");
        debugPort = 0;
        dlopen = notImplemented("process.dlopen");
        disconnect = noop;
        emitWarning = noop;
        eventNames = notImplemented("process.eventNames");
        execArgv = [];
        execPath = "";
        exit = notImplemented("process.exit");
        features = /* @__PURE__ */ Object.create({
            inspector: void 0,
            debug: void 0,
            uv: void 0,
            ipv6: void 0,
            tls_alpn: void 0,
            tls_sni: void 0,
            tls_ocsp: void 0,
            tls: void 0,
            cached_builtins: void 0
        });
        getActiveResourcesInfo = /* @__PURE__ */ __name(() => [], "getActiveResourcesInfo");
        getMaxListeners = notImplemented(
            "process.getMaxListeners"
        );
        kill = notImplemented("process.kill");
        memoryUsage = Object.assign(
            () => ({
                arrayBuffers: 0,
                rss: 0,
                external: 0,
                heapTotal: 0,
                heapUsed: 0
            }),
            { rss: () => 0 }
        );
        pid = 1e3;
        platform = "";
        ppid = 1e3;
        rawListeners = notImplemented(
            "process.rawListeners"
        );
        release = /* @__PURE__ */ Object.create({
            name: "",
            lts: "",
            sourceUrl: void 0,
            headersUrl: void 0
        });
        report = /* @__PURE__ */ Object.create({
            compact: void 0,
            directory: void 0,
            filename: void 0,
            getReport: notImplemented("process.report.getReport"),
            reportOnFatalError: void 0,
            reportOnSignal: void 0,
            reportOnUncaughtException: void 0,
            signal: void 0,
            writeReport: notImplemented("process.report.writeReport")
        });
        resourceUsage = notImplemented(
            "process.resourceUsage"
        );
        setegid = notImplemented("process.setegid");
        seteuid = notImplemented("process.seteuid");
        setgid = notImplemented("process.setgid");
        setgroups = notImplemented("process.setgroups");
        setuid = notImplemented("process.setuid");
        setMaxListeners = notImplemented(
            "process.setMaxListeners"
        );
        setSourceMapsEnabled = notImplemented("process.setSourceMapsEnabled");
        stdout = proxy_default.__createMock__("process.stdout");
        stderr = proxy_default.__createMock__("process.stderr");
        stdin = proxy_default.__createMock__("process.stdin");
        traceDeprecation = false;
        uptime = /* @__PURE__ */ __name(() => 0, "uptime");
        exitCode = 0;
        setUncaughtExceptionCaptureCallback = notImplemented("process.setUncaughtExceptionCaptureCallback");
        hasUncaughtExceptionCaptureCallback = /* @__PURE__ */ __name(() => false, "hasUncaughtExceptionCaptureCallback");
        sourceMapsEnabled = false;
        loadEnvFile = notImplemented(
            "process.loadEnvFile"
        );
        mainModule = void 0;
        permission = {
            has: () => false
        };
        channel = {
            ref() {
            },
            unref() {
            }
        };
        throwDeprecation = false;
        assert3 = notImplemented("process.assert");
        openStdin = notImplemented("process.openStdin");
        _debugEnd = notImplemented("process._debugEnd");
        _debugProcess = notImplemented("process._debugProcess");
        _fatalException = notImplemented("process._fatalException");
        _getActiveHandles = notImplemented("process._getActiveHandles");
        _getActiveRequests = notImplemented("process._getActiveRequests");
        _kill = notImplemented("process._kill");
        _preload_modules = [];
        _rawDebug = notImplemented("process._rawDebug");
        _startProfilerIdleNotifier = notImplemented(
            "process._startProfilerIdleNotifier"
        );
        _stopProfilerIdleNotifier = notImplemented(
            "process.__stopProfilerIdleNotifier"
        );
        _tickCallback = notImplemented("process._tickCallback");
        _linkedBinding = notImplemented("process._linkedBinding");
        domain = proxy_default.__createMock__("process.domain");
        initgroups = notImplemented("process.initgroups");
        moduleLoadList = [];
        reallyExit = noop;
        _exiting = false;
        _events = [];
        _eventsCount = 0;
        _maxListeners = 0;
        process2 = {
            // @ts-expect-error
            _events,
            _eventsCount,
            _exiting,
            _maxListeners,
            _debugEnd,
            _debugProcess,
            _fatalException,
            _getActiveHandles,
            _getActiveRequests,
            _kill,
            _preload_modules,
            _rawDebug,
            _startProfilerIdleNotifier,
            _stopProfilerIdleNotifier,
            _tickCallback,
            domain,
            initgroups,
            moduleLoadList,
            reallyExit,
            exitCode,
            abort,
            addListener,
            allowedNodeEnvironmentFlags,
            hasUncaughtExceptionCaptureCallback,
            setUncaughtExceptionCaptureCallback,
            loadEnvFile,
            sourceMapsEnabled,
            throwDeprecation,
            mainModule,
            permission,
            channel,
            arch,
            argv,
            argv0,
            assert: assert3,
            binding,
            chdir,
            config,
            connected,
            constrainedMemory,
            availableMemory,
            cpuUsage,
            cwd,
            debugPort,
            dlopen,
            disconnect,
            emit,
            emitWarning,
            env,
            eventNames,
            execArgv,
            execPath,
            exit,
            features,
            getBuiltinModule,
            getegid,
            geteuid,
            getgid,
            getgroups,
            getuid,
            getActiveResourcesInfo,
            getMaxListeners,
            hrtime,
            kill,
            listeners,
            listenerCount,
            memoryUsage,
            nextTick,
            on,
            off,
            once,
            openStdin,
            pid,
            platform,
            ppid,
            prependListener,
            prependOnceListener,
            rawListeners,
            release,
            removeAllListeners,
            removeListener,
            report,
            resourceUsage,
            setegid,
            seteuid,
            setgid,
            setgroups,
            setuid,
            setMaxListeners,
            setSourceMapsEnabled,
            stderr,
            stdin,
            stdout,
            title,
            traceDeprecation,
            umask,
            uptime,
            version,
            versions
        };
    }
});

// node_modules/unenv/runtime/node/process/$cloudflare.mjs
var unpatchedGlobalThisProcess, getBuiltinModule2, workerdProcess, env2, nextTick2, _process, cloudflare_default2;
var init_cloudflare3 = __esm({
    "node_modules/unenv/runtime/node/process/$cloudflare.mjs"() {
        init_virtual_unenv_global_polyfill_process();
        init_virtual_unenv_global_polyfill_performance();
        init_virtual_unenv_global_polyfill_console();
        init_virtual_unenv_global_polyfill_set_immediate();
        init_virtual_unenv_global_polyfill_clear_immediate();
        init_process();
        unpatchedGlobalThisProcess = globalThis["process"];
        getBuiltinModule2 = unpatchedGlobalThisProcess.getBuiltinModule;
        workerdProcess = getBuiltinModule2("node:process");
        ({ env: env2, nextTick: nextTick2 } = workerdProcess);
        _process = {
            /**
             * manually unroll unenv-polyfilled-symbols to make it tree-shakeable
             */
            // @ts-expect-error (not typed)
            _debugEnd,
            _debugProcess,
            // TODO: implemented yet in unenv
            //_events,
            _eventsCount,
            // TODO: implemented yet in unenv
            //_exiting,
            _fatalException,
            _getActiveHandles,
            _getActiveRequests,
            _kill,
            // TODO: implemented yet in unenv
            //_linkedBinding,
            // TODO: implemented yet in unenv
            //_maxListeners,
            _preload_modules,
            _rawDebug,
            _startProfilerIdleNotifier,
            _stopProfilerIdleNotifier,
            _tickCallback,
            abort,
            addListener,
            allowedNodeEnvironmentFlags,
            arch,
            argv,
            argv0,
            assert: assert3,
            availableMemory,
            binding,
            chdir,
            config,
            constrainedMemory,
            cpuUsage,
            cwd,
            debugPort,
            dlopen,
            // TODO: implemented yet in unenv
            //domain,
            emit,
            emitWarning,
            eventNames,
            execArgv,
            execPath,
            exit,
            exitCode,
            features,
            getActiveResourcesInfo,
            getMaxListeners,
            getegid,
            geteuid,
            getgid,
            getgroups,
            getuid,
            hasUncaughtExceptionCaptureCallback,
            hrtime,
            // TODO: implemented yet in unenv
            //initgroups,
            kill,
            listenerCount,
            listeners,
            loadEnvFile,
            memoryUsage,
            // TODO: implemented yet in unenv
            //moduleLoadList,
            off,
            on,
            once,
            // TODO: implemented yet in unenv
            //openStdin,
            pid,
            platform,
            ppid,
            prependListener,
            prependOnceListener,
            rawListeners,
            // TODO: implemented yet in unenv
            //reallyExit,
            release,
            removeAllListeners,
            removeListener,
            report,
            resourceUsage,
            setMaxListeners,
            setSourceMapsEnabled,
            setUncaughtExceptionCaptureCallback,
            setegid,
            seteuid,
            setgid,
            setgroups,
            setuid,
            sourceMapsEnabled,
            stderr,
            stdin,
            stdout,
            title,
            umask,
            uptime,
            version,
            versions,
            /**
             * manually unroll workerd-polyfilled-symbols to make it tree-shakeable
             */
            env: env2,
            getBuiltinModule: getBuiltinModule2,
            nextTick: nextTick2
        };
        cloudflare_default2 = _process;
    }
});

// node_modules/wrangler/_virtual_unenv_global_polyfill-process.js
var init_virtual_unenv_global_polyfill_process = __esm({
    "node_modules/wrangler/_virtual_unenv_global_polyfill-process.js"() {
        init_cloudflare3();
        globalThis.process = cloudflare_default2;
    }
});

// node_modules/unenv/runtime/node/crypto/internal/web.mjs
var web_exports = {};
__export(web_exports, {
    getRandomValues: () => getRandomValues,
    randomUUID: () => randomUUID,
    subtle: () => subtle
});
var subtle, randomUUID, getRandomValues;
var init_web = __esm({
    "node_modules/unenv/runtime/node/crypto/internal/web.mjs"() {
        init_virtual_unenv_global_polyfill_process();
        init_virtual_unenv_global_polyfill_performance();
        init_virtual_unenv_global_polyfill_console();
        init_virtual_unenv_global_polyfill_set_immediate();
        init_virtual_unenv_global_polyfill_clear_immediate();
        subtle = globalThis.crypto?.subtle;
        randomUUID = /* @__PURE__ */ __name(() => {
            return globalThis.crypto?.randomUUID();
        }, "randomUUID");
        getRandomValues = /* @__PURE__ */ __name((array) => {
            return globalThis.crypto?.getRandomValues(array);
        }, "getRandomValues");
    }
});

// node_modules/unenv/runtime/node/crypto/internal/node.mjs
var node_exports = {};
__export(node_exports, {
    Certificate: () => Certificate,
    Cipher: () => Cipher,
    Cipheriv: () => Cipheriv,
    Decipher: () => Decipher,
    Decipheriv: () => Decipheriv,
    DiffieHellman: () => DiffieHellman,
    DiffieHellmanGroup: () => DiffieHellmanGroup,
    ECDH: () => ECDH,
    Hash: () => Hash,
    Hmac: () => Hmac,
    KeyObject: () => KeyObject,
    Sign: () => Sign,
    Verify: () => Verify,
    X509Certificate: () => X509Certificate,
    checkPrime: () => checkPrime,
    checkPrimeSync: () => checkPrimeSync,
    constants: () => constants,
    createCipher: () => createCipher,
    createCipheriv: () => createCipheriv,
    createDecipher: () => createDecipher,
    createDecipheriv: () => createDecipheriv,
    createDiffieHellman: () => createDiffieHellman,
    createDiffieHellmanGroup: () => createDiffieHellmanGroup,
    createECDH: () => createECDH,
    createHash: () => createHash,
    createHmac: () => createHmac,
    createPrivateKey: () => createPrivateKey,
    createPublicKey: () => createPublicKey,
    createSecretKey: () => createSecretKey,
    createSign: () => createSign,
    createVerify: () => createVerify,
    diffieHellman: () => diffieHellman,
    fips: () => fips,
    generateKey: () => generateKey,
    generateKeyPair: () => generateKeyPair,
    generateKeyPairSync: () => generateKeyPairSync,
    generateKeySync: () => generateKeySync,
    generatePrime: () => generatePrime,
    generatePrimeSync: () => generatePrimeSync,
    getCipherInfo: () => getCipherInfo,
    getCiphers: () => getCiphers,
    getCurves: () => getCurves,
    getDiffieHellman: () => getDiffieHellman,
    getFips: () => getFips,
    getHashes: () => getHashes,
    hash: () => hash,
    hkdf: () => hkdf,
    hkdfSync: () => hkdfSync,
    pbkdf2: () => pbkdf2,
    pbkdf2Sync: () => pbkdf2Sync,
    privateDecrypt: () => privateDecrypt,
    privateEncrypt: () => privateEncrypt,
    pseudoRandomBytes: () => pseudoRandomBytes,
    publicDecrypt: () => publicDecrypt,
    publicEncrypt: () => publicEncrypt,
    randomBytes: () => randomBytes,
    randomFill: () => randomFill,
    randomFillSync: () => randomFillSync,
    randomInt: () => randomInt,
    scrypt: () => scrypt,
    scryptSync: () => scryptSync,
    secureHeapUsed: () => secureHeapUsed,
    setEngine: () => setEngine,
    setFips: () => setFips,
    sign: () => sign,
    timingSafeEqual: () => timingSafeEqual,
    verify: () => verify,
    webcrypto: () => webcrypto
});
var MAX_RANDOM_VALUE_BYTES, webcrypto, randomBytes, fips, constants, checkPrime, checkPrimeSync, createCipher, createDecipher, pseudoRandomBytes, createCipheriv, createDecipheriv, createDiffieHellman, createDiffieHellmanGroup, createECDH, createHash, createHmac, createPrivateKey, createPublicKey, createSecretKey, createSign, createVerify, diffieHellman, generatePrime, generatePrimeSync, getCiphers, getCipherInfo, getCurves, getDiffieHellman, getHashes, hkdf, hkdfSync, pbkdf2, pbkdf2Sync, generateKeyPair, generateKeyPairSync, generateKey, generateKeySync, privateDecrypt, privateEncrypt, publicDecrypt, publicEncrypt, randomFill, randomFillSync, randomInt, scrypt, scryptSync, sign, setEngine, timingSafeEqual, getFips, setFips, verify, secureHeapUsed, hash, Certificate, Cipher, Cipheriv, Decipher, Decipheriv, DiffieHellman, DiffieHellmanGroup, ECDH, Hash, Hmac, KeyObject, Sign, Verify, X509Certificate;
var init_node = __esm({
    "node_modules/unenv/runtime/node/crypto/internal/node.mjs"() {
        init_virtual_unenv_global_polyfill_process();
        init_virtual_unenv_global_polyfill_performance();
        init_virtual_unenv_global_polyfill_console();
        init_virtual_unenv_global_polyfill_set_immediate();
        init_virtual_unenv_global_polyfill_clear_immediate();
        init_utils();
        init_web();
        MAX_RANDOM_VALUE_BYTES = 65536;
        webcrypto = new Proxy(
            globalThis.crypto,
            {
                get(_, key) {
                    if (key === "CryptoKey") {
                        return globalThis.CryptoKey;
                    }
                    if (typeof globalThis.crypto[key] === "function") {
                        return globalThis.crypto[key].bind(globalThis.crypto);
                    }
                    return globalThis.crypto[key];
                }
            }
        );
        randomBytes = /* @__PURE__ */ __name((size, cb) => {
            const bytes = Buffer.alloc(size, 0, void 0);
            for (let generated = 0; generated < size; generated += MAX_RANDOM_VALUE_BYTES) {
                getRandomValues(
                    Uint8Array.prototype.slice.call(
                        bytes,
                        generated,
                        generated + MAX_RANDOM_VALUE_BYTES
                    )
                );
            }
            if (typeof cb === "function") {
                cb(null, bytes);
                return void 0;
            }
            return bytes;
        }, "randomBytes");
        fips = false;
        constants = {};
        checkPrime = notImplemented("crypto.checkPrime");
        checkPrimeSync = notImplemented(
            "crypto.checkPrimeSync"
        );
        createCipher = notImplemented("crypto.createCipher");
        createDecipher = notImplemented("crypto.createDecipher");
        pseudoRandomBytes = notImplemented("crypto.pseudoRandomBytes");
        createCipheriv = notImplemented(
            "crypto.createCipheriv"
        );
        createDecipheriv = notImplemented("crypto.createDecipheriv");
        createDiffieHellman = notImplemented("crypto.createDiffieHellman");
        createDiffieHellmanGroup = notImplemented("crypto.createDiffieHellmanGroup");
        createECDH = notImplemented("crypto.createECDH");
        createHash = notImplemented("crypto.createHash");
        createHmac = notImplemented("crypto.createHmac");
        createPrivateKey = notImplemented("crypto.createPrivateKey");
        createPublicKey = notImplemented("crypto.createPublicKey");
        createSecretKey = notImplemented("crypto.createSecretKey");
        createSign = notImplemented("crypto.createSign");
        createVerify = notImplemented(
            "crypto.createVerify"
        );
        diffieHellman = notImplemented(
            "crypto.diffieHellman"
        );
        generatePrime = notImplemented(
            "crypto.generatePrime"
        );
        generatePrimeSync = notImplemented("crypto.generatePrimeSync");
        getCiphers = notImplemented("crypto.getCiphers");
        getCipherInfo = notImplemented(
            "crypto.getCipherInfo"
        );
        getCurves = notImplemented("crypto.getCurves");
        getDiffieHellman = notImplemented("crypto.getDiffieHellman");
        getHashes = notImplemented("crypto.getHashes");
        hkdf = notImplemented("crypto.hkdf");
        hkdfSync = notImplemented("crypto.hkdfSync");
        pbkdf2 = notImplemented("crypto.pbkdf2");
        pbkdf2Sync = notImplemented("crypto.pbkdf2Sync");
        generateKeyPair = notImplemented("crypto.generateKeyPair");
        generateKeyPairSync = notImplemented("crypto.generateKeyPairSync");
        generateKey = notImplemented("crypto.generateKey");
        generateKeySync = notImplemented("crypto.generateKeySync");
        privateDecrypt = notImplemented(
            "crypto.privateDecrypt"
        );
        privateEncrypt = notImplemented(
            "crypto.privateEncrypt"
        );
        publicDecrypt = notImplemented(
            "crypto.publicDecrypt"
        );
        publicEncrypt = notImplemented(
            "crypto.publicEncrypt"
        );
        randomFill = notImplemented("crypto.randomFill");
        randomFillSync = notImplemented(
            "crypto.randomFillSync"
        );
        randomInt = notImplemented("crypto.randomInt");
        scrypt = notImplemented("crypto.scrypt");
        scryptSync = notImplemented("crypto.scryptSync");
        sign = notImplemented("crypto.sign");
        setEngine = notImplemented("crypto.setEngine");
        timingSafeEqual = notImplemented("crypto.timingSafeEqual");
        getFips = notImplemented("crypto.getFips");
        setFips = notImplemented("crypto.setFips");
        verify = notImplemented("crypto.verify");
        secureHeapUsed = notImplemented(
            "crypto.secureHeapUsed"
        );
        hash = notImplemented("crypto.hash");
        Certificate = notImplementedClass(
            "crypto.Certificate"
        );
        Cipher = notImplementedClass(
            "crypto.Cipher"
        );
        Cipheriv = notImplementedClass(
            "crypto.Cipheriv"
            // @ts-expect-error not typed yet
        );
        Decipher = notImplementedClass(
            "crypto.Decipher"
        );
        Decipheriv = notImplementedClass(
            "crypto.Decipheriv"
            // @ts-expect-error not typed yet
        );
        DiffieHellman = notImplementedClass(
            "crypto.DiffieHellman"
        );
        DiffieHellmanGroup = notImplementedClass(
            "crypto.DiffieHellmanGroup"
        );
        ECDH = notImplementedClass(
            "crypto.ECDH"
        );
        Hash = notImplementedClass(
            "crypto.Hash"
        );
        Hmac = notImplementedClass(
            "crypto.Hmac"
        );
        KeyObject = notImplementedClass(
            "crypto.KeyObject"
        );
        Sign = notImplementedClass(
            "crypto.Sign"
        );
        Verify = notImplementedClass(
            "crypto.Verify"
        );
        X509Certificate = notImplementedClass(
            "crypto.X509Certificate"
        );
    }
});

// node_modules/unenv/runtime/node/crypto/internal/constants.mjs
var constants2, constants_default;
var init_constants = __esm({
    "node_modules/unenv/runtime/node/crypto/internal/constants.mjs"() {
        init_virtual_unenv_global_polyfill_process();
        init_virtual_unenv_global_polyfill_performance();
        init_virtual_unenv_global_polyfill_console();
        init_virtual_unenv_global_polyfill_set_immediate();
        init_virtual_unenv_global_polyfill_clear_immediate();
        constants2 = {
            ALPN_ENABLED: 1,
            // Node.js v18 only
            DH_CHECK_P_NOT_PRIME: 1,
            DH_CHECK_P_NOT_SAFE_PRIME: 2,
            DH_NOT_SUITABLE_GENERATOR: 8,
            DH_UNABLE_TO_CHECK_GENERATOR: 4,
            ENGINE_METHOD_ALL: 65535,
            ENGINE_METHOD_CIPHERS: 64,
            ENGINE_METHOD_DH: 4,
            ENGINE_METHOD_DIGESTS: 128,
            ENGINE_METHOD_DSA: 2,
            ENGINE_METHOD_EC: 2048,
            ENGINE_METHOD_NONE: 0,
            ENGINE_METHOD_PKEY_ASN1_METHS: 1024,
            ENGINE_METHOD_PKEY_METHS: 512,
            ENGINE_METHOD_RAND: 8,
            ENGINE_METHOD_RSA: 1,
            OPENSSL_VERSION_NUMBER: 0,
            // explicitly set to 0 to avoid version misdetection
            POINT_CONVERSION_COMPRESSED: 2,
            POINT_CONVERSION_HYBRID: 6,
            POINT_CONVERSION_UNCOMPRESSED: 4,
            RSA_NO_PADDING: 3,
            RSA_PKCS1_OAEP_PADDING: 4,
            RSA_PKCS1_PADDING: 1,
            RSA_PKCS1_PSS_PADDING: 6,
            RSA_PSS_SALTLEN_AUTO: -2,
            RSA_PSS_SALTLEN_DIGEST: -1,
            RSA_PSS_SALTLEN_MAX_SIGN: -2,
            RSA_X931_PADDING: 5,
            SSL_OP_ALL: 2147485776,
            SSL_OP_ALLOW_NO_DHE_KEX: 1024,
            SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION: 262144,
            SSL_OP_CIPHER_SERVER_PREFERENCE: 4194304,
            SSL_OP_CISCO_ANYCONNECT: 32768,
            SSL_OP_COOKIE_EXCHANGE: 8192,
            SSL_OP_CRYPTOPRO_TLSEXT_BUG: 2147483648,
            SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS: 2048,
            SSL_OP_EPHEMERAL_RSA: 0,
            // Node.js v18 only
            SSL_OP_LEGACY_SERVER_CONNECT: 4,
            SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER: 0,
            // Node.js v18 only
            SSL_OP_MICROSOFT_SESS_ID_BUG: 0,
            // Node.js v18 only
            SSL_OP_MSIE_SSLV2_RSA_PADDING: 0,
            // Node.js v18 only
            SSL_OP_NETSCAPE_CA_DN_BUG: 0,
            // Node.js v18 only
            SSL_OP_NETSCAPE_CHALLENGE_BUG: 0,
            // Node.js v18 only
            SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG: 0,
            // Node.js v18 only
            SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG: 0,
            // Node.js v18 only
            SSL_OP_NO_COMPRESSION: 131072,
            SSL_OP_NO_ENCRYPT_THEN_MAC: 524288,
            SSL_OP_NO_QUERY_MTU: 4096,
            SSL_OP_NO_RENEGOTIATION: 1073741824,
            SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION: 65536,
            SSL_OP_NO_SSLv2: 0,
            SSL_OP_NO_SSLv3: 33554432,
            SSL_OP_NO_TICKET: 16384,
            SSL_OP_NO_TLSv1_1: 268435456,
            SSL_OP_NO_TLSv1_2: 134217728,
            SSL_OP_NO_TLSv1_3: 536870912,
            SSL_OP_NO_TLSv1: 67108864,
            SSL_OP_PKCS1_CHECK_1: 0,
            // Node.js v18 only
            SSL_OP_PKCS1_CHECK_2: 0,
            // Node.js v18 only
            SSL_OP_PRIORITIZE_CHACHA: 2097152,
            SSL_OP_SINGLE_DH_USE: 0,
            // Node.js v18 only
            SSL_OP_SINGLE_ECDH_USE: 0,
            // Node.js v18 only
            SSL_OP_SSLEAY_080_CLIENT_DH_BUG: 0,
            // Node.js v18 only
            SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG: 0,
            // Node.js v18 only
            SSL_OP_TLS_BLOCK_PADDING_BUG: 0,
            // Node.js v18 only
            SSL_OP_TLS_D5_BUG: 0,
            // Node.js v18 only
            SSL_OP_TLS_ROLLBACK_BUG: 8388608,
            TLS1_1_VERSION: 0,
            // explicitly set to 0 to avoid version misdetection
            TLS1_2_VERSION: 0,
            // explicitly set to 0 to avoid version misdetection
            TLS1_3_VERSION: 0,
            // explicitly set to 0 to avoid version misdetection
            TLS1_VERSION: 0,
            // explicitly set to 0 to avoid version misdetection
            defaultCoreCipherList: "",
            // explicitly set to "" to avoid version misdetection
            get defaultCipherList() {
                return constants2.defaultCoreCipherList;
            },
            set defaultCipherList(_ignored) {
            }
        };
        constants_default = constants2;
    }
});

// node_modules/unenv/runtime/node/crypto/index.mjs
var crypto_default;
var init_crypto = __esm({
    "node_modules/unenv/runtime/node/crypto/index.mjs"() {
        init_virtual_unenv_global_polyfill_process();
        init_virtual_unenv_global_polyfill_performance();
        init_virtual_unenv_global_polyfill_console();
        init_virtual_unenv_global_polyfill_set_immediate();
        init_virtual_unenv_global_polyfill_clear_immediate();
        init_web();
        init_node();
        init_constants();
        init_web();
        init_node();
        init_constants();
        crypto_default = {
            ...web_exports,
            ...node_exports,
            // @ts-expect-error @types/node is out of date - this is a bug in typings
            constants: constants_default
        };
    }
});

// node_modules/unenv/runtime/node/crypto/$cloudflare.mjs
var workerdCrypto, Certificate2, DiffieHellman2, DiffieHellmanGroup2, Hash2, Hmac2, KeyObject2, X509Certificate2, checkPrime2, checkPrimeSync2, createDiffieHellman2, createDiffieHellmanGroup2, createHash2, createHmac2, createPrivateKey2, createPublicKey2, createSecretKey2, generateKey2, generateKeyPair2, generateKeyPairSync2, generateKeySync2, generatePrime2, generatePrimeSync2, getCiphers2, getCurves2, getDiffieHellman2, getFips2, getHashes2, hkdf2, hkdfSync2, pbkdf22, pbkdf2Sync2, randomBytes2, randomFill2, randomFillSync2, randomInt2, randomUUID2, scrypt2, scryptSync2, secureHeapUsed2, setEngine2, setFips2, subtle2, timingSafeEqual2, getRandomValues2, webcrypto2, fips2, cloudflare_default3;
var init_cloudflare4 = __esm({
    "node_modules/unenv/runtime/node/crypto/$cloudflare.mjs"() {
        init_virtual_unenv_global_polyfill_process();
        init_virtual_unenv_global_polyfill_performance();
        init_virtual_unenv_global_polyfill_console();
        init_virtual_unenv_global_polyfill_set_immediate();
        init_virtual_unenv_global_polyfill_clear_immediate();
        init_crypto();
        init_crypto();
        workerdCrypto = process.getBuiltinModule("node:crypto");
        ({
            Certificate: Certificate2,
            DiffieHellman: DiffieHellman2,
            DiffieHellmanGroup: DiffieHellmanGroup2,
            Hash: Hash2,
            Hmac: Hmac2,
            KeyObject: KeyObject2,
            X509Certificate: X509Certificate2,
            checkPrime: checkPrime2,
            checkPrimeSync: checkPrimeSync2,
            createDiffieHellman: createDiffieHellman2,
            createDiffieHellmanGroup: createDiffieHellmanGroup2,
            createHash: createHash2,
            createHmac: createHmac2,
            createPrivateKey: createPrivateKey2,
            createPublicKey: createPublicKey2,
            createSecretKey: createSecretKey2,
            generateKey: generateKey2,
            generateKeyPair: generateKeyPair2,
            generateKeyPairSync: generateKeyPairSync2,
            generateKeySync: generateKeySync2,
            generatePrime: generatePrime2,
            generatePrimeSync: generatePrimeSync2,
            getCiphers: getCiphers2,
            getCurves: getCurves2,
            getDiffieHellman: getDiffieHellman2,
            getFips: getFips2,
            getHashes: getHashes2,
            hkdf: hkdf2,
            hkdfSync: hkdfSync2,
            pbkdf2: pbkdf22,
            pbkdf2Sync: pbkdf2Sync2,
            randomBytes: randomBytes2,
            randomFill: randomFill2,
            randomFillSync: randomFillSync2,
            randomInt: randomInt2,
            randomUUID: randomUUID2,
            scrypt: scrypt2,
            scryptSync: scryptSync2,
            secureHeapUsed: secureHeapUsed2,
            setEngine: setEngine2,
            setFips: setFips2,
            subtle: subtle2,
            timingSafeEqual: timingSafeEqual2
        } = workerdCrypto);
        getRandomValues2 = workerdCrypto.getRandomValues.bind(
            workerdCrypto.webcrypto
        );
        webcrypto2 = {
            CryptoKey: webcrypto.CryptoKey,
            getRandomValues: getRandomValues2,
            randomUUID: randomUUID2,
            subtle: subtle2
        };
        fips2 = workerdCrypto.fips;
        cloudflare_default3 = {
            /**
             * manually unroll unenv-polyfilled-symbols to make it tree-shakeable
             */
            Certificate: Certificate2,
            Cipher,
            Cipheriv,
            Decipher,
            Decipheriv,
            ECDH,
            Sign,
            Verify,
            X509Certificate: X509Certificate2,
            // @ts-expect-error @types/node is out of date - this is a bug in typings
            constants: constants_default,
            createCipheriv,
            createDecipheriv,
            createECDH,
            createSign,
            createVerify,
            diffieHellman,
            getCipherInfo,
            hash,
            privateDecrypt,
            privateEncrypt,
            publicDecrypt,
            publicEncrypt,
            scrypt: scrypt2,
            scryptSync: scryptSync2,
            sign,
            verify,
            // default-only export from unenv
            createCipher,
            createDecipher,
            pseudoRandomBytes,
            /**
             * manually unroll workerd-polyfilled-symbols to make it tree-shakeable
             */
            DiffieHellman: DiffieHellman2,
            DiffieHellmanGroup: DiffieHellmanGroup2,
            Hash: Hash2,
            Hmac: Hmac2,
            KeyObject: KeyObject2,
            checkPrime: checkPrime2,
            checkPrimeSync: checkPrimeSync2,
            createDiffieHellman: createDiffieHellman2,
            createDiffieHellmanGroup: createDiffieHellmanGroup2,
            createHash: createHash2,
            createHmac: createHmac2,
            createPrivateKey: createPrivateKey2,
            createPublicKey: createPublicKey2,
            createSecretKey: createSecretKey2,
            generateKey: generateKey2,
            generateKeyPair: generateKeyPair2,
            generateKeyPairSync: generateKeyPairSync2,
            generateKeySync: generateKeySync2,
            generatePrime: generatePrime2,
            generatePrimeSync: generatePrimeSync2,
            getCiphers: getCiphers2,
            getCurves: getCurves2,
            getDiffieHellman: getDiffieHellman2,
            getFips: getFips2,
            getHashes: getHashes2,
            getRandomValues: getRandomValues2,
            hkdf: hkdf2,
            hkdfSync: hkdfSync2,
            pbkdf2: pbkdf22,
            pbkdf2Sync: pbkdf2Sync2,
            randomBytes: randomBytes2,
            randomFill: randomFill2,
            randomFillSync: randomFillSync2,
            randomInt: randomInt2,
            randomUUID: randomUUID2,
            secureHeapUsed: secureHeapUsed2,
            setEngine: setEngine2,
            setFips: setFips2,
            subtle: subtle2,
            timingSafeEqual: timingSafeEqual2,
            // default-only export from workerd
            fips: fips2,
            // special-cased deep merged symbols
            webcrypto: webcrypto2
        };
    }
});

// node-built-in-modules:crypto
var require_crypto = __commonJS({
    "node-built-in-modules:crypto"(exports, module2) {
        init_virtual_unenv_global_polyfill_process();
        init_virtual_unenv_global_polyfill_performance();
        init_virtual_unenv_global_polyfill_console();
        init_virtual_unenv_global_polyfill_set_immediate();
        init_virtual_unenv_global_polyfill_clear_immediate();
        init_cloudflare4();
        module2.exports = cloudflare_default3;
    }
});

// node_modules/unenv/runtime/node/buffer/internal/base64.mjs
function getLens(b64) {
    const len = b64.length;
    if (len % 4 > 0) {
        throw new Error("Invalid string. Length must be a multiple of 4");
    }
    let validLen = b64.indexOf("=");
    if (validLen === -1) {
        validLen = len;
    }
    const placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
    return [validLen, placeHoldersLen];
}
function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
    let tmp;
    const lens = getLens(b64);
    const validLen = lens[0];
    const placeHoldersLen = lens[1];
    const arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    let curByte = 0;
    const len = placeHoldersLen > 0 ? validLen - 4 : validLen;
    let i;
    for (i = 0; i < len; i += 4) {
        tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
        arr[curByte++] = tmp >> 16 & 255;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
    }
    if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
        arr[curByte++] = tmp & 255;
    }
    if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
    }
    return arr;
}
function tripletToBase64(num) {
    return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
}
function encodeChunk(uint8, start, end) {
    let tmp;
    const output = [];
    for (let i = start; i < end; i += 3) {
        tmp = (uint8[i] << 16 & 16711680) + (uint8[i + 1] << 8 & 65280) + (uint8[i + 2] & 255);
        output.push(tripletToBase64(tmp));
    }
    return output.join("");
}
function fromByteArray(uint8) {
    let tmp;
    const len = uint8.length;
    const extraBytes = len % 3;
    const parts = [];
    const maxChunkLength = 16383;
    for (let i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
        parts.push(
            encodeChunk(
                uint8,
                i,
                i + maxChunkLength > len2 ? len2 : i + maxChunkLength
            )
        );
    }
    if (extraBytes === 1) {
        tmp = uint8[len - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "==");
    } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        parts.push(
            lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "="
        );
    }
    return parts.join("");
}
var lookup, revLookup, Arr, code;
var init_base64 = __esm({
    "node_modules/unenv/runtime/node/buffer/internal/base64.mjs"() {
        init_virtual_unenv_global_polyfill_process();
        init_virtual_unenv_global_polyfill_performance();
        init_virtual_unenv_global_polyfill_console();
        init_virtual_unenv_global_polyfill_set_immediate();
        init_virtual_unenv_global_polyfill_clear_immediate();
        lookup = [];
        revLookup = [];
        Arr = typeof Uint8Array === "undefined" ? Array : Uint8Array;
        code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        for (let i = 0, len = code.length; i < len; ++i) {
            lookup[i] = code[i];
            revLookup[code.charCodeAt(i)] = i;
        }
        revLookup["-".charCodeAt(0)] = 62;
        revLookup["_".charCodeAt(0)] = 63;
        __name(getLens, "getLens");
        __name(_byteLength, "_byteLength");
        __name(toByteArray, "toByteArray");
        __name(tripletToBase64, "tripletToBase64");
        __name(encodeChunk, "encodeChunk");
        __name(fromByteArray, "fromByteArray");
    }
});

// node_modules/unenv/runtime/node/buffer/internal/ieee754.mjs
function read(buffer, offset, isLE, mLen, nBytes) {
    let e, m;
    const eLen = nBytes * 8 - mLen - 1;
    const eMax = (1 << eLen) - 1;
    const eBias = eMax >> 1;
    let nBits = -7;
    let i = isLE ? nBytes - 1 : 0;
    const d = isLE ? -1 : 1;
    let s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    while (nBits > 0) {
        e = e * 256 + buffer[offset + i];
        i += d;
        nBits -= 8;
    }
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    while (nBits > 0) {
        m = m * 256 + buffer[offset + i];
        i += d;
        nBits -= 8;
    }
    if (e === 0) {
        e = 1 - eBias;
    } else if (e === eMax) {
        return m ? Number.NaN : (s ? -1 : 1) * Number.POSITIVE_INFINITY;
    } else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
}
function write(buffer, value, offset, isLE, mLen, nBytes) {
    let e, m, c;
    let eLen = nBytes * 8 - mLen - 1;
    const eMax = (1 << eLen) - 1;
    const eBias = eMax >> 1;
    const rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    let i = isLE ? 0 : nBytes - 1;
    const d = isLE ? 1 : -1;
    const s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (Number.isNaN(value) || value === Number.POSITIVE_INFINITY) {
        m = Number.isNaN(value) ? 1 : 0;
        e = eMax;
    } else {
        e = Math.floor(Math.log2(value));
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        value += e + eBias >= 1 ? rt / c : rt * Math.pow(2, 1 - eBias);
        if (value * c >= 2) {
            e++;
            c /= 2;
        }
        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
        } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
        }
    }
    while (mLen >= 8) {
        buffer[offset + i] = m & 255;
        i += d;
        m /= 256;
        mLen -= 8;
    }
    e = e << mLen | m;
    eLen += mLen;
    while (eLen > 0) {
        buffer[offset + i] = e & 255;
        i += d;
        e /= 256;
        eLen -= 8;
    }
    buffer[offset + i - d] |= s * 128;
}
var init_ieee754 = __esm({
    "node_modules/unenv/runtime/node/buffer/internal/ieee754.mjs"() {
        init_virtual_unenv_global_polyfill_process();
        init_virtual_unenv_global_polyfill_performance();
        init_virtual_unenv_global_polyfill_console();
        init_virtual_unenv_global_polyfill_set_immediate();
        init_virtual_unenv_global_polyfill_clear_immediate();
        __name(read, "read");
        __name(write, "write");
    }
});

// node_modules/unenv/runtime/node/buffer/internal/buffer.mjs
function typedArraySupport() {
    try {
        const arr = new Uint8Array(1);
        const proto = {
            foo: function() {
                return 42;
            }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
    } catch {
        return false;
    }
}
function createBuffer(length) {
    if (length > K_MAX_LENGTH) {
        throw new RangeError(
            'The value "' + length + '" is invalid for option "size"'
        );
    }
    const buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, Buffer2.prototype);
    return buf;
}
function Buffer2(arg, encodingOrOffset, length) {
    if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") {
            throw new TypeError(
                'The "string" argument must be of type string. Received type number'
            );
        }
        return allocUnsafe(arg);
    }
    return from(arg, encodingOrOffset, length);
}
function from(value, encodingOrOffset, length) {
    if (typeof value === "string") {
        return fromString(value, encodingOrOffset);
    }
    if (ArrayBuffer.isView(value)) {
        return fromArrayView(value);
    }
    if (value == null) {
        throw new TypeError(
            "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value
        );
    }
    if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
        return fromArrayBuffer(value, encodingOrOffset, length);
    }
    if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) {
        return fromArrayBuffer(value, encodingOrOffset, length);
    }
    if (typeof value === "number") {
        throw new TypeError(
            'The "value" argument must not be of type number. Received type number'
        );
    }
    const valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) {
        return Buffer2.from(valueOf, encodingOrOffset, length);
    }
    const b = fromObject(value);
    if (b) {
        return b;
    }
    if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") {
        return Buffer2.from(
            value[Symbol.toPrimitive]("string"),
            encodingOrOffset,
            length
        );
    }
    throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value
    );
}
function assertSize(size) {
    if (typeof size !== "number") {
        throw new TypeError('"size" argument must be of type number');
    } else if (size < 0) {
        throw new RangeError(
            'The value "' + size + '" is invalid for option "size"'
        );
    }
}
function alloc(size, fill2, encoding) {
    assertSize(size);
    if (size <= 0) {
        return createBuffer(size);
    }
    if (fill2 !== void 0) {
        return typeof encoding === "string" ? createBuffer(size).fill(fill2, encoding) : createBuffer(size).fill(fill2);
    }
    return createBuffer(size);
}
function allocUnsafe(size) {
    assertSize(size);
    return createBuffer(size < 0 ? 0 : checked(size) | 0);
}
function fromString(string, encoding) {
    if (typeof encoding !== "string" || encoding === "") {
        encoding = "utf8";
    }
    if (!Buffer2.isEncoding(encoding)) {
        throw new TypeError("Unknown encoding: " + encoding);
    }
    const length = byteLength(string, encoding) | 0;
    let buf = createBuffer(length);
    const actual = buf.write(string, encoding);
    if (actual !== length) {
        buf = buf.slice(0, actual);
    }
    return buf;
}
function fromArrayLike(array) {
    const length = array.length < 0 ? 0 : checked(array.length) | 0;
    const buf = createBuffer(length);
    for (let i = 0; i < length; i += 1) {
        buf[i] = array[i] & 255;
    }
    return buf;
}
function fromArrayView(arrayView) {
    if (isInstance(arrayView, Uint8Array)) {
        const copy2 = new Uint8Array(arrayView);
        return fromArrayBuffer(copy2.buffer, copy2.byteOffset, copy2.byteLength);
    }
    return fromArrayLike(arrayView);
}
function fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) {
        throw new RangeError('"offset" is outside of buffer bounds');
    }
    if (array.byteLength < byteOffset + (length || 0)) {
        throw new RangeError('"length" is outside of buffer bounds');
    }
    let buf;
    if (byteOffset === void 0 && length === void 0) {
        buf = new Uint8Array(array);
    } else if (length === void 0) {
        buf = new Uint8Array(array, byteOffset);
    } else {
        buf = new Uint8Array(array, byteOffset, length);
    }
    Object.setPrototypeOf(buf, Buffer2.prototype);
    return buf;
}
function fromObject(obj) {
    if (Buffer2.isBuffer(obj)) {
        const len = checked(obj.length) | 0;
        const buf = createBuffer(len);
        if (buf.length === 0) {
            return buf;
        }
        obj.copy(buf, 0, 0, len);
        return buf;
    }
    if (obj.length !== void 0) {
        if (typeof obj.length !== "number" || numberIsNaN(obj.length)) {
            return createBuffer(0);
        }
        return fromArrayLike(obj);
    }
    if (obj.type === "Buffer" && Array.isArray(obj.data)) {
        return fromArrayLike(obj.data);
    }
}
function checked(length) {
    if (length >= K_MAX_LENGTH) {
        throw new RangeError(
            "Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes"
        );
    }
    return length | 0;
}
function byteLength(string, encoding) {
    if (Buffer2.isBuffer(string)) {
        return string.length;
    }
    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
        return string.byteLength;
    }
    if (typeof string !== "string") {
        throw new TypeError(
            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string
        );
    }
    const len = string.length;
    const mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) {
        return 0;
    }
    let loweredCase = false;
    for (; ; ) {
        switch (encoding) {
            case "ascii":
            case "latin1":
            case "binary":
                return len;
            case "utf8":
            case "utf-8":
                return utf8ToBytes(string).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return len * 2;
            case "hex":
                return len >>> 1;
            case "base64":
                return base64ToBytes(string).length;
            default:
                if (loweredCase) {
                    return mustMatch ? -1 : utf8ToBytes(string).length;
                }
                encoding = ("" + encoding).toLowerCase();
                loweredCase = true;
        }
    }
}
function slowToString(encoding, start, end) {
    let loweredCase = false;
    if (start === void 0 || start < 0) {
        start = 0;
    }
    if (start > this.length) {
        return "";
    }
    if (end === void 0 || end > this.length) {
        end = this.length;
    }
    if (end <= 0) {
        return "";
    }
    end >>>= 0;
    start >>>= 0;
    if (end <= start) {
        return "";
    }
    if (!encoding) {
        encoding = "utf8";
    }
    while (true) {
        switch (encoding) {
            case "hex":
                return hexSlice(this, start, end);
            case "utf8":
            case "utf-8":
                return utf8Slice(this, start, end);
            case "ascii":
                return asciiSlice(this, start, end);
            case "latin1":
            case "binary":
                return latin1Slice(this, start, end);
            case "base64":
                return base64Slice(this, start, end);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return utf16leSlice(this, start, end);
            default:
                if (loweredCase) {
                    throw new TypeError("Unknown encoding: " + encoding);
                }
                encoding = (encoding + "").toLowerCase();
                loweredCase = true;
        }
    }
}
function swap(b, n, m) {
    const i = b[n];
    b[n] = b[m];
    b[m] = i;
}
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir3) {
    if (buffer.length === 0) {
        return -1;
    }
    if (typeof byteOffset === "string") {
        encoding = byteOffset;
        byteOffset = 0;
    } else if (byteOffset > 2147483647) {
        byteOffset = 2147483647;
    } else if (byteOffset < -2147483648) {
        byteOffset = -2147483648;
    }
    byteOffset = +byteOffset;
    if (numberIsNaN(byteOffset)) {
        byteOffset = dir3 ? 0 : buffer.length - 1;
    }
    if (byteOffset < 0) {
        byteOffset = buffer.length + byteOffset;
    }
    if (byteOffset >= buffer.length) {
        if (dir3) {
            return -1;
        } else {
            byteOffset = buffer.length - 1;
        }
    } else if (byteOffset < 0) {
        if (dir3) {
            byteOffset = 0;
        } else {
            return -1;
        }
    }
    if (typeof val === "string") {
        val = Buffer2.from(val, encoding);
    }
    if (Buffer2.isBuffer(val)) {
        if (val.length === 0) {
            return -1;
        }
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir3);
    } else if (typeof val === "number") {
        val = val & 255;
        if (typeof Uint8Array.prototype.indexOf === "function") {
            return dir3 ? Uint8Array.prototype.indexOf.call(buffer, val, byteOffset) : Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
        return arrayIndexOf(buffer, [val], byteOffset, encoding, dir3);
    }
    throw new TypeError("val must be string, number or Buffer");
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir3) {
    let indexSize = 1;
    let arrLength = arr.length;
    let valLength = val.length;
    if (encoding !== void 0) {
        encoding = String(encoding).toLowerCase();
        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
            if (arr.length < 2 || val.length < 2) {
                return -1;
            }
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
        }
    }
    function read2(buf, i2) {
        return indexSize === 1 ? buf[i2] : buf.readUInt16BE(i2 * indexSize);
    }
    __name(read2, "read");
    let i;
    if (dir3) {
        let foundIndex = -1;
        for (i = byteOffset; i < arrLength; i++) {
            if (read2(arr, i) === read2(val, foundIndex === -1 ? 0 : i - foundIndex)) {
                if (foundIndex === -1) {
                    foundIndex = i;
                }
                if (i - foundIndex + 1 === valLength) {
                    return foundIndex * indexSize;
                }
            } else {
                if (foundIndex !== -1) {
                    i -= i - foundIndex;
                }
                foundIndex = -1;
            }
        }
    } else {
        if (byteOffset + valLength > arrLength) {
            byteOffset = arrLength - valLength;
        }
        for (i = byteOffset; i >= 0; i--) {
            let found = true;
            for (let j = 0; j < valLength; j++) {
                if (read2(arr, i + j) !== read2(val, j)) {
                    found = false;
                    break;
                }
            }
            if (found) {
                return i;
            }
        }
    }
    return -1;
}
function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    const remaining = buf.length - offset;
    if (length) {
        length = Number(length);
        if (length > remaining) {
            length = remaining;
        }
    } else {
        length = remaining;
    }
    const strLen = string.length;
    if (length > strLen / 2) {
        length = strLen / 2;
    }
    let i;
    for (i = 0; i < length; ++i) {
        const parsed = Number.parseInt(string.slice(i * 2, i * 2 + 2), 16);
        if (numberIsNaN(parsed)) {
            return i;
        }
        buf[offset + i] = parsed;
    }
    return i;
}
function utf8Write(buf, string, offset, length) {
    return blitBuffer(
        utf8ToBytes(string, buf.length - offset),
        buf,
        offset,
        length
    );
}
function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
    return blitBuffer(
        utf16leToBytes(string, buf.length - offset),
        buf,
        offset,
        length
    );
}
function base64Slice(buf, start, end) {
    return start === 0 && end === buf.length ? fromByteArray(buf) : fromByteArray(buf.slice(start, end));
}
function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    const res = [];
    let i = start;
    while (i < end) {
        const firstByte = buf[i];
        let codePoint = null;
        let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
        if (i + bytesPerSequence <= end) {
            let secondByte, thirdByte, fourthByte, tempCodePoint;
            switch (bytesPerSequence) {
                case 1:
                    if (firstByte < 128) {
                        codePoint = firstByte;
                    }
                    break;
                case 2:
                    secondByte = buf[i + 1];
                    if ((secondByte & 192) === 128) {
                        tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                        if (tempCodePoint > 127) {
                            codePoint = tempCodePoint;
                        }
                    }
                    break;
                case 3:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                        tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                        if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                            codePoint = tempCodePoint;
                        }
                    }
                    break;
                case 4:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    fourthByte = buf[i + 3];
                    if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                        tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                        if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                            codePoint = tempCodePoint;
                        }
                    }
            }
        }
        if (codePoint === null) {
            codePoint = 65533;
            bytesPerSequence = 1;
        } else if (codePoint > 65535) {
            codePoint -= 65536;
            res.push(codePoint >>> 10 & 1023 | 55296);
            codePoint = 56320 | codePoint & 1023;
        }
        res.push(codePoint);
        i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
}
function decodeCodePointsArray(codePoints) {
    const len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) {
        return String.fromCharCode.apply(String, codePoints);
    }
    let res = "";
    let i = 0;
    while (i < len) {
        res += String.fromCharCode.apply(
            String,
            codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
        );
    }
    return res;
}
function asciiSlice(buf, start, end) {
    let ret = "";
    end = Math.min(buf.length, end);
    for (let i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i] & 127);
    }
    return ret;
}
function latin1Slice(buf, start, end) {
    let ret = "";
    end = Math.min(buf.length, end);
    for (let i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i]);
    }
    return ret;
}
function hexSlice(buf, start, end) {
    const len = buf.length;
    if (!start || start < 0) {
        start = 0;
    }
    if (!end || end < 0 || end > len) {
        end = len;
    }
    let out = "";
    for (let i = start; i < end; ++i) {
        out += hexSliceLookupTable[buf[i]];
    }
    return out;
}
function utf16leSlice(buf, start, end) {
    const bytes = buf.slice(start, end);
    let res = "";
    for (let i = 0; i < bytes.length - 1; i += 2) {
        res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    }
    return res;
}
function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) {
        throw new RangeError("offset is not uint");
    }
    if (offset + ext > length) {
        throw new RangeError("Trying to access beyond buffer length");
    }
}
function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer2.isBuffer(buf)) {
        throw new TypeError('"buffer" argument must be a Buffer instance');
    }
    if (value > max || value < min) {
        throw new RangeError('"value" argument is out of bounds');
    }
    if (offset + ext > buf.length) {
        throw new RangeError("Index out of range");
    }
}
function wrtBigUInt64LE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(4294967295));
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(4294967295));
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    return offset;
}
function wrtBigUInt64BE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(4294967295));
    buf[offset + 7] = lo;
    lo = lo >> 8;
    buf[offset + 6] = lo;
    lo = lo >> 8;
    buf[offset + 5] = lo;
    lo = lo >> 8;
    buf[offset + 4] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(4294967295));
    buf[offset + 3] = hi;
    hi = hi >> 8;
    buf[offset + 2] = hi;
    hi = hi >> 8;
    buf[offset + 1] = hi;
    hi = hi >> 8;
    buf[offset] = hi;
    return offset + 8;
}
function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) {
        throw new RangeError("Index out of range");
    }
    if (offset < 0) {
        throw new RangeError("Index out of range");
    }
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        checkIEEE754(
            buf,
            value,
            offset,
            4,
            34028234663852886e22,
            -34028234663852886e22
        );
    }
    write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
}
function writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        checkIEEE754(
            buf,
            value,
            offset,
            8,
            17976931348623157e292,
            -17976931348623157e292
        );
    }
    write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
}
function E(sym, getMessage, Base) {
    errors[sym] = /* @__PURE__ */ __name(class NodeError extends Base {
        constructor() {
            super();
            Object.defineProperty(this, "message", {
                value: Reflect.apply(getMessage, this, arguments),
                writable: true,
                configurable: true
            });
            this.name = `${this.name} [${sym}]`;
            this.stack;
            delete this.name;
        }
        get code() {
            return sym;
        }
        set code(value) {
            Object.defineProperty(this, "code", {
                configurable: true,
                enumerable: true,
                value,
                writable: true
            });
        }
        toString() {
            return `${this.name} [${sym}]: ${this.message}`;
        }
    }, "NodeError");
}
function addNumericalSeparator(val) {
    let res = "";
    let i = val.length;
    const start = val[0] === "-" ? 1 : 0;
    for (; i >= start + 4; i -= 3) {
        res = `_${val.slice(i - 3, i)}${res}`;
    }
    return `${val.slice(0, i)}${res}`;
}
function checkBounds(buf, offset, byteLength2) {
    validateNumber(offset, "offset");
    if (buf[offset] === void 0 || buf[offset + byteLength2] === void 0) {
        boundsError(offset, buf.length - (byteLength2 + 1));
    }
}
function checkIntBI(value, min, max, buf, offset, byteLength2) {
    if (value > max || value < min) {
        const n = typeof min === "bigint" ? "n" : "";
        let range;
        if (byteLength2 > 3) {
            range = min === 0 || min === BigInt(0) ? `>= 0${n} and < 2${n} ** ${(byteLength2 + 1) * 8}${n}` : `>= -(2${n} ** ${(byteLength2 + 1) * 8 - 1}${n}) and < 2 ** ${(byteLength2 + 1) * 8 - 1}${n}`;
        } else {
            range = `>= ${min}${n} and <= ${max}${n}`;
        }
        throw new errors.ERR_OUT_OF_RANGE("value", range, value);
    }
    checkBounds(buf, offset, byteLength2);
}
function validateNumber(value, name) {
    if (typeof value !== "number") {
        throw new errors.ERR_INVALID_ARG_TYPE(name, "number", value);
    }
}
function boundsError(value, length, type) {
    if (Math.floor(value) !== value) {
        validateNumber(value, type);
        throw new errors.ERR_OUT_OF_RANGE(type || "offset", "an integer", value);
    }
    if (length < 0) {
        throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
    }
    throw new errors.ERR_OUT_OF_RANGE(
        type || "offset",
        `>= ${type ? 1 : 0} and <= ${length}`,
        value
    );
}
function base64clean(str) {
    str = str.split("=")[0];
    str = str.trim().replace(INVALID_BASE64_RE, "");
    if (str.length < 2) {
        return "";
    }
    while (str.length % 4 !== 0) {
        str = str + "=";
    }
    return str;
}
function utf8ToBytes(string, units) {
    units = units || Number.POSITIVE_INFINITY;
    let codePoint;
    const length = string.length;
    let leadSurrogate = null;
    const bytes = [];
    for (let i = 0; i < length; ++i) {
        codePoint = string.charCodeAt(i);
        if (codePoint > 55295 && codePoint < 57344) {
            if (!leadSurrogate) {
                if (codePoint > 56319) {
                    if ((units -= 3) > -1) {
                        bytes.push(239, 191, 189);
                    }
                    continue;
                } else if (i + 1 === length) {
                    if ((units -= 3) > -1) {
                        bytes.push(239, 191, 189);
                    }
                    continue;
                }
                leadSurrogate = codePoint;
                continue;
            }
            if (codePoint < 56320) {
                if ((units -= 3) > -1) {
                    bytes.push(239, 191, 189);
                }
                leadSurrogate = codePoint;
                continue;
            }
            codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
        } else if (leadSurrogate && // valid bmp char, but last char was a lead
            (units -= 3) > -1) {
            bytes.push(239, 191, 189);
        }
        leadSurrogate = null;
        if (codePoint < 128) {
            if ((units -= 1) < 0) {
                break;
            }
            bytes.push(codePoint);
        } else if (codePoint < 2048) {
            if ((units -= 2) < 0) {
                break;
            }
            bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
        } else if (codePoint < 65536) {
            if ((units -= 3) < 0) {
                break;
            }
            bytes.push(
                codePoint >> 12 | 224,
                codePoint >> 6 & 63 | 128,
                codePoint & 63 | 128
            );
        } else if (codePoint < 1114112) {
            if ((units -= 4) < 0) {
                break;
            }
            bytes.push(
                codePoint >> 18 | 240,
                codePoint >> 12 & 63 | 128,
                codePoint >> 6 & 63 | 128,
                codePoint & 63 | 128
            );
        } else {
            throw new Error("Invalid code point");
        }
    }
    return bytes;
}
function asciiToBytes(str) {
    const byteArray = [];
    for (let i = 0; i < str.length; ++i) {
        byteArray.push(str.charCodeAt(i) & 255);
    }
    return byteArray;
}
function utf16leToBytes(str, units) {
    let c, hi, lo;
    const byteArray = [];
    for (let i = 0; i < str.length; ++i) {
        if ((units -= 2) < 0) {
            break;
        }
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo, hi);
    }
    return byteArray;
}
function base64ToBytes(str) {
    return toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
    let i;
    for (i = 0; i < length; ++i) {
        if (i + offset >= dst.length || i >= src.length) {
            break;
        }
        dst[i + offset] = src[i];
    }
    return i;
}
function isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function numberIsNaN(obj) {
    return obj !== obj;
}
function defineBigIntMethod(fn2) {
    return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn2;
}
function BufferBigIntNotDefined() {
    throw new Error("BigInt not supported");
}
var customInspectSymbol, INSPECT_MAX_BYTES, K_MAX_LENGTH, MAX_ARGUMENTS_LENGTH, errors, INVALID_BASE64_RE, hexSliceLookupTable;
var init_buffer = __esm({
    "node_modules/unenv/runtime/node/buffer/internal/buffer.mjs"() {
        init_virtual_unenv_global_polyfill_process();
        init_virtual_unenv_global_polyfill_performance();
        init_virtual_unenv_global_polyfill_console();
        init_virtual_unenv_global_polyfill_set_immediate();
        init_virtual_unenv_global_polyfill_clear_immediate();
        init_base64();
        init_ieee754();
        customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("nodejs.util.inspect.custom") : null;
        INSPECT_MAX_BYTES = 50;
        K_MAX_LENGTH = 2147483647;
        Buffer2.TYPED_ARRAY_SUPPORT = typedArraySupport();
        if (!Buffer2.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
            console.error(
                "This environment lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
            );
        }
        __name(typedArraySupport, "typedArraySupport");
        Object.defineProperty(Buffer2.prototype, "parent", {
            enumerable: true,
            get: function() {
                if (!Buffer2.isBuffer(this)) {
                    return;
                }
                return this.buffer;
            }
        });
        Object.defineProperty(Buffer2.prototype, "offset", {
            enumerable: true,
            get: function() {
                if (!Buffer2.isBuffer(this)) {
                    return;
                }
                return this.byteOffset;
            }
        });
        __name(createBuffer, "createBuffer");
        __name(Buffer2, "Buffer");
        Buffer2.poolSize = 8192;
        __name(from, "from");
        Buffer2.from = function(value, encodingOrOffset, length) {
            return from(value, encodingOrOffset, length);
        };
        Object.setPrototypeOf(Buffer2.prototype, Uint8Array.prototype);
        Object.setPrototypeOf(Buffer2, Uint8Array);
        __name(assertSize, "assertSize");
        __name(alloc, "alloc");
        Buffer2.alloc = function(size, fill2, encoding) {
            return alloc(size, fill2, encoding);
        };
        __name(allocUnsafe, "allocUnsafe");
        Buffer2.allocUnsafe = function(size) {
            return allocUnsafe(size);
        };
        Buffer2.allocUnsafeSlow = function(size) {
            return allocUnsafe(size);
        };
        __name(fromString, "fromString");
        __name(fromArrayLike, "fromArrayLike");
        __name(fromArrayView, "fromArrayView");
        __name(fromArrayBuffer, "fromArrayBuffer");
        __name(fromObject, "fromObject");
        __name(checked, "checked");
        Buffer2.isBuffer = /* @__PURE__ */ __name(function isBuffer(b) {
            return b != null && b._isBuffer === true && b !== Buffer2.prototype;
        }, "isBuffer");
        Buffer2.compare = /* @__PURE__ */ __name(function compare(a, b) {
            if (isInstance(a, Uint8Array)) {
                a = Buffer2.from(a, a.offset, a.byteLength);
            }
            if (isInstance(b, Uint8Array)) {
                b = Buffer2.from(b, b.offset, b.byteLength);
            }
            if (!Buffer2.isBuffer(a) || !Buffer2.isBuffer(b)) {
                throw new TypeError(
                    'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
                );
            }
            if (a === b) {
                return 0;
            }
            let x = a.length;
            let y = b.length;
            for (let i = 0, len = Math.min(x, y); i < len; ++i) {
                if (a[i] !== b[i]) {
                    x = a[i];
                    y = b[i];
                    break;
                }
            }
            if (x < y) {
                return -1;
            }
            if (y < x) {
                return 1;
            }
            return 0;
        }, "compare");
        Buffer2.isEncoding = /* @__PURE__ */ __name(function isEncoding(encoding) {
            switch (String(encoding).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return true;
                default:
                    return false;
            }
        }, "isEncoding");
        Buffer2.concat = /* @__PURE__ */ __name(function concat(list, length) {
            if (!Array.isArray(list)) {
                throw new TypeError('"list" argument must be an Array of Buffers');
            }
            if (list.length === 0) {
                return Buffer2.alloc(0);
            }
            let i;
            if (length === void 0) {
                length = 0;
                for (i = 0; i < list.length; ++i) {
                    length += list[i].length;
                }
            }
            const buffer = Buffer2.allocUnsafe(length);
            let pos = 0;
            for (i = 0; i < list.length; ++i) {
                let buf = list[i];
                if (isInstance(buf, Uint8Array)) {
                    if (pos + buf.length > buffer.length) {
                        if (!Buffer2.isBuffer(buf)) {
                            buf = Buffer2.from(buf.buffer, buf.byteOffset, buf.byteLength);
                        }
                        buf.copy(buffer, pos);
                    } else {
                        Uint8Array.prototype.set.call(buffer, buf, pos);
                    }
                } else if (Buffer2.isBuffer(buf)) {
                    buf.copy(buffer, pos);
                } else {
                    throw new TypeError('"list" argument must be an Array of Buffers');
                }
                pos += buf.length;
            }
            return buffer;
        }, "concat");
        __name(byteLength, "byteLength");
        Buffer2.byteLength = byteLength;
        __name(slowToString, "slowToString");
        Buffer2.prototype._isBuffer = true;
        __name(swap, "swap");
        Buffer2.prototype.swap16 = /* @__PURE__ */ __name(function swap16() {
            const len = this.length;
            if (len % 2 !== 0) {
                throw new RangeError("Buffer size must be a multiple of 16-bits");
            }
            for (let i = 0; i < len; i += 2) {
                swap(this, i, i + 1);
            }
            return this;
        }, "swap16");
        Buffer2.prototype.swap32 = /* @__PURE__ */ __name(function swap32() {
            const len = this.length;
            if (len % 4 !== 0) {
                throw new RangeError("Buffer size must be a multiple of 32-bits");
            }
            for (let i = 0; i < len; i += 4) {
                swap(this, i, i + 3);
                swap(this, i + 1, i + 2);
            }
            return this;
        }, "swap32");
        Buffer2.prototype.swap64 = /* @__PURE__ */ __name(function swap64() {
            const len = this.length;
            if (len % 8 !== 0) {
                throw new RangeError("Buffer size must be a multiple of 64-bits");
            }
            for (let i = 0; i < len; i += 8) {
                swap(this, i, i + 7);
                swap(this, i + 1, i + 6);
                swap(this, i + 2, i + 5);
                swap(this, i + 3, i + 4);
            }
            return this;
        }, "swap64");
        Buffer2.prototype.toString = /* @__PURE__ */ __name(function toString() {
            const length = this.length;
            if (length === 0) {
                return "";
            }
            if (arguments.length === 0) {
                return utf8Slice(this, 0, length);
            }
            return Reflect.apply(slowToString, this, arguments);
        }, "toString");
        Buffer2.prototype.toLocaleString = Buffer2.prototype.toString;
        Buffer2.prototype.equals = /* @__PURE__ */ __name(function equals(b) {
            if (!Buffer2.isBuffer(b)) {
                throw new TypeError("Argument must be a Buffer");
            }
            if (this === b) {
                return true;
            }
            return Buffer2.compare(this, b) === 0;
        }, "equals");
        Buffer2.prototype.inspect = /* @__PURE__ */ __name(function inspect() {
            let str = "";
            const max = INSPECT_MAX_BYTES;
            str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
            if (this.length > max) {
                str += " ... ";
            }
            return "<Buffer " + str + ">";
        }, "inspect");
        if (customInspectSymbol) {
            Buffer2.prototype[customInspectSymbol] = Buffer2.prototype.inspect;
        }
        Buffer2.prototype.compare = /* @__PURE__ */ __name(function compare2(target, start, end, thisStart, thisEnd) {
            if (isInstance(target, Uint8Array)) {
                target = Buffer2.from(target, target.offset, target.byteLength);
            }
            if (!Buffer2.isBuffer(target)) {
                throw new TypeError(
                    'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target
                );
            }
            if (start === void 0) {
                start = 0;
            }
            if (end === void 0) {
                end = target ? target.length : 0;
            }
            if (thisStart === void 0) {
                thisStart = 0;
            }
            if (thisEnd === void 0) {
                thisEnd = this.length;
            }
            if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
                throw new RangeError("out of range index");
            }
            if (thisStart >= thisEnd && start >= end) {
                return 0;
            }
            if (thisStart >= thisEnd) {
                return -1;
            }
            if (start >= end) {
                return 1;
            }
            start >>>= 0;
            end >>>= 0;
            thisStart >>>= 0;
            thisEnd >>>= 0;
            if (this === target) {
                return 0;
            }
            let x = thisEnd - thisStart;
            let y = end - start;
            const len = Math.min(x, y);
            const thisCopy = this.slice(thisStart, thisEnd);
            const targetCopy = target.slice(start, end);
            for (let i = 0; i < len; ++i) {
                if (thisCopy[i] !== targetCopy[i]) {
                    x = thisCopy[i];
                    y = targetCopy[i];
                    break;
                }
            }
            if (x < y) {
                return -1;
            }
            if (y < x) {
                return 1;
            }
            return 0;
        }, "compare2");
        __name(bidirectionalIndexOf, "bidirectionalIndexOf");
        __name(arrayIndexOf, "arrayIndexOf");
        Buffer2.prototype.includes = /* @__PURE__ */ __name(function includes(val, byteOffset, encoding) {
            return this.indexOf(val, byteOffset, encoding) !== -1;
        }, "includes");
        Buffer2.prototype.indexOf = /* @__PURE__ */ __name(function indexOf(val, byteOffset, encoding) {
            return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
        }, "indexOf");
        Buffer2.prototype.lastIndexOf = /* @__PURE__ */ __name(function lastIndexOf(val, byteOffset, encoding) {
            return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
        }, "lastIndexOf");
        __name(hexWrite, "hexWrite");
        __name(utf8Write, "utf8Write");
        __name(asciiWrite, "asciiWrite");
        __name(base64Write, "base64Write");
        __name(ucs2Write, "ucs2Write");
        Buffer2.prototype.write = /* @__PURE__ */ __name(function write2(string, offset, length, encoding) {
            if (offset === void 0) {
                encoding = "utf8";
                length = this.length;
                offset = 0;
            } else if (length === void 0 && typeof offset === "string") {
                encoding = offset;
                length = this.length;
                offset = 0;
            } else if (Number.isFinite(offset)) {
                offset = offset >>> 0;
                if (Number.isFinite(length)) {
                    length = length >>> 0;
                    if (encoding === void 0) {
                        encoding = "utf8";
                    }
                } else {
                    encoding = length;
                    length = void 0;
                }
            } else {
                throw new TypeError(
                    "Buffer.write(string, encoding, offset[, length]) is no longer supported"
                );
            }
            const remaining = this.length - offset;
            if (length === void 0 || length > remaining) {
                length = remaining;
            }
            if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
                throw new RangeError("Attempt to write outside buffer bounds");
            }
            if (!encoding) {
                encoding = "utf8";
            }
            let loweredCase = false;
            for (; ; ) {
                switch (encoding) {
                    case "hex":
                        return hexWrite(this, string, offset, length);
                    case "utf8":
                    case "utf-8":
                        return utf8Write(this, string, offset, length);
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return asciiWrite(this, string, offset, length);
                    case "base64":
                        return base64Write(this, string, offset, length);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return ucs2Write(this, string, offset, length);
                    default:
                        if (loweredCase) {
                            throw new TypeError("Unknown encoding: " + encoding);
                        }
                        encoding = ("" + encoding).toLowerCase();
                        loweredCase = true;
                }
            }
        }, "write");
        Buffer2.prototype.toJSON = /* @__PURE__ */ __name(function toJSON() {
            return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0)
            };
        }, "toJSON");
        __name(base64Slice, "base64Slice");
        __name(utf8Slice, "utf8Slice");
        MAX_ARGUMENTS_LENGTH = 4096;
        __name(decodeCodePointsArray, "decodeCodePointsArray");
        __name(asciiSlice, "asciiSlice");
        __name(latin1Slice, "latin1Slice");
        __name(hexSlice, "hexSlice");
        __name(utf16leSlice, "utf16leSlice");
        Buffer2.prototype.slice = /* @__PURE__ */ __name(function slice(start, end) {
            const len = this.length;
            start = Math.trunc(start);
            end = end === void 0 ? len : Math.trunc(end);
            if (start < 0) {
                start += len;
                if (start < 0) {
                    start = 0;
                }
            } else if (start > len) {
                start = len;
            }
            if (end < 0) {
                end += len;
                if (end < 0) {
                    end = 0;
                }
            } else if (end > len) {
                end = len;
            }
            if (end < start) {
                end = start;
            }
            const newBuf = this.subarray(start, end);
            Object.setPrototypeOf(newBuf, Buffer2.prototype);
            return newBuf;
        }, "slice");
        __name(checkOffset, "checkOffset");
        Buffer2.prototype.readUintLE = Buffer2.prototype.readUIntLE = /* @__PURE__ */ __name(function readUIntLE(offset, byteLength2, noAssert) {
            offset = offset >>> 0;
            byteLength2 = byteLength2 >>> 0;
            if (!noAssert) {
                checkOffset(offset, byteLength2, this.length);
            }
            let val = this[offset];
            let mul = 1;
            let i = 0;
            while (++i < byteLength2 && (mul *= 256)) {
                val += this[offset + i] * mul;
            }
            return val;
        }, "readUIntLE");
        Buffer2.prototype.readUintBE = Buffer2.prototype.readUIntBE = /* @__PURE__ */ __name(function readUIntBE(offset, byteLength2, noAssert) {
            offset = offset >>> 0;
            byteLength2 = byteLength2 >>> 0;
            if (!noAssert) {
                checkOffset(offset, byteLength2, this.length);
            }
            let val = this[offset + --byteLength2];
            let mul = 1;
            while (byteLength2 > 0 && (mul *= 256)) {
                val += this[offset + --byteLength2] * mul;
            }
            return val;
        }, "readUIntBE");
        Buffer2.prototype.readUint8 = Buffer2.prototype.readUInt8 = /* @__PURE__ */ __name(function readUInt8(offset, noAssert) {
            offset = offset >>> 0;
            if (!noAssert) {
                checkOffset(offset, 1, this.length);
            }
            return this[offset];
        }, "readUInt8");
        Buffer2.prototype.readUint16LE = Buffer2.prototype.readUInt16LE = /* @__PURE__ */ __name(function readUInt16LE(offset, noAssert) {
            offset = offset >>> 0;
            if (!noAssert) {
                checkOffset(offset, 2, this.length);
            }
            return this[offset] | this[offset + 1] << 8;
        }, "readUInt16LE");
        Buffer2.prototype.readUint16BE = Buffer2.prototype.readUInt16BE = /* @__PURE__ */ __name(function readUInt16BE(offset, noAssert) {
            offset = offset >>> 0;
            if (!noAssert) {
                checkOffset(offset, 2, this.length);
            }
            return this[offset] << 8 | this[offset + 1];
        }, "readUInt16BE");
        Buffer2.prototype.readUint32LE = Buffer2.prototype.readUInt32LE = /* @__PURE__ */ __name(function readUInt32LE(offset, noAssert) {
            offset = offset >>> 0;
            if (!noAssert) {
                checkOffset(offset, 4, this.length);
            }
            return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
        }, "readUInt32LE");
        Buffer2.prototype.readUint32BE = Buffer2.prototype.readUInt32BE = /* @__PURE__ */ __name(function readUInt32BE(offset, noAssert) {
            offset = offset >>> 0;
            if (!noAssert) {
                checkOffset(offset, 4, this.length);
            }
            return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
        }, "readUInt32BE");
        Buffer2.prototype.readBigUInt64LE = defineBigIntMethod(
            /* @__PURE__ */ __name(function readBigUInt64LE(offset) {
                offset = offset >>> 0;
                validateNumber(offset, "offset");
                const first = this[offset];
                const last = this[offset + 7];
                if (first === void 0 || last === void 0) {
                    boundsError(offset, this.length - 8);
                }
                const lo = first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
                const hi = this[++offset] + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + last * 2 ** 24;
                return BigInt(lo) + (BigInt(hi) << BigInt(32));
            }, "readBigUInt64LE")
        );
        Buffer2.prototype.readBigUInt64BE = defineBigIntMethod(
            /* @__PURE__ */ __name(function readBigUInt64BE(offset) {
                offset = offset >>> 0;
                validateNumber(offset, "offset");
                const first = this[offset];
                const last = this[offset + 7];
                if (first === void 0 || last === void 0) {
                    boundsError(offset, this.length - 8);
                }
                const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
                const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last;
                return (BigInt(hi) << BigInt(32)) + BigInt(lo);
            }, "readBigUInt64BE")
        );
        Buffer2.prototype.readIntLE = /* @__PURE__ */ __name(function readIntLE(offset, byteLength2, noAssert) {
            offset = offset >>> 0;
            byteLength2 = byteLength2 >>> 0;
            if (!noAssert) {
                checkOffset(offset, byteLength2, this.length);
            }
            let val = this[offset];
            let mul = 1;
            let i = 0;
            while (++i < byteLength2 && (mul *= 256)) {
                val += this[offset + i] * mul;
            }
            mul *= 128;
            if (val >= mul) {
                val -= Math.pow(2, 8 * byteLength2);
            }
            return val;
        }, "readIntLE");
        Buffer2.prototype.readIntBE = /* @__PURE__ */ __name(function readIntBE(offset, byteLength2, noAssert) {
            offset = offset >>> 0;
            byteLength2 = byteLength2 >>> 0;
            if (!noAssert) {
                checkOffset(offset, byteLength2, this.length);
            }
            let i = byteLength2;
            let mul = 1;
            let val = this[offset + --i];
            while (i > 0 && (mul *= 256)) {
                val += this[offset + --i] * mul;
            }
            mul *= 128;
            if (val >= mul) {
                val -= Math.pow(2, 8 * byteLength2);
            }
            return val;
        }, "readIntBE");
        Buffer2.prototype.readInt8 = /* @__PURE__ */ __name(function readInt8(offset, noAssert) {
            offset = offset >>> 0;
            if (!noAssert) {
                checkOffset(offset, 1, this.length);
            }
            if (!(this[offset] & 128)) {
                return this[offset];
            }
            return (255 - this[offset] + 1) * -1;
        }, "readInt8");
        Buffer2.prototype.readInt16LE = /* @__PURE__ */ __name(function readInt16LE(offset, noAssert) {
            offset = offset >>> 0;
            if (!noAssert) {
                checkOffset(offset, 2, this.length);
            }
            const val = this[offset] | this[offset + 1] << 8;
            return val & 32768 ? val | 4294901760 : val;
        }, "readInt16LE");
        Buffer2.prototype.readInt16BE = /* @__PURE__ */ __name(function readInt16BE(offset, noAssert) {
            offset = offset >>> 0;
            if (!noAssert) {
                checkOffset(offset, 2, this.length);
            }
            const val = this[offset + 1] | this[offset] << 8;
            return val & 32768 ? val | 4294901760 : val;
        }, "readInt16BE");
        Buffer2.prototype.readInt32LE = /* @__PURE__ */ __name(function readInt32LE(offset, noAssert) {
            offset = offset >>> 0;
            if (!noAssert) {
                checkOffset(offset, 4, this.length);
            }
            return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
        }, "readInt32LE");
        Buffer2.prototype.readInt32BE = /* @__PURE__ */ __name(function readInt32BE(offset, noAssert) {
            offset = offset >>> 0;
            if (!noAssert) {
                checkOffset(offset, 4, this.length);
            }
            return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
        }, "readInt32BE");
        Buffer2.prototype.readBigInt64LE = defineBigIntMethod(
            /* @__PURE__ */ __name(function readBigInt64LE(offset) {
                offset = offset >>> 0;
                validateNumber(offset, "offset");
                const first = this[offset];
                const last = this[offset + 7];
                if (first === void 0 || last === void 0) {
                    boundsError(offset, this.length - 8);
                }
                const val = this[offset + 4] + this[offset + 5] * 2 ** 8 + this[offset + 6] * 2 ** 16 + (last << 24);
                return (BigInt(val) << BigInt(32)) + BigInt(
                    first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24
                );
            }, "readBigInt64LE")
        );
        Buffer2.prototype.readBigInt64BE = defineBigIntMethod(
            /* @__PURE__ */ __name(function readBigInt64BE(offset) {
                offset = offset >>> 0;
                validateNumber(offset, "offset");
                const first = this[offset];
                const last = this[offset + 7];
                if (first === void 0 || last === void 0) {
                    boundsError(offset, this.length - 8);
                }
                const val = (first << 24) + // Overflow
                    this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
                return (BigInt(val) << BigInt(32)) + BigInt(
                    this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last
                );
            }, "readBigInt64BE")
        );
        Buffer2.prototype.readFloatLE = /* @__PURE__ */ __name(function readFloatLE(offset, noAssert) {
            offset = offset >>> 0;
            if (!noAssert) {
                checkOffset(offset, 4, this.length);
            }
            return read(this, offset, true, 23, 4);
        }, "readFloatLE");
        Buffer2.prototype.readFloatBE = /* @__PURE__ */ __name(function readFloatBE(offset, noAssert) {
            offset = offset >>> 0;
            if (!noAssert) {
                checkOffset(offset, 4, this.length);
            }
            return read(this, offset, false, 23, 4);
        }, "readFloatBE");
        Buffer2.prototype.readDoubleLE = /* @__PURE__ */ __name(function readDoubleLE(offset, noAssert) {
            offset = offset >>> 0;
            if (!noAssert) {
                checkOffset(offset, 8, this.length);
            }
            return read(this, offset, true, 52, 8);
        }, "readDoubleLE");
        Buffer2.prototype.readDoubleBE = /* @__PURE__ */ __name(function readDoubleBE(offset, noAssert) {
            offset = offset >>> 0;
            if (!noAssert) {
                checkOffset(offset, 8, this.length);
            }
            return read(this, offset, false, 52, 8);
        }, "readDoubleBE");
        __name(checkInt, "checkInt");
        Buffer2.prototype.writeUintLE = Buffer2.prototype.writeUIntLE = /* @__PURE__ */ __name(function writeUIntLE(value, offset, byteLength2, noAssert) {
            value = +value;
            offset = offset >>> 0;
            byteLength2 = byteLength2 >>> 0;
            if (!noAssert) {
                const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
                checkInt(this, value, offset, byteLength2, maxBytes, 0);
            }
            let mul = 1;
            let i = 0;
            this[offset] = value & 255;
            while (++i < byteLength2 && (mul *= 256)) {
                this[offset + i] = value / mul & 255;
            }
            return offset + byteLength2;
        }, "writeUIntLE");
        Buffer2.prototype.writeUintBE = Buffer2.prototype.writeUIntBE = /* @__PURE__ */ __name(function writeUIntBE(value, offset, byteLength2, noAssert) {
            value = +value;
            offset = offset >>> 0;
            byteLength2 = byteLength2 >>> 0;
            if (!noAssert) {
                const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
                checkInt(this, value, offset, byteLength2, maxBytes, 0);
            }
            let i = byteLength2 - 1;
            let mul = 1;
            this[offset + i] = value & 255;
            while (--i >= 0 && (mul *= 256)) {
                this[offset + i] = value / mul & 255;
            }
            return offset + byteLength2;
        }, "writeUIntBE");
        Buffer2.prototype.writeUint8 = Buffer2.prototype.writeUInt8 = /* @__PURE__ */ __name(function writeUInt8(value, offset, noAssert) {
            value = +value;
            offset = offset >>> 0;
            if (!noAssert) {
                checkInt(this, value, offset, 1, 255, 0);
            }
            this[offset] = value & 255;
            return offset + 1;
        }, "writeUInt8");
        Buffer2.prototype.writeUint16LE = Buffer2.prototype.writeUInt16LE = /* @__PURE__ */ __name(function writeUInt16LE(value, offset, noAssert) {
            value = +value;
            offset = offset >>> 0;
            if (!noAssert) {
                checkInt(this, value, offset, 2, 65535, 0);
            }
            this[offset] = value & 255;
            this[offset + 1] = value >>> 8;
            return offset + 2;
        }, "writeUInt16LE");
        Buffer2.prototype.writeUint16BE = Buffer2.prototype.writeUInt16BE = /* @__PURE__ */ __name(function writeUInt16BE(value, offset, noAssert) {
            value = +value;
            offset = offset >>> 0;
            if (!noAssert) {
                checkInt(this, value, offset, 2, 65535, 0);
            }
            this[offset] = value >>> 8;
            this[offset + 1] = value & 255;
            return offset + 2;
        }, "writeUInt16BE");
        Buffer2.prototype.writeUint32LE = Buffer2.prototype.writeUInt32LE = /* @__PURE__ */ __name(function writeUInt32LE(value, offset, noAssert) {
            value = +value;
            offset = offset >>> 0;
            if (!noAssert) {
                checkInt(this, value, offset, 4, 4294967295, 0);
            }
            this[offset + 3] = value >>> 24;
            this[offset + 2] = value >>> 16;
            this[offset + 1] = value >>> 8;
            this[offset] = value & 255;
            return offset + 4;
        }, "writeUInt32LE");
        Buffer2.prototype.writeUint32BE = Buffer2.prototype.writeUInt32BE = /* @__PURE__ */ __name(function writeUInt32BE(value, offset, noAssert) {
            value = +value;
            offset = offset >>> 0;
            if (!noAssert) {
                checkInt(this, value, offset, 4, 4294967295, 0);
            }
            this[offset] = value >>> 24;
            this[offset + 1] = value >>> 16;
            this[offset + 2] = value >>> 8;
            this[offset + 3] = value & 255;
            return offset + 4;
        }, "writeUInt32BE");
        __name(wrtBigUInt64LE, "wrtBigUInt64LE");
        __name(wrtBigUInt64BE, "wrtBigUInt64BE");
        Buffer2.prototype.writeBigUInt64LE = defineBigIntMethod(
            /* @__PURE__ */ __name(function writeBigUInt64LE(value, offset = 0) {
                return wrtBigUInt64LE(
                    this,
                    value,
                    offset,
                    BigInt(0),
                    BigInt("0xffffffffffffffff")
                );
            }, "writeBigUInt64LE")
        );
        Buffer2.prototype.writeBigUInt64BE = defineBigIntMethod(
            /* @__PURE__ */ __name(function writeBigUInt64BE(value, offset = 0) {
                return wrtBigUInt64BE(
                    this,
                    value,
                    offset,
                    BigInt(0),
                    BigInt("0xffffffffffffffff")
                );
            }, "writeBigUInt64BE")
        );
        Buffer2.prototype.writeIntLE = /* @__PURE__ */ __name(function writeIntLE(value, offset, byteLength2, noAssert) {
            value = +value;
            offset = offset >>> 0;
            if (!noAssert) {
                const limit = Math.pow(2, 8 * byteLength2 - 1);
                checkInt(this, value, offset, byteLength2, limit - 1, -limit);
            }
            let i = 0;
            let mul = 1;
            let sub2 = 0;
            this[offset] = value & 255;
            while (++i < byteLength2 && (mul *= 256)) {
                if (value < 0 && sub2 === 0 && this[offset + i - 1] !== 0) {
                    sub2 = 1;
                }
                this[offset + i] = Math.trunc(value / mul) - sub2 & 255;
            }
            return offset + byteLength2;
        }, "writeIntLE");
        Buffer2.prototype.writeIntBE = /* @__PURE__ */ __name(function writeIntBE(value, offset, byteLength2, noAssert) {
            value = +value;
            offset = offset >>> 0;
            if (!noAssert) {
                const limit = Math.pow(2, 8 * byteLength2 - 1);
                checkInt(this, value, offset, byteLength2, limit - 1, -limit);
            }
            let i = byteLength2 - 1;
            let mul = 1;
            let sub2 = 0;
            this[offset + i] = value & 255;
            while (--i >= 0 && (mul *= 256)) {
                if (value < 0 && sub2 === 0 && this[offset + i + 1] !== 0) {
                    sub2 = 1;
                }
                this[offset + i] = Math.trunc(value / mul) - sub2 & 255;
            }
            return offset + byteLength2;
        }, "writeIntBE");
        Buffer2.prototype.writeInt8 = /* @__PURE__ */ __name(function writeInt8(value, offset, noAssert) {
            value = +value;
            offset = offset >>> 0;
            if (!noAssert) {
                checkInt(this, value, offset, 1, 127, -128);
            }
            if (value < 0) {
                value = 255 + value + 1;
            }
            this[offset] = value & 255;
            return offset + 1;
        }, "writeInt8");
        Buffer2.prototype.writeInt16LE = /* @__PURE__ */ __name(function writeInt16LE(value, offset, noAssert) {
            value = +value;
            offset = offset >>> 0;
            if (!noAssert) {
                checkInt(this, value, offset, 2, 32767, -32768);
            }
            this[offset] = value & 255;
            this[offset + 1] = value >>> 8;
            return offset + 2;
        }, "writeInt16LE");
        Buffer2.prototype.writeInt16BE = /* @__PURE__ */ __name(function writeInt16BE(value, offset, noAssert) {
            value = +value;
            offset = offset >>> 0;
            if (!noAssert) {
                checkInt(this, value, offset, 2, 32767, -32768);
            }
            this[offset] = value >>> 8;
            this[offset + 1] = value & 255;
            return offset + 2;
        }, "writeInt16BE");
        Buffer2.prototype.writeInt32LE = /* @__PURE__ */ __name(function writeInt32LE(value, offset, noAssert) {
            value = +value;
            offset = offset >>> 0;
            if (!noAssert) {
                checkInt(this, value, offset, 4, 2147483647, -2147483648);
            }
            this[offset] = value & 255;
            this[offset + 1] = value >>> 8;
            this[offset + 2] = value >>> 16;
            this[offset + 3] = value >>> 24;
            return offset + 4;
        }, "writeInt32LE");
        Buffer2.prototype.writeInt32BE = /* @__PURE__ */ __name(function writeInt32BE(value, offset, noAssert) {
            value = +value;
            offset = offset >>> 0;
            if (!noAssert) {
                checkInt(this, value, offset, 4, 2147483647, -2147483648);
            }
            if (value < 0) {
                value = 4294967295 + value + 1;
            }
            this[offset] = value >>> 24;
            this[offset + 1] = value >>> 16;
            this[offset + 2] = value >>> 8;
            this[offset + 3] = value & 255;
            return offset + 4;
        }, "writeInt32BE");
        Buffer2.prototype.writeBigInt64LE = defineBigIntMethod(/* @__PURE__ */ __name(function writeBigInt64LE(value, offset = 0) {
            return wrtBigUInt64LE(
                this,
                value,
                offset,
                -BigInt("0x8000000000000000"),
                BigInt("0x7fffffffffffffff")
            );
        }, "writeBigInt64LE"));
        Buffer2.prototype.writeBigInt64BE = defineBigIntMethod(/* @__PURE__ */ __name(function writeBigInt64BE(value, offset = 0) {
            return wrtBigUInt64BE(
                this,
                value,
                offset,
                -BigInt("0x8000000000000000"),
                BigInt("0x7fffffffffffffff")
            );
        }, "writeBigInt64BE"));
        __name(checkIEEE754, "checkIEEE754");
        __name(writeFloat, "writeFloat");
        Buffer2.prototype.writeFloatLE = /* @__PURE__ */ __name(function writeFloatLE(value, offset, noAssert) {
            return writeFloat(this, value, offset, true, noAssert);
        }, "writeFloatLE");
        Buffer2.prototype.writeFloatBE = /* @__PURE__ */ __name(function writeFloatBE(value, offset, noAssert) {
            return writeFloat(this, value, offset, false, noAssert);
        }, "writeFloatBE");
        __name(writeDouble, "writeDouble");
        Buffer2.prototype.writeDoubleLE = /* @__PURE__ */ __name(function writeDoubleLE(value, offset, noAssert) {
            return writeDouble(this, value, offset, true, noAssert);
        }, "writeDoubleLE");
        Buffer2.prototype.writeDoubleBE = /* @__PURE__ */ __name(function writeDoubleBE(value, offset, noAssert) {
            return writeDouble(this, value, offset, false, noAssert);
        }, "writeDoubleBE");
        Buffer2.prototype.copy = /* @__PURE__ */ __name(function copy(target, targetStart, start, end) {
            if (!Buffer2.isBuffer(target)) {
                throw new TypeError("argument should be a Buffer");
            }
            if (!start) {
                start = 0;
            }
            if (!end && end !== 0) {
                end = this.length;
            }
            if (targetStart >= target.length) {
                targetStart = target.length;
            }
            if (!targetStart) {
                targetStart = 0;
            }
            if (end > 0 && end < start) {
                end = start;
            }
            if (end === start) {
                return 0;
            }
            if (target.length === 0 || this.length === 0) {
                return 0;
            }
            if (targetStart < 0) {
                throw new RangeError("targetStart out of bounds");
            }
            if (start < 0 || start >= this.length) {
                throw new RangeError("Index out of range");
            }
            if (end < 0) {
                throw new RangeError("sourceEnd out of bounds");
            }
            if (end > this.length) {
                end = this.length;
            }
            if (target.length - targetStart < end - start) {
                end = target.length - targetStart + start;
            }
            const len = end - start;
            if (this === target && typeof Uint8Array.prototype.copyWithin === "function") {
                this.copyWithin(targetStart, start, end);
            } else {
                Uint8Array.prototype.set.call(
                    target,
                    this.subarray(start, end),
                    targetStart
                );
            }
            return len;
        }, "copy");
        Buffer2.prototype.fill = /* @__PURE__ */ __name(function fill(val, start, end, encoding) {
            if (typeof val === "string") {
                if (typeof start === "string") {
                    encoding = start;
                    start = 0;
                    end = this.length;
                } else if (typeof end === "string") {
                    encoding = end;
                    end = this.length;
                }
                if (encoding !== void 0 && typeof encoding !== "string") {
                    throw new TypeError("encoding must be a string");
                }
                if (typeof encoding === "string" && !Buffer2.isEncoding(encoding)) {
                    throw new TypeError("Unknown encoding: " + encoding);
                }
                if (val.length === 1) {
                    const code2 = val.charCodeAt(0);
                    if (encoding === "utf8" && code2 < 128 || encoding === "latin1") {
                        val = code2;
                    }
                }
            } else if (typeof val === "number") {
                val = val & 255;
            } else if (typeof val === "boolean") {
                val = Number(val);
            }
            if (start < 0 || this.length < start || this.length < end) {
                throw new RangeError("Out of range index");
            }
            if (end <= start) {
                return this;
            }
            start = start >>> 0;
            end = end === void 0 ? this.length : end >>> 0;
            if (!val) {
                val = 0;
            }
            let i;
            if (typeof val === "number") {
                for (i = start; i < end; ++i) {
                    this[i] = val;
                }
            } else {
                const bytes = Buffer2.isBuffer(val) ? val : Buffer2.from(val, encoding);
                const len = bytes.length;
                if (len === 0) {
                    throw new TypeError(
                        'The value "' + val + '" is invalid for argument "value"'
                    );
                }
                for (i = 0; i < end - start; ++i) {
                    this[i + start] = bytes[i % len];
                }
            }
            return this;
        }, "fill");
        errors = {};
        __name(E, "E");
        E(
            "ERR_BUFFER_OUT_OF_BOUNDS",
            function(name) {
                if (name) {
                    return `${name} is outside of buffer bounds`;
                }
                return "Attempt to access memory outside buffer bounds";
            },
            RangeError
        );
        E(
            "ERR_INVALID_ARG_TYPE",
            function(name, actual) {
                return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
            },
            TypeError
        );
        E(
            "ERR_OUT_OF_RANGE",
            function(str, range, input) {
                let msg = `The value of "${str}" is out of range.`;
                let received = input;
                if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
                    received = addNumericalSeparator(String(input));
                } else if (typeof input === "bigint") {
                    received = String(input);
                    if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
                        received = addNumericalSeparator(received);
                    }
                    received += "n";
                }
                msg += ` It must be ${range}. Received ${received}`;
                return msg;
            },
            RangeError
        );
        __name(addNumericalSeparator, "addNumericalSeparator");
        __name(checkBounds, "checkBounds");
        __name(checkIntBI, "checkIntBI");
        __name(validateNumber, "validateNumber");
        __name(boundsError, "boundsError");
        INVALID_BASE64_RE = /[^\w+/-]/g;
        __name(base64clean, "base64clean");
        __name(utf8ToBytes, "utf8ToBytes");
        __name(asciiToBytes, "asciiToBytes");
        __name(utf16leToBytes, "utf16leToBytes");
        __name(base64ToBytes, "base64ToBytes");
        __name(blitBuffer, "blitBuffer");
        __name(isInstance, "isInstance");
        __name(numberIsNaN, "numberIsNaN");
        hexSliceLookupTable = function() {
            const alphabet = "0123456789abcdef";
            const table3 = Array.from({ length: 256 });
            for (let i = 0; i < 16; ++i) {
                const i16 = i * 16;
                for (let j = 0; j < 16; ++j) {
                    table3[i16 + j] = alphabet[i] + alphabet[j];
                }
            }
            return table3;
        }();
        __name(defineBigIntMethod, "defineBigIntMethod");
        __name(BufferBigIntNotDefined, "BufferBigIntNotDefined");
    }
});

// node_modules/unenv/runtime/node/buffer/internal/file.mjs
var File;
var init_file = __esm({
    "node_modules/unenv/runtime/node/buffer/internal/file.mjs"() {
        init_virtual_unenv_global_polyfill_process();
        init_virtual_unenv_global_polyfill_performance();
        init_virtual_unenv_global_polyfill_console();
        init_virtual_unenv_global_polyfill_set_immediate();
        init_virtual_unenv_global_polyfill_clear_immediate();
        File = class extends Blob {
            __unenv__ = true;
            size = 0;
            type = "";
            name = "";
            lastModified = 0;
            constructor(...args) {
                super(...args);
                throw new Error("[unenv] buffer.File is not implemented");
            }
            arrayBuffer() {
                throw new Error("Not implemented");
            }
            slice() {
                throw new Error("Not implemented");
            }
            text() {
                throw new Error("Not implemented");
            }
            stream() {
                throw new Error("Not implemented");
            }
            bytes() {
                throw new Error("Not implemented");
            }
        };
        __name(File, "File");
    }
});

// node_modules/unenv/runtime/node/buffer/index.mjs
var Buffer3, Blob2, resolveObjectURL, transcode, isUtf8, isAscii, btoa2, atob2;
var init_buffer2 = __esm({
    "node_modules/unenv/runtime/node/buffer/index.mjs"() {
        init_virtual_unenv_global_polyfill_process();
        init_virtual_unenv_global_polyfill_performance();
        init_virtual_unenv_global_polyfill_console();
        init_virtual_unenv_global_polyfill_set_immediate();
        init_virtual_unenv_global_polyfill_clear_immediate();
        init_utils();
        init_buffer();
        init_buffer();
        init_file();
        Buffer3 = globalThis.Buffer || Buffer2;
        Blob2 = globalThis.Blob;
        resolveObjectURL = notImplemented("buffer.resolveObjectURL");
        transcode = notImplemented("buffer.transcode");
        isUtf8 = notImplemented("buffer.isUtf8");
        isAscii = notImplemented("buffer.isAscii");
        btoa2 = global.btoa;
        atob2 = globalThis.atob;
    }
});

// node_modules/unenv/runtime/node/buffer/$cloudflare.mjs
var workerdBuffer, Buffer4, SlowBuffer2, constants3, kMaxLength2, kStringMaxLength, cloudflare_default4;
var init_cloudflare5 = __esm({
    "node_modules/unenv/runtime/node/buffer/$cloudflare.mjs"() {
        init_virtual_unenv_global_polyfill_process();
        init_virtual_unenv_global_polyfill_performance();
        init_virtual_unenv_global_polyfill_console();
        init_virtual_unenv_global_polyfill_set_immediate();
        init_virtual_unenv_global_polyfill_clear_immediate();
        init_buffer2();
        workerdBuffer = process.getBuiltinModule("node:buffer");
        ({ Buffer: Buffer4, SlowBuffer: SlowBuffer2, constants: constants3, kMaxLength: kMaxLength2, kStringMaxLength } = workerdBuffer);
        cloudflare_default4 = {
            /**
             * manually unroll unenv-polyfilled-symbols to make it tree-shakeable
             */
            Blob: Blob2,
            File,
            INSPECT_MAX_BYTES,
            atob: atob2,
            btoa: btoa2,
            isAscii,
            isUtf8,
            resolveObjectURL,
            transcode,
            /**
             * manually unroll workerd-polyfilled-symbols to make it tree-shakeable
             */
            Buffer: Buffer4,
            SlowBuffer: SlowBuffer2,
            constants: constants3,
            kMaxLength: kMaxLength2,
            kStringMaxLength
        };
    }
});

// node-built-in-modules:buffer
var require_buffer = __commonJS({
    "node-built-in-modules:buffer"(exports, module2) {
        init_virtual_unenv_global_polyfill_process();
        init_virtual_unenv_global_polyfill_performance();
        init_virtual_unenv_global_polyfill_console();
        init_virtual_unenv_global_polyfill_set_immediate();
        init_virtual_unenv_global_polyfill_clear_immediate();
        init_cloudflare5();
        module2.exports = cloudflare_default4;
    }
});

// src/_worker.src.js
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
import { connect } from "cloudflare:sockets";
var password = "auto";
var proxyIP = "";
var socks5Address = "";
var addresses = [
    //当sub为空时启用本地优选域名/优选IP，若不带端口号 TLS默认端口为443，#号后为备注别名
    /*
  'Join.my.Telegram.channel.CMLiussss.to.unlock.more.premium.nodes.cf.090227.xyz#加入我的频道t.me/CMLiussss解锁更多优选节点',
  'visa.cn:443',
  'www.visa.com:8443',
  'cis.visa.com:2053',
  'africa.visa.com:2083',
  'www.visa.com.sg:2087',
  'www.visaeurope.at:2096',
  'www.visa.com.mt:8443',
  'qa.visamiddleeast.com',
  'time.is',
  'www.wto.org:8443',
  'chatgpt.com:2087',
  'icook.hk',
  '104.17.0.0#IPv4',
  '[2606:4700::]#IPv6'
  */
];
var sub = "";
var subconverter = "SUBAPI.fxxk.dedyn.io";
var subconfig = "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_MultiMode.ini";
var subProtocol = "https";
var RproxyIP = "false";
var addressesapi = [];
var addressescsv = [];
var DLS = 8;
var FileName = "epeius";
var BotToken = "";
var ChatID = "";
var proxyhosts = [];
var proxyhostsURL = "https://raw.githubusercontent.com/cmliu/CFcdnVmess2sub/main/proxyhosts";
var go2Socks5s = [
    "*ttvnw.net"
];
var fakeUserID;
var fakeHostName;
var proxyIPs;
var socks5s;
var sha224Password;
var expire = 4102329600;
var regex = /^(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|\[.*\]):?(\d+)?#?(.*)?$/;
var parsedSocks5Address = {};
var enableSocks = false;
var httpsPorts = ["2053", "2083", "2087", "2096", "8443"];
var worker_src_default = {
    async fetch(request, env3, ctx) {
        try {
            const UA = request.headers.get("User-Agent") || "null";
            const userAgent = UA.toLowerCase();
            password = env3.PASSWORD || password;
            sha224Password = env3.SHA224 || env3.SHA224PASS || sha256.sha224(password);
            const currentDate = /* @__PURE__ */ new Date();
            currentDate.setHours(0, 0, 0, 0);
            const timestamp = Math.ceil(currentDate.getTime() / 1e3);
            const fakeUserIDMD5 = await MD5MD5(`${password}${timestamp}`);
            fakeUserID = fakeUserIDMD5.slice(0, 8) + "-" + fakeUserIDMD5.slice(8, 12) + "-" + fakeUserIDMD5.slice(12, 16) + "-" + fakeUserIDMD5.slice(16, 20) + "-" + fakeUserIDMD5.slice(20);
            fakeHostName = fakeUserIDMD5.slice(6, 9) + "." + fakeUserIDMD5.slice(13, 19);
            proxyIP = env3.PROXYIP || proxyIP;
            proxyIPs = await ADD(proxyIP);
            proxyIP = proxyIPs[Math.floor(Math.random() * proxyIPs.length)];
            socks5Address = env3.SOCKS5 || socks5Address;
            socks5s = await ADD(socks5Address);
            socks5Address = socks5s[Math.floor(Math.random() * socks5s.length)];
            socks5Address = socks5Address.split("//")[1] || socks5Address;
            if (env3.CFPORTS)
                httpsPorts = await ADD(env3.CFPORTS);
            sub = env3.SUB || sub;
            subconverter = env3.SUBAPI || subconverter;
            if (subconverter.includes("http://")) {
                subconverter = subconverter.split("//")[1];
                subProtocol = "http";
            } else {
                subconverter = subconverter.split("//")[1] || subconverter;
            }
            subconfig = env3.SUBCONFIG || subconfig;
            if (socks5Address) {
                try {
                    parsedSocks5Address = socks5AddressParser(socks5Address);
                    RproxyIP = env3.RPROXYIP || "false";
                    enableSocks = true;
                } catch (err) {
                    let e = err;
                    console.log(e.toString());
                    RproxyIP = env3.RPROXYIP || !proxyIP ? "true" : "false";
                    enableSocks = false;
                }
            } else {
                RproxyIP = env3.RPROXYIP || !proxyIP ? "true" : "false";
            }
            if (env3.ADD)
                addresses = await ADD(env3.ADD);
            if (env3.ADDAPI)
                addressesapi = await ADD(env3.ADDAPI);
            if (env3.ADDCSV)
                addressescsv = await ADD(env3.ADDCSV);
            DLS = env3.DLS || DLS;
            BotToken = env3.TGTOKEN || BotToken;
            ChatID = env3.TGID || ChatID;
            if (env3.GO2SOCKS5)
                go2Socks5s = await ADD(env3.GO2SOCKS5);
            const upgradeHeader = request.headers.get("Upgrade");
            const url = new URL(request.url);
            if (url.searchParams.has("sub") && url.searchParams.get("sub") !== "")
                sub = url.searchParams.get("sub");
            FileName = env3.SUBNAME || FileName;
            if (!upgradeHeader || upgradeHeader !== "websocket") {
                switch (url.pathname) {
                    case "/":
                        if (env3.URL302)
                            return Response.redirect(env3.URL302, 302);
                        else if (env3.URL)
                            return await proxyURL(env3.URL, url);
                        else
                            return new Response(JSON.stringify(request.cf, null, 4), {
                                status: 200,
                                headers: {
                                    "content-type": "application/json"
                                }
                            });
                    case `/${fakeUserID}`:
                        const fakeConfig = await getTrojanConfig(password, request.headers.get("Host"), sub, "CF-Workers-SUB", RproxyIP, url);
                        return new Response(`${fakeConfig}`, { status: 200 });
                    case `/${password}`:
                        await sendMessage(`#\u83B7\u53D6\u8BA2\u9605 ${FileName}`, request.headers.get("CF-Connecting-IP"), `UA: ${UA}</tg-spoiler>
\u57DF\u540D: ${url.hostname}
<tg-spoiler>\u5165\u53E3: ${url.pathname + url.search}</tg-spoiler>`);
                        const trojanConfig = await getTrojanConfig(password, request.headers.get("Host"), sub, UA, RproxyIP, url);
                        const now = Date.now();
                        const today = new Date(now);
                        today.setHours(0, 0, 0, 0);
                        const UD = Math.floor((now - today.getTime()) / 864e5 * 24 * 1099511627776 / 2);
                        let pagesSum = UD;
                        let workersSum = UD;
                        let total = 24 * 1099511627776;
                        if (env3.CFEMAIL && env3.CFKEY) {
                            const email = env3.CFEMAIL;
                            const key = env3.CFKEY;
                            const accountIndex = env3.CFID || 0;
                            const accountId = await getAccountId(email, key);
                            if (accountId) {
                                const now2 = /* @__PURE__ */ new Date();
                                now2.setUTCHours(0, 0, 0, 0);
                                const startDate = now2.toISOString();
                                const endDate = (/* @__PURE__ */ new Date()).toISOString();
                                const Sum = await getSum(accountId, accountIndex, email, key, startDate, endDate);
                                pagesSum = Sum[0];
                                workersSum = Sum[1];
                                total = 102400;
                            }
                        }
                        if (userAgent && (userAgent.includes("mozilla") || userAgent.includes("subconverter"))) {
                            return new Response(`${trojanConfig}`, {
                                status: 200,
                                headers: {
                                    "Content-Type": "text/plain;charset=utf-8",
                                    "Profile-Update-Interval": "6",
                                    "Subscription-Userinfo": `upload=${pagesSum}; download=${workersSum}; total=${total}; expire=${expire}`
                                }
                            });
                        } else {
                            return new Response(`${trojanConfig}`, {
                                status: 200,
                                headers: {
                                    "Content-Disposition": `attachment; filename=${FileName}; filename*=utf-8''${encodeURIComponent(FileName)}`,
                                    "Content-Type": "text/plain;charset=utf-8",
                                    "Profile-Update-Interval": "6",
                                    "Subscription-Userinfo": `upload=${pagesSum}; download=${workersSum}; total=${total}; expire=${expire}`
                                }
                            });
                        }
                    default:
                        if (env3.URL302)
                            return Response.redirect(env3.URL302, 302);
                        else if (env3.URL)
                            return await proxyURL(env3.URL, url);
                        else
                            return new Response("\u4E0D\u7528\u6000\u7591\uFF01\u4F60PASSWORD\u5C31\u662F\u9519\u7684\uFF01\uFF01\uFF01", { status: 404 });
                }
            } else {
                proxyIP = url.searchParams.get("proxyip") || proxyIP;
                if (new RegExp("/proxyip=", "i").test(url.pathname))
                    proxyIP = url.pathname.toLowerCase().split("/proxyip=")[1];
                else if (new RegExp("/proxyip.", "i").test(url.pathname))
                    proxyIP = `proxyip.${url.pathname.toLowerCase().split("/proxyip.")[1]}`;
                socks5Address = url.searchParams.get("socks5") || socks5Address;
                if (new RegExp("/socks5=", "i").test(url.pathname))
                    socks5Address = url.pathname.split("5=")[1];
                else if (new RegExp("/socks://", "i").test(url.pathname) || new RegExp("/socks5://", "i").test(url.pathname)) {
                    socks5Address = url.pathname.split("://")[1].split("#")[0];
                    if (socks5Address.includes("@")) {
                        let userPassword = socks5Address.split("@")[0];
                        const base64Regex = /^(?:[A-Z0-9+/]{4})*(?:[A-Z0-9+/]{2}==|[A-Z0-9+/]{3}=)?$/i;
                        if (base64Regex.test(userPassword) && !userPassword.includes(":"))
                            userPassword = atob(userPassword);
                        socks5Address = `${userPassword}@${socks5Address.split("@")[1]}`;
                    }
                }
                if (socks5Address) {
                    try {
                        parsedSocks5Address = socks5AddressParser(socks5Address);
                        enableSocks = true;
                    } catch (err) {
                        let e = err;
                        console.log(e.toString());
                        enableSocks = false;
                    }
                } else {
                    enableSocks = false;
                }
                return await trojanOverWSHandler(request);
            }
        } catch (err) {
            let e = err;
            return new Response(e.toString());
        }
    }
};
async function trojanOverWSHandler(request) {
    const webSocketPair = new WebSocketPair();
    const [client, webSocket] = Object.values(webSocketPair);
    webSocket.accept();
    let address = "";
    let portWithRandomLog = "";
    const log3 = /* @__PURE__ */ __name((info3, event) => {
        console.log(`[${address}:${portWithRandomLog}] ${info3}`, event || "");
    }, "log");
    const earlyDataHeader = request.headers.get("sec-websocket-protocol") || "";
    const readableWebSocketStream = makeReadableWebSocketStream(webSocket, earlyDataHeader, log3);
    let remoteSocketWapper = {
        value: null
    };
    let udpStreamWrite = null;
    readableWebSocketStream.pipeTo(new WritableStream({
        async write(chunk, controller) {
            if (udpStreamWrite) {
                return udpStreamWrite(chunk);
            }
            if (remoteSocketWapper.value) {
                const writer = remoteSocketWapper.value.writable.getWriter();
                await writer.write(chunk);
                writer.releaseLock();
                return;
            }
            const {
                hasError,
                message,
                portRemote = 443,
                addressRemote = "",
                rawClientData,
                addressType
            } = await parseTrojanHeader(chunk);
            address = addressRemote;
            portWithRandomLog = `${portRemote}--${Math.random()} tcp`;
            if (hasError) {
                throw new Error(message);
                return;
            }
            handleTCPOutBound(remoteSocketWapper, addressRemote, portRemote, rawClientData, webSocket, log3, addressType);
        },
        close() {
            log3(`readableWebSocketStream is closed`);
        },
        abort(reason) {
            log3(`readableWebSocketStream is aborted`, JSON.stringify(reason));
        }
    })).catch((err) => {
        log3("readableWebSocketStream pipeTo error", err);
    });
    return new Response(null, {
        status: 101,
        // @ts-ignore
        webSocket: client
    });
}
__name(trojanOverWSHandler, "trojanOverWSHandler");
async function parseTrojanHeader(buffer) {
    if (buffer.byteLength < 56) {
        return {
            hasError: true,
            message: "invalid data"
        };
    }
    let crLfIndex = 56;
    if (new Uint8Array(buffer.slice(56, 57))[0] !== 13 || new Uint8Array(buffer.slice(57, 58))[0] !== 10) {
        return {
            hasError: true,
            message: "invalid header format (missing CR LF)"
        };
    }
    const password2 = new TextDecoder().decode(buffer.slice(0, crLfIndex));
    if (password2 !== sha224Password) {
        return {
            hasError: true,
            message: "invalid password"
        };
    }
    const socks5DataBuffer = buffer.slice(crLfIndex + 2);
    if (socks5DataBuffer.byteLength < 6) {
        return {
            hasError: true,
            message: "invalid SOCKS5 request data"
        };
    }
    const view = new DataView(socks5DataBuffer);
    const cmd = view.getUint8(0);
    if (cmd !== 1) {
        return {
            hasError: true,
            message: "unsupported command, only TCP (CONNECT) is allowed"
        };
    }
    const atype = view.getUint8(1);
    let addressLength = 0;
    let addressIndex = 2;
    let address = "";
    switch (atype) {
        case 1:
            addressLength = 4;
            address = new Uint8Array(
                socks5DataBuffer.slice(addressIndex, addressIndex + addressLength)
            ).join(".");
            break;
        case 3:
            addressLength = new Uint8Array(
                socks5DataBuffer.slice(addressIndex, addressIndex + 1)
            )[0];
            addressIndex += 1;
            address = new TextDecoder().decode(
                socks5DataBuffer.slice(addressIndex, addressIndex + addressLength)
            );
            break;
        case 4:
            addressLength = 16;
            const dataView = new DataView(socks5DataBuffer.slice(addressIndex, addressIndex + addressLength));
            const ipv6 = [];
            for (let i = 0; i < 8; i++) {
                ipv6.push(dataView.getUint16(i * 2).toString(16));
            }
            address = ipv6.join(":");
            break;
        default:
            return {
                hasError: true,
                message: `invalid addressType is ${atype}`
            };
    }
    if (!address) {
        return {
            hasError: true,
            message: `address is empty, addressType is ${atype}`
        };
    }
    const portIndex = addressIndex + addressLength;
    const portBuffer = socks5DataBuffer.slice(portIndex, portIndex + 2);
    const portRemote = new DataView(portBuffer).getUint16(0);
    return {
        hasError: false,
        addressRemote: address,
        portRemote,
        rawClientData: socks5DataBuffer.slice(portIndex + 4),
        addressType: atype
    };
}
__name(parseTrojanHeader, "parseTrojanHeader");
async function handleTCPOutBound(remoteSocket, addressRemote, portRemote, rawClientData, webSocket, log3, addressType) {
    async function useSocks5Pattern(address) {
        if (go2Socks5s.includes(atob("YWxsIGlu")) || go2Socks5s.includes(atob("Kg==")))
            return true;
        return go2Socks5s.some((pattern) => {
            let regexPattern = pattern.replace(/\*/g, ".*");
            let regex2 = new RegExp(`^${regexPattern}$`, "i");
            return regex2.test(address);
        });
    }
    __name(useSocks5Pattern, "useSocks5Pattern");
    async function connectAndWrite(address, port, socks = false) {
        log3(`connected to ${address}:${port}`);
        const tcpSocket2 = socks ? await socks5Connect(addressType, address, port, log3) : connect({
            hostname: address,
            port
        });
        remoteSocket.value = tcpSocket2;
        const writer = tcpSocket2.writable.getWriter();
        await writer.write(rawClientData);
        writer.releaseLock();
        return tcpSocket2;
    }
    __name(connectAndWrite, "connectAndWrite");
    async function retry() {
        if (enableSocks) {
            tcpSocket = await connectAndWrite(addressRemote, portRemote, true);
        } else {
            if (!proxyIP || proxyIP == "") {
                proxyIP = atob("cHJveHlpcC5meHhrLmRlZHluLmlv");
            } else if (proxyIP.includes("]:")) {
                portRemote = proxyIP.split("]:")[1] || portRemote;
                proxyIP = proxyIP.split("]:")[0] || proxyIP;
            } else if (proxyIP.split(":").length === 2) {
                portRemote = proxyIP.split(":")[1] || portRemote;
                proxyIP = proxyIP.split(":")[0] || proxyIP;
            }
            tcpSocket = await connectAndWrite(proxyIP || addressRemote, portRemote);
        }
        tcpSocket.closed.catch((error3) => {
            console.log("retry tcpSocket closed error", error3);
        }).finally(() => {
            safeCloseWebSocket(webSocket);
        });
        remoteSocketToWS(tcpSocket, webSocket, null, log3);
    }
    __name(retry, "retry");
    let useSocks = false;
    if (go2Socks5s.length > 0 && enableSocks)
        useSocks = await useSocks5Pattern(addressRemote);
    let tcpSocket = await connectAndWrite(addressRemote, portRemote, useSocks);
    remoteSocketToWS(tcpSocket, webSocket, retry, log3);
}
__name(handleTCPOutBound, "handleTCPOutBound");
function makeReadableWebSocketStream(webSocketServer, earlyDataHeader, log3) {
    let readableStreamCancel = false;
    const stream = new ReadableStream({
        start(controller) {
            webSocketServer.addEventListener("message", (event) => {
                if (readableStreamCancel) {
                    return;
                }
                const message = event.data;
                controller.enqueue(message);
            });
            webSocketServer.addEventListener("close", () => {
                safeCloseWebSocket(webSocketServer);
                if (readableStreamCancel) {
                    return;
                }
                controller.close();
            });
            webSocketServer.addEventListener("error", (err) => {
                log3("webSocketServer error");
                controller.error(err);
            });
            const { earlyData, error: error3 } = base64ToArrayBuffer(earlyDataHeader);
            if (error3) {
                controller.error(error3);
            } else if (earlyData) {
                controller.enqueue(earlyData);
            }
        },
        pull(controller) {
        },
        cancel(reason) {
            if (readableStreamCancel) {
                return;
            }
            log3(`readableStream was canceled, due to ${reason}`);
            readableStreamCancel = true;
            safeCloseWebSocket(webSocketServer);
        }
    });
    return stream;
}
__name(makeReadableWebSocketStream, "makeReadableWebSocketStream");
async function remoteSocketToWS(remoteSocket, webSocket, retry, log3) {
    let hasIncomingData = false;
    await remoteSocket.readable.pipeTo(
        new WritableStream({
            start() {
            },
            /**
             *
             * @param {Uint8Array} chunk
             * @param {*} controller
             */
            async write(chunk, controller) {
                hasIncomingData = true;
                if (webSocket.readyState !== WS_READY_STATE_OPEN) {
                    controller.error(
                        "webSocket connection is not open"
                    );
                }
                webSocket.send(chunk);
            },
            close() {
                log3(`remoteSocket.readable is closed, hasIncomingData: ${hasIncomingData}`);
            },
            abort(reason) {
                console.error("remoteSocket.readable abort", reason);
            }
        })
    ).catch((error3) => {
        console.error(
            `remoteSocketToWS error:`,
            error3.stack || error3
        );
        safeCloseWebSocket(webSocket);
    });
    if (hasIncomingData === false && retry) {
        log3(`retry`);
        retry();
    }
}
__name(remoteSocketToWS, "remoteSocketToWS");
function base64ToArrayBuffer(base64Str) {
    if (!base64Str) {
        return { error: null };
    }
    try {
        base64Str = base64Str.replace(/-/g, "+").replace(/_/g, "/");
        const decode = atob(base64Str);
        const arryBuffer = Uint8Array.from(decode, (c) => c.charCodeAt(0));
        return { earlyData: arryBuffer.buffer, error: null };
    } catch (error3) {
        return { error: error3 };
    }
}
__name(base64ToArrayBuffer, "base64ToArrayBuffer");
var WS_READY_STATE_OPEN = 1;
var WS_READY_STATE_CLOSING = 2;
function safeCloseWebSocket(socket) {
    try {
        if (socket.readyState === WS_READY_STATE_OPEN || socket.readyState === WS_READY_STATE_CLOSING) {
            socket.close();
        }
    } catch (error3) {
        console.error("safeCloseWebSocket error", error3);
    }
}
__name(safeCloseWebSocket, "safeCloseWebSocket");
function revertFakeInfo(content, userID, hostName, isBase64) {
    if (isBase64)
        content = atob(content);
    content = content.replace(new RegExp(fakeUserID, "g"), userID).replace(new RegExp(fakeHostName, "g"), hostName);
    if (isBase64)
        content = btoa(content);
    return content;
}
__name(revertFakeInfo, "revertFakeInfo");
async function MD5MD5(text) {
    const encoder = new TextEncoder();
    const firstPass = await crypto.subtle.digest("MD5", encoder.encode(text));
    const firstPassArray = Array.from(new Uint8Array(firstPass));
    const firstHex = firstPassArray.map((b) => b.toString(16).padStart(2, "0")).join("");
    const secondPass = await crypto.subtle.digest("MD5", encoder.encode(firstHex.slice(7, 27)));
    const secondPassArray = Array.from(new Uint8Array(secondPass));
    const secondHex = secondPassArray.map((b) => b.toString(16).padStart(2, "0")).join("");
    return secondHex.toLowerCase();
}
__name(MD5MD5, "MD5MD5");
async function ADD(envadd) {
    var addtext = envadd.replace(/[	|"'\r\n]+/g, ",").replace(/,+/g, ",");
    if (addtext.charAt(0) == ",")
        addtext = addtext.slice(1);
    if (addtext.charAt(addtext.length - 1) == ",")
        addtext = addtext.slice(0, addtext.length - 1);
    const add = addtext.split(",");
    return add;
}
__name(ADD, "ADD");
async function proxyURL(proxyURL2, url) {
    const URLs = await ADD(proxyURL2);
    const fullURL = URLs[Math.floor(Math.random() * URLs.length)];
    let parsedURL = new URL(fullURL);
    console.log(parsedURL);
    let URLProtocol = parsedURL.protocol.slice(0, -1) || "https";
    let URLHostname = parsedURL.hostname;
    let URLPathname = parsedURL.pathname;
    let URLSearch = parsedURL.search;
    if (URLPathname.charAt(URLPathname.length - 1) == "/") {
        URLPathname = URLPathname.slice(0, -1);
    }
    URLPathname += url.pathname;
    let newURL = `${URLProtocol}://${URLHostname}${URLPathname}${URLSearch}`;
    let response = await fetch(newURL);
    let newResponse = new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: response.headers
    });
    newResponse.headers.set("X-New-URL", newURL);
    return newResponse;
}
__name(proxyURL, "proxyURL");
function checkSUB(host) {
    if ((!sub || sub == "") && addresses.length + addressesapi.length + addressescsv.length == 0) {
        addresses = [
            "Join.my.Telegram.channel.CMLiussss.to.unlock.more.premium.nodes.cf.090227.xyz#\u52A0\u5165\u6211\u7684\u9891\u9053t.me/CMLiussss\u89E3\u9501\u66F4\u591A\u4F18\u9009\u8282\u70B9",
            "visa.cn:443",
            "www.visa.com:8443",
            "cis.visa.com:2053",
            "africa.visa.com:2083",
            "www.visa.com.sg:2087",
            "www.visaeurope.at:2096",
            "www.visa.com.mt:8443",
            "qa.visamiddleeast.com",
            "time.is",
            "www.wto.org:8443",
            "chatgpt.com:2087",
            "icook.hk",
            //'104.17.0.0#IPv4',
            "[2606:4700::]#IPv6"
        ];
    }
}
__name(checkSUB, "checkSUB");
function \u914D\u7F6E\u4FE1\u606F(\u5BC6\u7801, \u57DF\u540D\u5730\u5740) {
    const \u5565\u5565\u5565_\u5199\u7684\u8FD9\u662F\u5565\u554A = "dHJvamFu";
    const \u534F\u8BAE\u7C7B\u578B = atob(\u5565\u5565\u5565_\u5199\u7684\u8FD9\u662F\u5565\u554A);
    const \u522B\u540D = FileName;
    let \u5730\u5740 = \u57DF\u540D\u5730\u5740;
    let \u7AEF\u53E3 = 443;
    const \u4F20\u8F93\u5C42\u534F\u8BAE = "ws";
    const \u4F2A\u88C5\u57DF\u540D = \u57DF\u540D\u5730\u5740;
    const \u8DEF\u5F84 = "/?ed=2560";
    let \u4F20\u8F93\u5C42\u5B89\u5168 = ["tls", true];
    const SNI = \u57DF\u540D\u5730\u5740;
    const \u6307\u7EB9 = "randomized";
    const v2ray = `${\u534F\u8BAE\u7C7B\u578B}://${encodeURIComponent(\u5BC6\u7801)}@${\u5730\u5740}:${\u7AEF\u53E3}?security=${\u4F20\u8F93\u5C42\u5B89\u5168[0]}&sni=${SNI}&alpn=h3&fp=${\u6307\u7EB9}&allowInsecure=1&type=${\u4F20\u8F93\u5C42\u534F\u8BAE}&host=${\u4F2A\u88C5\u57DF\u540D}&path=${encodeURIComponent(\u8DEF\u5F84)}#${encodeURIComponent(\u522B\u540D)}`;
    const clash = `- {name: ${\u522B\u540D}, server: ${\u5730\u5740}, port: ${\u7AEF\u53E3}, udp: false, client-fingerprint: ${\u6307\u7EB9}, type: ${\u534F\u8BAE\u7C7B\u578B}, password: ${\u5BC6\u7801}, sni: ${SNI}, alpn: [h3], skip-cert-verify: true, network: ${\u4F20\u8F93\u5C42\u534F\u8BAE}, ws-opts: {path: "${\u8DEF\u5F84}", headers: {Host: ${\u4F2A\u88C5\u57DF\u540D}}}}`;
    return [v2ray, clash];
}
__name(\u914D\u7F6E\u4FE1\u606F, "\u914D\u7F6E\u4FE1\u606F");
var subParams = ["sub", "base64", "b64", "clash", "singbox", "sb", "surge"];
async function getTrojanConfig(password2, hostName, sub2, UA, RproxyIP2, _url) {
    checkSUB(hostName);
    const userAgent = UA.toLowerCase();
    const Config = \u914D\u7F6E\u4FE1\u606F(password2, hostName);
    const v2ray = Config[0];
    const clash = Config[1];
    let proxyhost = "";
    if (hostName.includes(".workers.dev") || hostName.includes(".pages.dev")) {
        if (proxyhostsURL && (!proxyhosts || proxyhosts.length == 0)) {
            try {
                const response = await fetch(proxyhostsURL);
                if (!response.ok) {
                    console.error("\u83B7\u53D6\u5730\u5740\u65F6\u51FA\u9519:", response.status, response.statusText);
                    return;
                }
                const text = await response.text();
                const lines = text.split("\n");
                const nonEmptyLines = lines.filter((line) => line.trim() !== "");
                proxyhosts = proxyhosts.concat(nonEmptyLines);
            } catch (error3) {
            }
        }
        if (proxyhosts.length != 0)
            proxyhost = proxyhosts[Math.floor(Math.random() * proxyhosts.length)] + "/";
    }
    if (userAgent.includes("mozilla") && !subParams.some((_searchParams) => _url.searchParams.has(_searchParams))) {
        let surge2 = `Surge\u8BA2\u9605\u5730\u5740:
https://${proxyhost}${hostName}/${password2}?surge`;
        if (hostName.includes(".workers.dev") || hostName.includes(".pages.dev"))
            surge2 = "Surge\u8BA2\u9605\u5FC5\u987B\u7ED1\u5B9A\u81EA\u5B9A\u4E49\u57DF";
        const newSocks5s = socks5s.map((socks5Address2) => {
            if (socks5Address2.includes("@"))
                return socks5Address2.split("@")[1];
            else if (socks5Address2.includes("//"))
                return socks5Address2.split("//")[1];
            else
                return socks5Address2;
        });
        let socks5List = "";
        if (go2Socks5s.length > 0 && enableSocks) {
            socks5List = `${decodeURIComponent("SOCKS5%EF%BC%88%E7%99%BD%E5%90%8D%E5%8D%95%EF%BC%89%3A%20")}`;
            if (go2Socks5s.includes(atob("YWxsIGlu")) || go2Socks5s.includes(atob("Kg==")))
                socks5List += `${decodeURIComponent("%E6%89%80%E6%9C%89%E6%B5%81%E9%87%8F")}
`;
            else
                socks5List += `
  ${go2Socks5s.join("\n  ")}
`;
        }
        let \u8BA2\u9605\u5668 = "";
        if (!sub2 || sub2 == "") {
            if (enableSocks)
                \u8BA2\u9605\u5668 += `CFCDN\uFF08\u8BBF\u95EE\u65B9\u5F0F\uFF09: Socks5
  ${newSocks5s.join("\n  ")}
${socks5List}`;
            else if (proxyIP && proxyIP != "")
                \u8BA2\u9605\u5668 += `CFCDN\uFF08\u8BBF\u95EE\u65B9\u5F0F\uFF09: ProxyIP
  ${proxyIPs.join("\n  ")}
`;
            else
                \u8BA2\u9605\u5668 += `CFCDN\uFF08\u8BBF\u95EE\u65B9\u5F0F\uFF09: \u65E0\u6CD5\u8BBF\u95EE, \u9700\u8981\u60A8\u8BBE\u7F6E proxyIP/PROXYIP \uFF01\uFF01\uFF01
`;
            \u8BA2\u9605\u5668 += `
\u60A8\u7684\u8BA2\u9605\u5185\u5BB9\u7531 \u5185\u7F6E addresses/ADD* \u53C2\u6570\u53D8\u91CF\u63D0\u4F9B
`;
            if (addresses.length > 0)
                \u8BA2\u9605\u5668 += `ADD\uFF08TLS\u4F18\u9009\u57DF\u540D&IP\uFF09: 
  ${addresses.join("\n  ")}
`;
            if (addressesapi.length > 0)
                \u8BA2\u9605\u5668 += `ADDAPI\uFF08TLS\u4F18\u9009\u57DF\u540D&IP \u7684 API\uFF09: 
  ${addressesapi.join("\n  ")}
`;
            if (addressescsv.length > 0)
                \u8BA2\u9605\u5668 += `ADDCSV\uFF08IPTest\u6D4B\u901Fcsv\u6587\u4EF6 \u9650\u901F ${DLS} \uFF09: 
  ${addressescsv.join("\n  ")}
`;
        } else {
            if (enableSocks)
                \u8BA2\u9605\u5668 += `CFCDN\uFF08\u8BBF\u95EE\u65B9\u5F0F\uFF09: Socks5
  ${newSocks5s.join("\n  ")}
${socks5List}`;
            else if (proxyIP && proxyIP != "")
                \u8BA2\u9605\u5668 += `CFCDN\uFF08\u8BBF\u95EE\u65B9\u5F0F\uFF09: ProxyIP
  ${proxyIPs.join("\n  ")}
`;
            else if (RproxyIP2 == "true")
                \u8BA2\u9605\u5668 += `CFCDN\uFF08\u8BBF\u95EE\u65B9\u5F0F\uFF09: \u81EA\u52A8\u83B7\u53D6ProxyIP
`;
            else
                \u8BA2\u9605\u5668 += `CFCDN\uFF08\u8BBF\u95EE\u65B9\u5F0F\uFF09: \u65E0\u6CD5\u8BBF\u95EE, \u9700\u8981\u60A8\u8BBE\u7F6E proxyIP/PROXYIP \uFF01\uFF01\uFF01
`;
            \u8BA2\u9605\u5668 += `
SUB\uFF08\u4F18\u9009\u8BA2\u9605\u751F\u6210\u5668\uFF09: ${sub2}`;
        }
        return `
################################################################
Subscribe / sub \u8BA2\u9605\u5730\u5740, \u652F\u6301 Base64\u3001clash-meta\u3001sing-box \u8BA2\u9605\u683C\u5F0F
---------------------------------------------------------------
\u5FEB\u901F\u81EA\u9002\u5E94\u8BA2\u9605\u5730\u5740:
https://${proxyhost}${hostName}/${password2}
https://${proxyhost}${hostName}/${password2}?sub

Base64\u8BA2\u9605\u5730\u5740:
https://${proxyhost}${hostName}/${password2}?b64
https://${proxyhost}${hostName}/${password2}?base64

clash\u8BA2\u9605\u5730\u5740:
https://${proxyhost}${hostName}/${password2}?clash

singbox\u8BA2\u9605\u5730\u5740:
https://${proxyhost}${hostName}/${password2}?sb
https://${proxyhost}${hostName}/${password2}?singbox

${surge2}
---------------------------------------------------------------
################################################################
${FileName} \u914D\u7F6E\u4FE1\u606F
---------------------------------------------------------------
HOST: ${hostName}
PASSWORD: ${password2}
SHA224: ${sha224Password}
FAKEPASS: ${fakeUserID}
UA: ${UA}

${\u8BA2\u9605\u5668}
SUBAPI\uFF08\u8BA2\u9605\u8F6C\u6362\u540E\u7AEF\uFF09: ${subProtocol}://${subconverter}
SUBCONFIG\uFF08\u8BA2\u9605\u8F6C\u6362\u914D\u7F6E\u6587\u4EF6\uFF09: ${subconfig}
---------------------------------------------------------------
################################################################
v2ray
---------------------------------------------------------------
${v2ray}
---------------------------------------------------------------
################################################################
clash-meta
---------------------------------------------------------------
${clash}
---------------------------------------------------------------
################################################################
telegram \u4EA4\u6D41\u7FA4 \u6280\u672F\u5927\u4F6C~\u5728\u7EBF\u53D1\u724C!
https://t.me/CMLiussss
---------------------------------------------------------------
github \u9879\u76EE\u5730\u5740 Star!Star!Star!!!
https://github.com/cmliu/epeius
---------------------------------------------------------------
################################################################
`;
    } else {
        if (typeof fetch != "function") {
            return "Error: fetch is not available in this environment.";
        }
        if (hostName.includes(".workers.dev") || hostName.includes(".pages.dev")) {
            fakeHostName = `${fakeHostName}.workers.dev`;
        } else {
            fakeHostName = `${fakeHostName}.xyz`;
        }
        let url = `https://${sub2}/sub?host=${fakeHostName}&pw=${fakeUserID}&password=${fakeUserID}&epeius=cmliu&proxyip=${RproxyIP2}`;
        let isBase64 = true;
        let newAddressesapi = [];
        let newAddressescsv = [];
        if (!sub2 || sub2 == "") {
            if (hostName.includes("workers.dev") || hostName.includes("pages.dev")) {
                if (proxyhostsURL && (!proxyhosts || proxyhosts.length == 0)) {
                    try {
                        const response = await fetch(proxyhostsURL);
                        if (!response.ok) {
                            console.error("\u83B7\u53D6\u5730\u5740\u65F6\u51FA\u9519:", response.status, response.statusText);
                            return;
                        }
                        const text = await response.text();
                        const lines = text.split("\n");
                        const nonEmptyLines = lines.filter((line) => line.trim() !== "");
                        proxyhosts = proxyhosts.concat(nonEmptyLines);
                    } catch (error3) {
                        console.error("\u83B7\u53D6\u5730\u5740\u65F6\u51FA\u9519:", error3);
                    }
                }
                proxyhosts = [...new Set(proxyhosts)];
            }
            newAddressesapi = await getAddressesapi(addressesapi);
            newAddressescsv = await getAddressescsv("TRUE");
            url = `https://${hostName}/${fakeUserID}`;
        }
        if (!userAgent.includes("CF-Workers-SUB".toLowerCase())) {
            if (userAgent.includes("clash") && !userAgent.includes("nekobox") || _url.searchParams.has("clash")) {
                url = `${subProtocol}://${subconverter}/sub?target=clash&url=${encodeURIComponent(url)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
                isBase64 = false;
            } else if (userAgent.includes("sing-box") || userAgent.includes("singbox") || _url.searchParams.has("singbox") || _url.searchParams.has("sb")) {
                url = `${subProtocol}://${subconverter}/sub?target=singbox&url=${encodeURIComponent(url)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
                isBase64 = false;
            } else if (userAgent.includes("surge") || _url.searchParams.has("surge")) {
                url = `${subProtocol}://${subconverter}/sub?target=surge&ver=4&url=${encodeURIComponent(url)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&xudp=false&udp=false&tfo=false&expand=true&scv=true&fdn=false`;
                isBase64 = false;
            }
        }
        try {
            let content;
            if ((!sub2 || sub2 == "") && isBase64 == true) {
                content = await subAddresses(fakeHostName, fakeUserID, userAgent, newAddressesapi, newAddressescsv);
            } else {
                const response = await fetch(url, {
                    headers: {
                        "User-Agent": `CF-Workers-epeius/cmliu`
                    }
                });
                content = await response.text();
            }
            if (_url.pathname == `/${fakeUserID}`)
                return content;
            content = revertFakeInfo(content, password2, hostName, isBase64);
            if (userAgent.includes("surge") || _url.searchParams.has("surge"))
                content = surge(content, `https://${hostName}/${password2}?surge`);
            return content;
        } catch (error3) {
            console.error("Error fetching content:", error3);
            return `Error fetching content: ${error3.message}`;
        }
    }
}
__name(getTrojanConfig, "getTrojanConfig");
async function sendMessage(type, ip, add_data = "") {
    if (BotToken !== "" && ChatID !== "") {
        let msg = "";
        const response = await fetch(`http://ip-api.com/json/${ip}?lang=zh-CN`);
        if (response.status == 200) {
            const ipInfo = await response.json();
            msg = `${type}
IP: ${ip}
\u56FD\u5BB6: ${ipInfo.country}
<tg-spoiler>\u57CE\u5E02: ${ipInfo.city}
\u7EC4\u7EC7: ${ipInfo.org}
ASN: ${ipInfo.as}
${add_data}`;
        } else {
            msg = `${type}
IP: ${ip}
<tg-spoiler>${add_data}`;
        }
        let url = "https://api.telegram.org/bot" + BotToken + "/sendMessage?chat_id=" + ChatID + "&parse_mode=HTML&text=" + encodeURIComponent(msg);
        return fetch(url, {
            method: "get",
            headers: {
                "Accept": "text/html,application/xhtml+xml,application/xml;",
                "Accept-Encoding": "gzip, deflate, br",
                "User-Agent": "Mozilla/5.0 Chrome/90.0.4430.72"
            }
        });
    }
}
__name(sendMessage, "sendMessage");
var proxyIPPool = [];
function subAddresses(host, pw, userAgent, newAddressesapi, newAddressescsv) {
    addresses = addresses.concat(newAddressesapi);
    addresses = addresses.concat(newAddressescsv);
    const uniqueAddresses = [...new Set(addresses)];
    const responseBody = uniqueAddresses.map((address) => {
        let port = "-1";
        let addressid = address;
        const match = addressid.match(regex);
        if (!match) {
            if (address.includes(":") && address.includes("#")) {
                const parts = address.split(":");
                address = parts[0];
                const subParts = parts[1].split("#");
                port = subParts[0];
                addressid = subParts[1];
            } else if (address.includes(":")) {
                const parts = address.split(":");
                address = parts[0];
                port = parts[1];
            } else if (address.includes("#")) {
                const parts = address.split("#");
                address = parts[0];
                addressid = parts[1];
            }
            if (addressid.includes(":")) {
                addressid = addressid.split(":")[0];
            }
        } else {
            address = match[1];
            port = match[2] || port;
            addressid = match[3] || address;
        }
        const httpsPorts2 = ["2053", "2083", "2087", "2096", "8443"];
        if (!isValidIPv4(address) && port == "-1") {
            for (let httpsPort of httpsPorts2) {
                if (address.includes(httpsPort)) {
                    port = httpsPort;
                    break;
                }
            }
        }
        if (port == "-1")
            port = "443";
        let \u4F2A\u88C5\u57DF\u540D = host;
        let \u6700\u7EC8\u8DEF\u5F84 = "/?ed=2560";
        let \u8282\u70B9\u5907\u6CE8 = "";
        if (proxyhosts.length > 0 && (\u4F2A\u88C5\u57DF\u540D.includes(".workers.dev") || \u4F2A\u88C5\u57DF\u540D.includes("pages.dev"))) {
            \u6700\u7EC8\u8DEF\u5F84 = `/${\u4F2A\u88C5\u57DF\u540D}${\u6700\u7EC8\u8DEF\u5F84}`;
            \u4F2A\u88C5\u57DF\u540D = proxyhosts[Math.floor(Math.random() * proxyhosts.length)];
            \u8282\u70B9\u5907\u6CE8 = ` \u5DF2\u542F\u7528\u4E34\u65F6\u57DF\u540D\u4E2D\u8F6C\u670D\u52A1\uFF0C\u8BF7\u5C3D\u5FEB\u7ED1\u5B9A\u81EA\u5B9A\u4E49\u57DF\uFF01`;
        }
        const matchingProxyIP = proxyIPPool.find((proxyIP2) => proxyIP2.includes(address));
        if (matchingProxyIP)
            \u6700\u7EC8\u8DEF\u5F84 += `&proxyip=${matchingProxyIP}`;
        let \u5BC6\u7801 = pw;
        if (!userAgent.includes("subconverter"))
            \u5BC6\u7801 = encodeURIComponent(pw);
        const \u5565\u5565\u5565_\u5199\u7684\u8FD9\u662F\u5565\u554A = "dHJvamFu";
        const \u534F\u8BAE\u7C7B\u578B = atob(\u5565\u5565\u5565_\u5199\u7684\u8FD9\u662F\u5565\u554A);
        const trojanLink = `${\u534F\u8BAE\u7C7B\u578B}://${\u5BC6\u7801}@${address}:${port}?security=tls&sni=${\u4F2A\u88C5\u57DF\u540D}&fp=randomized&type=ws&host=${\u4F2A\u88C5\u57DF\u540D}&path=${encodeURIComponent(\u6700\u7EC8\u8DEF\u5F84)}#${encodeURIComponent(addressid + \u8282\u70B9\u5907\u6CE8)}`;
        return trojanLink;
    }).join("\n");
    const base64Response = btoa(responseBody);
    return base64Response;
}
__name(subAddresses, "subAddresses");
async function getAddressesapi(api) {
    if (!api || api.length === 0)
        return [];
    let newapi = "";
    const controller = new AbortController();
    const timeout = setTimeout(() => {
        controller.abort();
    }, 2e3);
    try {
        const responses = await Promise.allSettled(api.map((apiUrl) => fetch(apiUrl, {
            method: "get",
            headers: {
                "Accept": "text/html,application/xhtml+xml,application/xml;",
                "User-Agent": "CF-Workers-epeius/cmliu"
            },
            signal: controller.signal
            // 将AbortController的信号量添加到fetch请求中，以便于需要时可以取消请求
        }).then((response) => response.ok ? response.text() : Promise.reject())));
        for (const [index, response] of responses.entries()) {
            if (response.status === "fulfilled") {
                const content = await response.value;
                if (api[index].includes("proxyip=true")) {
                    proxyIPPool = proxyIPPool.concat((await ADD(content)).map((item) => {
                        const baseItem = item.split("#")[0] || item;
                        if (baseItem.includes(":")) {
                            const port = baseItem.split(":")[1];
                            if (!httpsPorts.includes(port)) {
                                return baseItem;
                            }
                        } else {
                            return `${baseItem}:443`;
                        }
                        return null;
                    }).filter(Boolean));
                }
                newapi += content + "\n";
            }
        }
    } catch (error3) {
        console.error(error3);
    } finally {
        clearTimeout(timeout);
    }
    const newAddressesapi = await ADD(newapi);
    return newAddressesapi;
}
__name(getAddressesapi, "getAddressesapi");
async function getAddressescsv(tls) {
    if (!addressescsv || addressescsv.length === 0) {
        return [];
    }
    let newAddressescsv = [];
    for (const csvUrl of addressescsv) {
        try {
            const response = await fetch(csvUrl);
            if (!response.ok) {
                console.error("\u83B7\u53D6CSV\u5730\u5740\u65F6\u51FA\u9519:", response.status, response.statusText);
                continue;
            }
            const text = await response.text();
            let lines;
            if (text.includes("\r\n")) {
                lines = text.split("\r\n");
            } else {
                lines = text.split("\n");
            }
            const header = lines[0].split(",");
            const tlsIndex = header.indexOf("TLS");
            const ipAddressIndex = 0;
            const portIndex = 1;
            const dataCenterIndex = tlsIndex + 1;
            if (tlsIndex === -1) {
                console.error("CSV\u6587\u4EF6\u7F3A\u5C11\u5FC5\u9700\u7684\u5B57\u6BB5");
                continue;
            }
            for (let i = 1; i < lines.length; i++) {
                const columns = lines[i].split(",");
                const speedIndex = columns.length - 1;
                if (columns[tlsIndex].toUpperCase() === tls && parseFloat(columns[speedIndex]) > DLS) {
                    const ipAddress = columns[ipAddressIndex];
                    const port = columns[portIndex];
                    const dataCenter = columns[dataCenterIndex];
                    const formattedAddress = `${ipAddress}:${port}#${dataCenter}`;
                    newAddressescsv.push(formattedAddress);
                    if (csvUrl.includes("proxyip=true") && columns[tlsIndex].toUpperCase() == "true" && !httpsPorts.includes(port)) {
                        proxyIPPool.push(`${ipAddress}:${port}`);
                    }
                }
            }
        } catch (error3) {
            console.error("\u83B7\u53D6CSV\u5730\u5740\u65F6\u51FA\u9519:", error3);
            continue;
        }
    }
    return newAddressescsv;
}
__name(getAddressescsv, "getAddressescsv");
function surge(content, url) {
    let \u6BCF\u884C\u5185\u5BB9;
    if (content.includes("\r\n")) {
        \u6BCF\u884C\u5185\u5BB9 = content.split("\r\n");
    } else {
        \u6BCF\u884C\u5185\u5BB9 = content.split("\n");
    }
    let \u8F93\u51FA\u5185\u5BB9 = "";
    for (let x of \u6BCF\u884C\u5185\u5BB9) {
        if (x.includes("= trojan,")) {
            const host = x.split("sni=")[1].split(",")[0];
            const \u5907\u6539\u5185\u5BB9 = `skip-cert-verify=true, tfo=false, udp-relay=false`;
            const \u6B63\u786E\u5185\u5BB9 = `skip-cert-verify=true, ws=true, ws-path=/?ed=2560, ws-headers=Host:"${host}", tfo=false, udp-relay=false`;
            \u8F93\u51FA\u5185\u5BB9 += x.replace(new RegExp(\u5907\u6539\u5185\u5BB9, "g"), \u6B63\u786E\u5185\u5BB9).replace("[", "").replace("]", "") + "\n";
        } else {
            \u8F93\u51FA\u5185\u5BB9 += x + "\n";
        }
    }
    \u8F93\u51FA\u5185\u5BB9 = `#!MANAGED-CONFIG ${url} interval=86400 strict=false` + \u8F93\u51FA\u5185\u5BB9.substring(\u8F93\u51FA\u5185\u5BB9.indexOf("\n"));
    return \u8F93\u51FA\u5185\u5BB9;
}
__name(surge, "surge");
(function() {
    "use strict";
    var ERROR = "input is invalid type";
    var WINDOW = typeof window === "object";
    var root = WINDOW ? window : {};
    if (root.JS_SHA256_NO_WINDOW) {
        WINDOW = false;
    }
    var WEB_WORKER = !WINDOW && typeof self === "object";
    var NODE_JS = !root.JS_SHA256_NO_NODE_JS && typeof process === "object" && process.versions && process.versions.node;
    if (NODE_JS) {
        root = global;
    } else if (WEB_WORKER) {
        root = self;
    }
    var COMMON_JS = !root.JS_SHA256_NO_COMMON_JS && typeof module === "object" && module.exports;
    var AMD = typeof define === "function" && define.amd;
    var ARRAY_BUFFER = !root.JS_SHA256_NO_ARRAY_BUFFER && typeof ArrayBuffer !== "undefined";
    var HEX_CHARS = "0123456789abcdef".split("");
    var EXTRA = [-2147483648, 8388608, 32768, 128];
    var SHIFT = [24, 16, 8, 0];
    var K = [
        1116352408,
        1899447441,
        3049323471,
        3921009573,
        961987163,
        1508970993,
        2453635748,
        2870763221,
        3624381080,
        310598401,
        607225278,
        1426881987,
        1925078388,
        2162078206,
        2614888103,
        3248222580,
        3835390401,
        4022224774,
        264347078,
        604807628,
        770255983,
        1249150122,
        1555081692,
        1996064986,
        2554220882,
        2821834349,
        2952996808,
        3210313671,
        3336571891,
        3584528711,
        113926993,
        338241895,
        666307205,
        773529912,
        1294757372,
        1396182291,
        1695183700,
        1986661051,
        2177026350,
        2456956037,
        2730485921,
        2820302411,
        3259730800,
        3345764771,
        3516065817,
        3600352804,
        4094571909,
        275423344,
        430227734,
        506948616,
        659060556,
        883997877,
        958139571,
        1322822218,
        1537002063,
        1747873779,
        1955562222,
        2024104815,
        2227730452,
        2361852424,
        2428436474,
        2756734187,
        3204031479,
        3329325298
    ];
    var OUTPUT_TYPES = ["hex", "array", "digest", "arrayBuffer"];
    var blocks = [];
    if (root.JS_SHA256_NO_NODE_JS || !Array.isArray) {
        Array.isArray = function(obj) {
            return Object.prototype.toString.call(obj) === "[object Array]";
        };
    }
    if (ARRAY_BUFFER && (root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
        ArrayBuffer.isView = function(obj) {
            return typeof obj === "object" && obj.buffer && obj.buffer.constructor === ArrayBuffer;
        };
    }
    var createOutputMethod = /* @__PURE__ */ __name(function(outputType, is224) {
        return function(message) {
            return new Sha256(is224, true).update(message)[outputType]();
        };
    }, "createOutputMethod");
    var createMethod = /* @__PURE__ */ __name(function(is224) {
        var method = createOutputMethod("hex", is224);
        if (NODE_JS) {
            method = nodeWrap(method, is224);
        }
        method.create = function() {
            return new Sha256(is224);
        };
        method.update = function(message) {
            return method.create().update(message);
        };
        for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
            var type = OUTPUT_TYPES[i];
            method[type] = createOutputMethod(type, is224);
        }
        return method;
    }, "createMethod");
    var nodeWrap = /* @__PURE__ */ __name(function(method, is224) {
        var crypto2 = require_crypto();
        var Buffer5 = require_buffer().Buffer;
        var algorithm = is224 ? "sha224" : "sha256";
        var bufferFrom;
        if (Buffer5.from && !root.JS_SHA256_NO_BUFFER_FROM) {
            bufferFrom = Buffer5.from;
        } else {
            bufferFrom = /* @__PURE__ */ __name(function(message) {
                return new Buffer5(message);
            }, "bufferFrom");
        }
        var nodeMethod = /* @__PURE__ */ __name(function(message) {
            if (typeof message === "string") {
                return crypto2.createHash(algorithm).update(message, "utf8").digest("hex");
            } else {
                if (message === null || message === void 0) {
                    throw new Error(ERROR);
                } else if (message.constructor === ArrayBuffer) {
                    message = new Uint8Array(message);
                }
            }
            if (Array.isArray(message) || ArrayBuffer.isView(message) || message.constructor === Buffer5) {
                return crypto2.createHash(algorithm).update(bufferFrom(message)).digest("hex");
            } else {
                return method(message);
            }
        }, "nodeMethod");
        return nodeMethod;
    }, "nodeWrap");
    var createHmacOutputMethod = /* @__PURE__ */ __name(function(outputType, is224) {
        return function(key, message) {
            return new HmacSha256(key, is224, true).update(message)[outputType]();
        };
    }, "createHmacOutputMethod");
    var createHmacMethod = /* @__PURE__ */ __name(function(is224) {
        var method = createHmacOutputMethod("hex", is224);
        method.create = function(key) {
            return new HmacSha256(key, is224);
        };
        method.update = function(key, message) {
            return method.create(key).update(message);
        };
        for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
            var type = OUTPUT_TYPES[i];
            method[type] = createHmacOutputMethod(type, is224);
        }
        return method;
    }, "createHmacMethod");
    function Sha256(is224, sharedMemory) {
        if (sharedMemory) {
            blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
            this.blocks = blocks;
        } else {
            this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        }
        if (is224) {
            this.h0 = 3238371032;
            this.h1 = 914150663;
            this.h2 = 812702999;
            this.h3 = 4144912697;
            this.h4 = 4290775857;
            this.h5 = 1750603025;
            this.h6 = 1694076839;
            this.h7 = 3204075428;
        } else {
            this.h0 = 1779033703;
            this.h1 = 3144134277;
            this.h2 = 1013904242;
            this.h3 = 2773480762;
            this.h4 = 1359893119;
            this.h5 = 2600822924;
            this.h6 = 528734635;
            this.h7 = 1541459225;
        }
        this.block = this.start = this.bytes = this.hBytes = 0;
        this.finalized = this.hashed = false;
        this.first = true;
        this.is224 = is224;
    }
    __name(Sha256, "Sha256");
    Sha256.prototype.update = function(message) {
        if (this.finalized) {
            return;
        }
        var notString, type = typeof message;
        if (type !== "string") {
            if (type === "object") {
                if (message === null) {
                    throw new Error(ERROR);
                } else if (ARRAY_BUFFER && message.constructor === ArrayBuffer) {
                    message = new Uint8Array(message);
                } else if (!Array.isArray(message)) {
                    if (!ARRAY_BUFFER || !ArrayBuffer.isView(message)) {
                        throw new Error(ERROR);
                    }
                }
            } else {
                throw new Error(ERROR);
            }
            notString = true;
        }
        var code2, index = 0, i, length = message.length, blocks2 = this.blocks;
        while (index < length) {
            if (this.hashed) {
                this.hashed = false;
                blocks2[0] = this.block;
                this.block = blocks2[16] = blocks2[1] = blocks2[2] = blocks2[3] = blocks2[4] = blocks2[5] = blocks2[6] = blocks2[7] = blocks2[8] = blocks2[9] = blocks2[10] = blocks2[11] = blocks2[12] = blocks2[13] = blocks2[14] = blocks2[15] = 0;
            }
            if (notString) {
                for (i = this.start; index < length && i < 64; ++index) {
                    blocks2[i >>> 2] |= message[index] << SHIFT[i++ & 3];
                }
            } else {
                for (i = this.start; index < length && i < 64; ++index) {
                    code2 = message.charCodeAt(index);
                    if (code2 < 128) {
                        blocks2[i >>> 2] |= code2 << SHIFT[i++ & 3];
                    } else if (code2 < 2048) {
                        blocks2[i >>> 2] |= (192 | code2 >>> 6) << SHIFT[i++ & 3];
                        blocks2[i >>> 2] |= (128 | code2 & 63) << SHIFT[i++ & 3];
                    } else if (code2 < 55296 || code2 >= 57344) {
                        blocks2[i >>> 2] |= (224 | code2 >>> 12) << SHIFT[i++ & 3];
                        blocks2[i >>> 2] |= (128 | code2 >>> 6 & 63) << SHIFT[i++ & 3];
                        blocks2[i >>> 2] |= (128 | code2 & 63) << SHIFT[i++ & 3];
                    } else {
                        code2 = 65536 + ((code2 & 1023) << 10 | message.charCodeAt(++index) & 1023);
                        blocks2[i >>> 2] |= (240 | code2 >>> 18) << SHIFT[i++ & 3];
                        blocks2[i >>> 2] |= (128 | code2 >>> 12 & 63) << SHIFT[i++ & 3];
                        blocks2[i >>> 2] |= (128 | code2 >>> 6 & 63) << SHIFT[i++ & 3];
                        blocks2[i >>> 2] |= (128 | code2 & 63) << SHIFT[i++ & 3];
                    }
                }
            }
            this.lastByteIndex = i;
            this.bytes += i - this.start;
            if (i >= 64) {
                this.block = blocks2[16];
                this.start = i - 64;
                this.hash();
                this.hashed = true;
            } else {
                this.start = i;
            }
        }
        if (this.bytes > 4294967295) {
            this.hBytes += this.bytes / 4294967296 << 0;
            this.bytes = this.bytes % 4294967296;
        }
        return this;
    };
    Sha256.prototype.finalize = function() {
        if (this.finalized) {
            return;
        }
        this.finalized = true;
        var blocks2 = this.blocks, i = this.lastByteIndex;
        blocks2[16] = this.block;
        blocks2[i >>> 2] |= EXTRA[i & 3];
        this.block = blocks2[16];
        if (i >= 56) {
            if (!this.hashed) {
                this.hash();
            }
            blocks2[0] = this.block;
            blocks2[16] = blocks2[1] = blocks2[2] = blocks2[3] = blocks2[4] = blocks2[5] = blocks2[6] = blocks2[7] = blocks2[8] = blocks2[9] = blocks2[10] = blocks2[11] = blocks2[12] = blocks2[13] = blocks2[14] = blocks2[15] = 0;
        }
        blocks2[14] = this.hBytes << 3 | this.bytes >>> 29;
        blocks2[15] = this.bytes << 3;
        this.hash();
    };
    Sha256.prototype.hash = function() {
        var a = this.h0, b = this.h1, c = this.h2, d = this.h3, e = this.h4, f = this.h5, g = this.h6, h = this.h7, blocks2 = this.blocks, j, s0, s1, maj, t1, t2, ch, ab, da, cd, bc;
        for (j = 16; j < 64; ++j) {
            t1 = blocks2[j - 15];
            s0 = (t1 >>> 7 | t1 << 25) ^ (t1 >>> 18 | t1 << 14) ^ t1 >>> 3;
            t1 = blocks2[j - 2];
            s1 = (t1 >>> 17 | t1 << 15) ^ (t1 >>> 19 | t1 << 13) ^ t1 >>> 10;
            blocks2[j] = blocks2[j - 16] + s0 + blocks2[j - 7] + s1 << 0;
        }
        bc = b & c;
        for (j = 0; j < 64; j += 4) {
            if (this.first) {
                if (this.is224) {
                    ab = 300032;
                    t1 = blocks2[0] - 1413257819;
                    h = t1 - 150054599 << 0;
                    d = t1 + 24177077 << 0;
                } else {
                    ab = 704751109;
                    t1 = blocks2[0] - 210244248;
                    h = t1 - 1521486534 << 0;
                    d = t1 + 143694565 << 0;
                }
                this.first = false;
            } else {
                s0 = (a >>> 2 | a << 30) ^ (a >>> 13 | a << 19) ^ (a >>> 22 | a << 10);
                s1 = (e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7);
                ab = a & b;
                maj = ab ^ a & c ^ bc;
                ch = e & f ^ ~e & g;
                t1 = h + s1 + ch + K[j] + blocks2[j];
                t2 = s0 + maj;
                h = d + t1 << 0;
                d = t1 + t2 << 0;
            }
            s0 = (d >>> 2 | d << 30) ^ (d >>> 13 | d << 19) ^ (d >>> 22 | d << 10);
            s1 = (h >>> 6 | h << 26) ^ (h >>> 11 | h << 21) ^ (h >>> 25 | h << 7);
            da = d & a;
            maj = da ^ d & b ^ ab;
            ch = h & e ^ ~h & f;
            t1 = g + s1 + ch + K[j + 1] + blocks2[j + 1];
            t2 = s0 + maj;
            g = c + t1 << 0;
            c = t1 + t2 << 0;
            s0 = (c >>> 2 | c << 30) ^ (c >>> 13 | c << 19) ^ (c >>> 22 | c << 10);
            s1 = (g >>> 6 | g << 26) ^ (g >>> 11 | g << 21) ^ (g >>> 25 | g << 7);
            cd = c & d;
            maj = cd ^ c & a ^ da;
            ch = g & h ^ ~g & e;
            t1 = f + s1 + ch + K[j + 2] + blocks2[j + 2];
            t2 = s0 + maj;
            f = b + t1 << 0;
            b = t1 + t2 << 0;
            s0 = (b >>> 2 | b << 30) ^ (b >>> 13 | b << 19) ^ (b >>> 22 | b << 10);
            s1 = (f >>> 6 | f << 26) ^ (f >>> 11 | f << 21) ^ (f >>> 25 | f << 7);
            bc = b & c;
            maj = bc ^ b & d ^ cd;
            ch = f & g ^ ~f & h;
            t1 = e + s1 + ch + K[j + 3] + blocks2[j + 3];
            t2 = s0 + maj;
            e = a + t1 << 0;
            a = t1 + t2 << 0;
            this.chromeBugWorkAround = true;
        }
        this.h0 = this.h0 + a << 0;
        this.h1 = this.h1 + b << 0;
        this.h2 = this.h2 + c << 0;
        this.h3 = this.h3 + d << 0;
        this.h4 = this.h4 + e << 0;
        this.h5 = this.h5 + f << 0;
        this.h6 = this.h6 + g << 0;
        this.h7 = this.h7 + h << 0;
    };
    Sha256.prototype.hex = function() {
        this.finalize();
        var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3, h4 = this.h4, h5 = this.h5, h6 = this.h6, h7 = this.h7;
        var hex = HEX_CHARS[h0 >>> 28 & 15] + HEX_CHARS[h0 >>> 24 & 15] + HEX_CHARS[h0 >>> 20 & 15] + HEX_CHARS[h0 >>> 16 & 15] + HEX_CHARS[h0 >>> 12 & 15] + HEX_CHARS[h0 >>> 8 & 15] + HEX_CHARS[h0 >>> 4 & 15] + HEX_CHARS[h0 & 15] + HEX_CHARS[h1 >>> 28 & 15] + HEX_CHARS[h1 >>> 24 & 15] + HEX_CHARS[h1 >>> 20 & 15] + HEX_CHARS[h1 >>> 16 & 15] + HEX_CHARS[h1 >>> 12 & 15] + HEX_CHARS[h1 >>> 8 & 15] + HEX_CHARS[h1 >>> 4 & 15] + HEX_CHARS[h1 & 15] + HEX_CHARS[h2 >>> 28 & 15] + HEX_CHARS[h2 >>> 24 & 15] + HEX_CHARS[h2 >>> 20 & 15] + HEX_CHARS[h2 >>> 16 & 15] + HEX_CHARS[h2 >>> 12 & 15] + HEX_CHARS[h2 >>> 8 & 15] + HEX_CHARS[h2 >>> 4 & 15] + HEX_CHARS[h2 & 15] + HEX_CHARS[h3 >>> 28 & 15] + HEX_CHARS[h3 >>> 24 & 15] + HEX_CHARS[h3 >>> 20 & 15] + HEX_CHARS[h3 >>> 16 & 15] + HEX_CHARS[h3 >>> 12 & 15] + HEX_CHARS[h3 >>> 8 & 15] + HEX_CHARS[h3 >>> 4 & 15] + HEX_CHARS[h3 & 15] + HEX_CHARS[h4 >>> 28 & 15] + HEX_CHARS[h4 >>> 24 & 15] + HEX_CHARS[h4 >>> 20 & 15] + HEX_CHARS[h4 >>> 16 & 15] + HEX_CHARS[h4 >>> 12 & 15] + HEX_CHARS[h4 >>> 8 & 15] + HEX_CHARS[h4 >>> 4 & 15] + HEX_CHARS[h4 & 15] + HEX_CHARS[h5 >>> 28 & 15] + HEX_CHARS[h5 >>> 24 & 15] + HEX_CHARS[h5 >>> 20 & 15] + HEX_CHARS[h5 >>> 16 & 15] + HEX_CHARS[h5 >>> 12 & 15] + HEX_CHARS[h5 >>> 8 & 15] + HEX_CHARS[h5 >>> 4 & 15] + HEX_CHARS[h5 & 15] + HEX_CHARS[h6 >>> 28 & 15] + HEX_CHARS[h6 >>> 24 & 15] + HEX_CHARS[h6 >>> 20 & 15] + HEX_CHARS[h6 >>> 16 & 15] + HEX_CHARS[h6 >>> 12 & 15] + HEX_CHARS[h6 >>> 8 & 15] + HEX_CHARS[h6 >>> 4 & 15] + HEX_CHARS[h6 & 15];
        if (!this.is224) {
            hex += HEX_CHARS[h7 >>> 28 & 15] + HEX_CHARS[h7 >>> 24 & 15] + HEX_CHARS[h7 >>> 20 & 15] + HEX_CHARS[h7 >>> 16 & 15] + HEX_CHARS[h7 >>> 12 & 15] + HEX_CHARS[h7 >>> 8 & 15] + HEX_CHARS[h7 >>> 4 & 15] + HEX_CHARS[h7 & 15];
        }
        return hex;
    };
    Sha256.prototype.toString = Sha256.prototype.hex;
    Sha256.prototype.digest = function() {
        this.finalize();
        var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3, h4 = this.h4, h5 = this.h5, h6 = this.h6, h7 = this.h7;
        var arr = [
            h0 >>> 24 & 255,
            h0 >>> 16 & 255,
            h0 >>> 8 & 255,
            h0 & 255,
            h1 >>> 24 & 255,
            h1 >>> 16 & 255,
            h1 >>> 8 & 255,
            h1 & 255,
            h2 >>> 24 & 255,
            h2 >>> 16 & 255,
            h2 >>> 8 & 255,
            h2 & 255,
            h3 >>> 24 & 255,
            h3 >>> 16 & 255,
            h3 >>> 8 & 255,
            h3 & 255,
            h4 >>> 24 & 255,
            h4 >>> 16 & 255,
            h4 >>> 8 & 255,
            h4 & 255,
            h5 >>> 24 & 255,
            h5 >>> 16 & 255,
            h5 >>> 8 & 255,
            h5 & 255,
            h6 >>> 24 & 255,
            h6 >>> 16 & 255,
            h6 >>> 8 & 255,
            h6 & 255
        ];
        if (!this.is224) {
            arr.push(h7 >>> 24 & 255, h7 >>> 16 & 255, h7 >>> 8 & 255, h7 & 255);
        }
        return arr;
    };
    Sha256.prototype.array = Sha256.prototype.digest;
    Sha256.prototype.arrayBuffer = function() {
        this.finalize();
        var buffer = new ArrayBuffer(this.is224 ? 28 : 32);
        var dataView = new DataView(buffer);
        dataView.setUint32(0, this.h0);
        dataView.setUint32(4, this.h1);
        dataView.setUint32(8, this.h2);
        dataView.setUint32(12, this.h3);
        dataView.setUint32(16, this.h4);
        dataView.setUint32(20, this.h5);
        dataView.setUint32(24, this.h6);
        if (!this.is224) {
            dataView.setUint32(28, this.h7);
        }
        return buffer;
    };
    function HmacSha256(key, is224, sharedMemory) {
        var i, type = typeof key;
        if (type === "string") {
            var bytes = [], length = key.length, index = 0, code2;
            for (i = 0; i < length; ++i) {
                code2 = key.charCodeAt(i);
                if (code2 < 128) {
                    bytes[index++] = code2;
                } else if (code2 < 2048) {
                    bytes[index++] = 192 | code2 >>> 6;
                    bytes[index++] = 128 | code2 & 63;
                } else if (code2 < 55296 || code2 >= 57344) {
                    bytes[index++] = 224 | code2 >>> 12;
                    bytes[index++] = 128 | code2 >>> 6 & 63;
                    bytes[index++] = 128 | code2 & 63;
                } else {
                    code2 = 65536 + ((code2 & 1023) << 10 | key.charCodeAt(++i) & 1023);
                    bytes[index++] = 240 | code2 >>> 18;
                    bytes[index++] = 128 | code2 >>> 12 & 63;
                    bytes[index++] = 128 | code2 >>> 6 & 63;
                    bytes[index++] = 128 | code2 & 63;
                }
            }
            key = bytes;
        } else {
            if (type === "object") {
                if (key === null) {
                    throw new Error(ERROR);
                } else if (ARRAY_BUFFER && key.constructor === ArrayBuffer) {
                    key = new Uint8Array(key);
                } else if (!Array.isArray(key)) {
                    if (!ARRAY_BUFFER || !ArrayBuffer.isView(key)) {
                        throw new Error(ERROR);
                    }
                }
            } else {
                throw new Error(ERROR);
            }
        }
        if (key.length > 64) {
            key = new Sha256(is224, true).update(key).array();
        }
        var oKeyPad = [], iKeyPad = [];
        for (i = 0; i < 64; ++i) {
            var b = key[i] || 0;
            oKeyPad[i] = 92 ^ b;
            iKeyPad[i] = 54 ^ b;
        }
        Sha256.call(this, is224, sharedMemory);
        this.update(iKeyPad);
        this.oKeyPad = oKeyPad;
        this.inner = true;
        this.sharedMemory = sharedMemory;
    }
    __name(HmacSha256, "HmacSha256");
    HmacSha256.prototype = new Sha256();
    HmacSha256.prototype.finalize = function() {
        Sha256.prototype.finalize.call(this);
        if (this.inner) {
            this.inner = false;
            var innerHash = this.array();
            Sha256.call(this, this.is224, this.sharedMemory);
            this.update(this.oKeyPad);
            this.update(innerHash);
            Sha256.prototype.finalize.call(this);
        }
    };
    var exports = createMethod();
    exports.sha256 = exports;
    exports.sha224 = createMethod(true);
    exports.sha256.hmac = createHmacMethod();
    exports.sha224.hmac = createHmacMethod(true);
    if (COMMON_JS) {
        module.exports = exports;
    } else {
        root.sha256 = exports.sha256;
        root.sha224 = exports.sha224;
        if (AMD) {
            define(function() {
                return exports;
            });
        }
    }
})();
async function getAccountId(email, key) {
    try {
        const url = "https://api.cloudflare.com/client/v4/accounts";
        const headers = new Headers({
            "X-AUTH-EMAIL": email,
            "X-AUTH-KEY": key
        });
        const response = await fetch(url, { headers });
        const data = await response.json();
        return data.result[0].id;
    } catch (error3) {
        return false;
    }
}
__name(getAccountId, "getAccountId");
async function getSum(accountId, accountIndex, email, key, startDate, endDate) {
    try {
        const startDateISO = new Date(startDate).toISOString();
        const endDateISO = new Date(endDate).toISOString();
        const query = JSON.stringify({
            query: `query getBillingMetrics($accountId: String!, $filter: AccountWorkersInvocationsAdaptiveFilter_InputObject) {
				viewer {
					accounts(filter: {accountTag: $accountId}) {
						pagesFunctionsInvocationsAdaptiveGroups(limit: 1000, filter: $filter) {
							sum {
								requests
							}
						}
						workersInvocationsAdaptive(limit: 10000, filter: $filter) {
							sum {
								requests
							}
						}
					}
				}
			}`,
            variables: {
                accountId,
                filter: { datetime_geq: startDateISO, datetime_leq: endDateISO }
            }
        });
        const headers = new Headers({
            "Content-Type": "application/json",
            "X-AUTH-EMAIL": email,
            "X-AUTH-KEY": key
        });
        const response = await fetch(`https://api.cloudflare.com/client/v4/graphql`, {
            method: "POST",
            headers,
            body: query
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const res = await response.json();
        const pagesFunctionsInvocationsAdaptiveGroups = res?.data?.viewer?.accounts?.[accountIndex]?.pagesFunctionsInvocationsAdaptiveGroups;
        const workersInvocationsAdaptive = res?.data?.viewer?.accounts?.[accountIndex]?.workersInvocationsAdaptive;
        if (!pagesFunctionsInvocationsAdaptiveGroups && !workersInvocationsAdaptive) {
            throw new Error("\u627E\u4E0D\u5230\u6570\u636E");
        }
        const pagesSum = pagesFunctionsInvocationsAdaptiveGroups.reduce((a, b) => a + b?.sum.requests, 0);
        const workersSum = workersInvocationsAdaptive.reduce((a, b) => a + b?.sum.requests, 0);
        return [pagesSum, workersSum];
    } catch (error3) {
        return [0, 0];
    }
}
__name(getSum, "getSum");
async function socks5Connect(addressType, addressRemote, portRemote, log3) {
    const { username, password: password2, hostname, port } = parsedSocks5Address;
    const socket = connect({
        hostname,
        port
    });
    const socksGreeting = new Uint8Array([5, 2, 0, 2]);
    const writer = socket.writable.getWriter();
    await writer.write(socksGreeting);
    log3("sent socks greeting");
    const reader = socket.readable.getReader();
    const encoder = new TextEncoder();
    let res = (await reader.read()).value;
    if (res[0] !== 5) {
        log3(`socks server version error: ${res[0]} expected: 5`);
        return;
    }
    if (res[1] === 255) {
        log3("no acceptable methods");
        return;
    }
    if (res[1] === 2) {
        log3("socks server needs auth");
        if (!username || !password2) {
            log3("please provide username/password");
            return;
        }
        const authRequest = new Uint8Array([
            1,
            username.length,
            ...encoder.encode(username),
            password2.length,
            ...encoder.encode(password2)
        ]);
        await writer.write(authRequest);
        res = (await reader.read()).value;
        if (res[0] !== 1 || res[1] !== 0) {
            log3("fail to auth socks server");
            return;
        }
    }
    let DSTADDR;
    switch (addressType) {
        case 1:
            DSTADDR = new Uint8Array(
                [1, ...addressRemote.split(".").map(Number)]
            );
            break;
        case 3:
            DSTADDR = new Uint8Array(
                [3, addressRemote.length, ...encoder.encode(addressRemote)]
            );
            break;
        case 4:
            DSTADDR = new Uint8Array(
                [4, ...addressRemote.split(":").flatMap((x) => [parseInt(x.slice(0, 2), 16), parseInt(x.slice(2), 16)])]
            );
            break;
        default:
            log3(`invild  addressType is ${addressType}`);
            return;
    }
    const socksRequest = new Uint8Array([5, 1, 0, ...DSTADDR, portRemote >> 8, portRemote & 255]);
    await writer.write(socksRequest);
    log3("sent socks request");
    res = (await reader.read()).value;
    if (res[1] === 0) {
        log3("socks connection opened");
    } else {
        log3("fail to open socks connection");
        return;
    }
    writer.releaseLock();
    reader.releaseLock();
    return socket;
}
__name(socks5Connect, "socks5Connect");
function socks5AddressParser(address) {
    let [latter, former] = address.split("@").reverse();
    let username, password2, hostname, port;
    if (former) {
        const formers = former.split(":");
        if (formers.length !== 2) {
            throw new Error("Invalid SOCKS address format");
        }
        [username, password2] = formers;
    }
    const latters = latter.split(":");
    port = Number(latters.pop());
    if (isNaN(port)) {
        throw new Error("Invalid SOCKS address format");
    }
    hostname = latters.join(":");
    const regex2 = /^\[.*\]$/;
    if (hostname.includes(":") && !regex2.test(hostname)) {
        throw new Error("Invalid SOCKS address format");
    }
    return {
        username,
        password: password2,
        hostname,
        port
    };
}
__name(socks5AddressParser, "socks5AddressParser");
function isValidIPv4(address) {
    const ipv4Regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return ipv4Regex.test(address);
}
__name(isValidIPv4, "isValidIPv4");
export {
    worker_src_default as default
};
/**
 * [js-sha256]{@link https://github.com/emn178/js-sha256}
 *
 * @version 0.11.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2024
 * @license MIT
 */
/*! Bundled license information:

unenv/runtime/node/buffer/internal/ieee754.mjs:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

unenv/runtime/node/buffer/internal/buffer.mjs:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)
*/
//# sourceMappingURL=_worker.src.js.map
