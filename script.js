(function () {
  const S = document.createElement("link").relList;
  if (S && S.supports && S.supports("modulepreload")) return;
  for (const F of document.querySelectorAll('link[rel="modulepreload"]')) L(F);
  new MutationObserver((F) => {
    for (const A of F)
      if (A.type === "childList")
        for (const Z of A.addedNodes)
          Z.tagName === "LINK" && Z.rel === "modulepreload" && L(Z);
  }).observe(document, { childList: !0, subtree: !0 });
  function h(F) {
    const A = {};
    return (
      F.integrity && (A.integrity = F.integrity),
      F.referrerPolicy && (A.referrerPolicy = F.referrerPolicy),
      F.crossOrigin === "use-credentials"
        ? (A.credentials = "include")
        : F.crossOrigin === "anonymous"
          ? (A.credentials = "omit")
          : (A.credentials = "same-origin"),
      A
    );
  }
  function L(F) {
    if (F.ep) return;
    F.ep = !0;
    const A = h(F);
    fetch(F.href, A);
  }
})();
var _o = { exports: {} },
  xr = {},
  zo = { exports: {} },
  B = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var za;
function Yf() {
  if (za) return B;
  za = 1;
  var x = Symbol.for("react.element"),
    S = Symbol.for("react.portal"),
    h = Symbol.for("react.fragment"),
    L = Symbol.for("react.strict_mode"),
    F = Symbol.for("react.profiler"),
    A = Symbol.for("react.provider"),
    Z = Symbol.for("react.context"),
    I = Symbol.for("react.forward_ref"),
    V = Symbol.for("react.suspense"),
    ee = Symbol.for("react.memo"),
    ce = Symbol.for("react.lazy"),
    T = Symbol.iterator;
  function G(f) {
    return f === null || typeof f != "object"
      ? null
      : ((f = (T && f[T]) || f["@@iterator"]),
        typeof f == "function" ? f : null);
  }
  var we = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Ke = Object.assign,
    re = {};
  function J(f, v, U) {
    ((this.props = f),
      (this.context = v),
      (this.refs = re),
      (this.updater = U || we));
  }
  ((J.prototype.isReactComponent = {}),
    (J.prototype.setState = function (f, v) {
      if (typeof f != "object" && typeof f != "function" && f != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, f, v, "setState");
    }),
    (J.prototype.forceUpdate = function (f) {
      this.updater.enqueueForceUpdate(this, f, "forceUpdate");
    }));
  function gt() {}
  gt.prototype = J.prototype;
  function ct(f, v, U) {
    ((this.props = f),
      (this.context = v),
      (this.refs = re),
      (this.updater = U || we));
  }
  var et = (ct.prototype = new gt());
  ((et.constructor = ct), Ke(et, J.prototype), (et.isPureReactComponent = !0));
  var je = Array.isArray,
    tt = Object.prototype.hasOwnProperty,
    ze = { current: null },
    Te = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ge(f, v, U) {
    var $,
      W = {},
      Q = null,
      q = null;
    if (v != null)
      for ($ in (v.ref !== void 0 && (q = v.ref),
      v.key !== void 0 && (Q = "" + v.key),
      v))
        tt.call(v, $) && !Te.hasOwnProperty($) && (W[$] = v[$]);
    var Y = arguments.length - 2;
    if (Y === 1) W.children = U;
    else if (1 < Y) {
      for (var le = Array(Y), Be = 0; Be < Y; Be++) le[Be] = arguments[Be + 2];
      W.children = le;
    }
    if (f && f.defaultProps)
      for ($ in ((Y = f.defaultProps), Y)) W[$] === void 0 && (W[$] = Y[$]);
    return {
      $$typeof: x,
      type: f,
      key: Q,
      ref: q,
      props: W,
      _owner: ze.current,
    };
  }
  function zt(f, v) {
    return {
      $$typeof: x,
      type: f.type,
      key: v,
      ref: f.ref,
      props: f.props,
      _owner: f._owner,
    };
  }
  function xt(f) {
    return typeof f == "object" && f !== null && f.$$typeof === x;
  }
  function Yt(f) {
    var v = { "=": "=0", ":": "=2" };
    return (
      "$" +
      f.replace(/[=:]/g, function (U) {
        return v[U];
      })
    );
  }
  var ft = /\/+/g;
  function Ue(f, v) {
    return typeof f == "object" && f !== null && f.key != null
      ? Yt("" + f.key)
      : v.toString(36);
  }
  function nt(f, v, U, $, W) {
    var Q = typeof f;
    (Q === "undefined" || Q === "boolean") && (f = null);
    var q = !1;
    if (f === null) q = !0;
    else
      switch (Q) {
        case "string":
        case "number":
          q = !0;
          break;
        case "object":
          switch (f.$$typeof) {
            case x:
            case S:
              q = !0;
          }
      }
    if (q)
      return (
        (q = f),
        (W = W(q)),
        (f = $ === "" ? "." + Ue(q, 0) : $),
        je(W)
          ? ((U = ""),
            f != null && (U = f.replace(ft, "$&/") + "/"),
            nt(W, v, U, "", function (Be) {
              return Be;
            }))
          : W != null &&
            (xt(W) &&
              (W = zt(
                W,
                U +
                  (!W.key || (q && q.key === W.key)
                    ? ""
                    : ("" + W.key).replace(ft, "$&/") + "/") +
                  f,
              )),
            v.push(W)),
        1
      );
    if (((q = 0), ($ = $ === "" ? "." : $ + ":"), je(f)))
      for (var Y = 0; Y < f.length; Y++) {
        Q = f[Y];
        var le = $ + Ue(Q, Y);
        q += nt(Q, v, U, le, W);
      }
    else if (((le = G(f)), typeof le == "function"))
      for (f = le.call(f), Y = 0; !(Q = f.next()).done; )
        ((Q = Q.value), (le = $ + Ue(Q, Y++)), (q += nt(Q, v, U, le, W)));
    else if (Q === "object")
      throw (
        (v = String(f)),
        Error(
          "Objects are not valid as a React child (found: " +
            (v === "[object Object]"
              ? "object with keys {" + Object.keys(f).join(", ") + "}"
              : v) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    return q;
  }
  function dt(f, v, U) {
    if (f == null) return f;
    var $ = [],
      W = 0;
    return (
      nt(f, $, "", "", function (Q) {
        return v.call(U, Q, W++);
      }),
      $
    );
  }
  function Me(f) {
    if (f._status === -1) {
      var v = f._result;
      ((v = v()),
        v.then(
          function (U) {
            (f._status === 0 || f._status === -1) &&
              ((f._status = 1), (f._result = U));
          },
          function (U) {
            (f._status === 0 || f._status === -1) &&
              ((f._status = 2), (f._result = U));
          },
        ),
        f._status === -1 && ((f._status = 0), (f._result = v)));
    }
    if (f._status === 1) return f._result.default;
    throw f._result;
  }
  var ue = { current: null },
    j = { transition: null },
    D = {
      ReactCurrentDispatcher: ue,
      ReactCurrentBatchConfig: j,
      ReactCurrentOwner: ze,
    };
  function E() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (B.Children = {
      map: dt,
      forEach: function (f, v, U) {
        dt(
          f,
          function () {
            v.apply(this, arguments);
          },
          U,
        );
      },
      count: function (f) {
        var v = 0;
        return (
          dt(f, function () {
            v++;
          }),
          v
        );
      },
      toArray: function (f) {
        return (
          dt(f, function (v) {
            return v;
          }) || []
        );
      },
      only: function (f) {
        if (!xt(f))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return f;
      },
    }),
    (B.Component = J),
    (B.Fragment = h),
    (B.Profiler = F),
    (B.PureComponent = ct),
    (B.StrictMode = L),
    (B.Suspense = V),
    (B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = D),
    (B.act = E),
    (B.cloneElement = function (f, v, U) {
      if (f == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            f +
            ".",
        );
      var $ = Ke({}, f.props),
        W = f.key,
        Q = f.ref,
        q = f._owner;
      if (v != null) {
        if (
          (v.ref !== void 0 && ((Q = v.ref), (q = ze.current)),
          v.key !== void 0 && (W = "" + v.key),
          f.type && f.type.defaultProps)
        )
          var Y = f.type.defaultProps;
        for (le in v)
          tt.call(v, le) &&
            !Te.hasOwnProperty(le) &&
            ($[le] = v[le] === void 0 && Y !== void 0 ? Y[le] : v[le]);
      }
      var le = arguments.length - 2;
      if (le === 1) $.children = U;
      else if (1 < le) {
        Y = Array(le);
        for (var Be = 0; Be < le; Be++) Y[Be] = arguments[Be + 2];
        $.children = Y;
      }
      return { $$typeof: x, type: f.type, key: W, ref: Q, props: $, _owner: q };
    }),
    (B.createContext = function (f) {
      return (
        (f = {
          $$typeof: Z,
          _currentValue: f,
          _currentValue2: f,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (f.Provider = { $$typeof: A, _context: f }),
        (f.Consumer = f)
      );
    }),
    (B.createElement = Ge),
    (B.createFactory = function (f) {
      var v = Ge.bind(null, f);
      return ((v.type = f), v);
    }),
    (B.createRef = function () {
      return { current: null };
    }),
    (B.forwardRef = function (f) {
      return { $$typeof: I, render: f };
    }),
    (B.isValidElement = xt),
    (B.lazy = function (f) {
      return { $$typeof: ce, _payload: { _status: -1, _result: f }, _init: Me };
    }),
    (B.memo = function (f, v) {
      return { $$typeof: ee, type: f, compare: v === void 0 ? null : v };
    }),
    (B.startTransition = function (f) {
      var v = j.transition;
      j.transition = {};
      try {
        f();
      } finally {
        j.transition = v;
      }
    }),
    (B.unstable_act = E),
    (B.useCallback = function (f, v) {
      return ue.current.useCallback(f, v);
    }),
    (B.useContext = function (f) {
      return ue.current.useContext(f);
    }),
    (B.useDebugValue = function () {}),
    (B.useDeferredValue = function (f) {
      return ue.current.useDeferredValue(f);
    }),
    (B.useEffect = function (f, v) {
      return ue.current.useEffect(f, v);
    }),
    (B.useId = function () {
      return ue.current.useId();
    }),
    (B.useImperativeHandle = function (f, v, U) {
      return ue.current.useImperativeHandle(f, v, U);
    }),
    (B.useInsertionEffect = function (f, v) {
      return ue.current.useInsertionEffect(f, v);
    }),
    (B.useLayoutEffect = function (f, v) {
      return ue.current.useLayoutEffect(f, v);
    }),
    (B.useMemo = function (f, v) {
      return ue.current.useMemo(f, v);
    }),
    (B.useReducer = function (f, v, U) {
      return ue.current.useReducer(f, v, U);
    }),
    (B.useRef = function (f) {
      return ue.current.useRef(f);
    }),
    (B.useState = function (f) {
      return ue.current.useState(f);
    }),
    (B.useSyncExternalStore = function (f, v, U) {
      return ue.current.useSyncExternalStore(f, v, U);
    }),
    (B.useTransition = function () {
      return ue.current.useTransition();
    }),
    (B.version = "18.3.1"),
    B
  );
}
var Pa;
function Ro() {
  return (Pa || ((Pa = 1), (zo.exports = Yf())), zo.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var La;
function Xf() {
  if (La) return xr;
  La = 1;
  var x = Ro(),
    S = Symbol.for("react.element"),
    h = Symbol.for("react.fragment"),
    L = Object.prototype.hasOwnProperty,
    F = x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    A = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Z(I, V, ee) {
    var ce,
      T = {},
      G = null,
      we = null;
    (ee !== void 0 && (G = "" + ee),
      V.key !== void 0 && (G = "" + V.key),
      V.ref !== void 0 && (we = V.ref));
    for (ce in V) L.call(V, ce) && !A.hasOwnProperty(ce) && (T[ce] = V[ce]);
    if (I && I.defaultProps)
      for (ce in ((V = I.defaultProps), V)) T[ce] === void 0 && (T[ce] = V[ce]);
    return {
      $$typeof: S,
      type: I,
      key: G,
      ref: we,
      props: T,
      _owner: F.current,
    };
  }
  return ((xr.Fragment = h), (xr.jsx = Z), (xr.jsxs = Z), xr);
}
var Ta;
function Zf() {
  return (Ta || ((Ta = 1), (_o.exports = Xf())), _o.exports);
}
var s = Zf(),
  Ml = {},
  Po = { exports: {} },
  Ae = {},
  Lo = { exports: {} },
  To = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ma;
function Jf() {
  return (
    Ma ||
      ((Ma = 1),
      (function (x) {
        function S(j, D) {
          var E = j.length;
          j.push(D);
          e: for (; 0 < E; ) {
            var f = (E - 1) >>> 1,
              v = j[f];
            if (0 < F(v, D)) ((j[f] = D), (j[E] = v), (E = f));
            else break e;
          }
        }
        function h(j) {
          return j.length === 0 ? null : j[0];
        }
        function L(j) {
          if (j.length === 0) return null;
          var D = j[0],
            E = j.pop();
          if (E !== D) {
            j[0] = E;
            e: for (var f = 0, v = j.length, U = v >>> 1; f < U; ) {
              var $ = 2 * (f + 1) - 1,
                W = j[$],
                Q = $ + 1,
                q = j[Q];
              if (0 > F(W, E))
                Q < v && 0 > F(q, W)
                  ? ((j[f] = q), (j[Q] = E), (f = Q))
                  : ((j[f] = W), (j[$] = E), (f = $));
              else if (Q < v && 0 > F(q, E)) ((j[f] = q), (j[Q] = E), (f = Q));
              else break e;
            }
          }
          return D;
        }
        function F(j, D) {
          var E = j.sortIndex - D.sortIndex;
          return E !== 0 ? E : j.id - D.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var A = performance;
          x.unstable_now = function () {
            return A.now();
          };
        } else {
          var Z = Date,
            I = Z.now();
          x.unstable_now = function () {
            return Z.now() - I;
          };
        }
        var V = [],
          ee = [],
          ce = 1,
          T = null,
          G = 3,
          we = !1,
          Ke = !1,
          re = !1,
          J = typeof setTimeout == "function" ? setTimeout : null,
          gt = typeof clearTimeout == "function" ? clearTimeout : null,
          ct = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function et(j) {
          for (var D = h(ee); D !== null; ) {
            if (D.callback === null) L(ee);
            else if (D.startTime <= j)
              (L(ee), (D.sortIndex = D.expirationTime), S(V, D));
            else break;
            D = h(ee);
          }
        }
        function je(j) {
          if (((re = !1), et(j), !Ke))
            if (h(V) !== null) ((Ke = !0), Me(tt));
            else {
              var D = h(ee);
              D !== null && ue(je, D.startTime - j);
            }
        }
        function tt(j, D) {
          ((Ke = !1), re && ((re = !1), gt(Ge), (Ge = -1)), (we = !0));
          var E = G;
          try {
            for (
              et(D), T = h(V);
              T !== null && (!(T.expirationTime > D) || (j && !Yt()));
            ) {
              var f = T.callback;
              if (typeof f == "function") {
                ((T.callback = null), (G = T.priorityLevel));
                var v = f(T.expirationTime <= D);
                ((D = x.unstable_now()),
                  typeof v == "function"
                    ? (T.callback = v)
                    : T === h(V) && L(V),
                  et(D));
              } else L(V);
              T = h(V);
            }
            if (T !== null) var U = !0;
            else {
              var $ = h(ee);
              ($ !== null && ue(je, $.startTime - D), (U = !1));
            }
            return U;
          } finally {
            ((T = null), (G = E), (we = !1));
          }
        }
        var ze = !1,
          Te = null,
          Ge = -1,
          zt = 5,
          xt = -1;
        function Yt() {
          return !(x.unstable_now() - xt < zt);
        }
        function ft() {
          if (Te !== null) {
            var j = x.unstable_now();
            xt = j;
            var D = !0;
            try {
              D = Te(!0, j);
            } finally {
              D ? Ue() : ((ze = !1), (Te = null));
            }
          } else ze = !1;
        }
        var Ue;
        if (typeof ct == "function")
          Ue = function () {
            ct(ft);
          };
        else if (typeof MessageChannel < "u") {
          var nt = new MessageChannel(),
            dt = nt.port2;
          ((nt.port1.onmessage = ft),
            (Ue = function () {
              dt.postMessage(null);
            }));
        } else
          Ue = function () {
            J(ft, 0);
          };
        function Me(j) {
          ((Te = j), ze || ((ze = !0), Ue()));
        }
        function ue(j, D) {
          Ge = J(function () {
            j(x.unstable_now());
          }, D);
        }
        ((x.unstable_IdlePriority = 5),
          (x.unstable_ImmediatePriority = 1),
          (x.unstable_LowPriority = 4),
          (x.unstable_NormalPriority = 3),
          (x.unstable_Profiling = null),
          (x.unstable_UserBlockingPriority = 2),
          (x.unstable_cancelCallback = function (j) {
            j.callback = null;
          }),
          (x.unstable_continueExecution = function () {
            Ke || we || ((Ke = !0), Me(tt));
          }),
          (x.unstable_forceFrameRate = function (j) {
            0 > j || 125 < j
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (zt = 0 < j ? Math.floor(1e3 / j) : 5);
          }),
          (x.unstable_getCurrentPriorityLevel = function () {
            return G;
          }),
          (x.unstable_getFirstCallbackNode = function () {
            return h(V);
          }),
          (x.unstable_next = function (j) {
            switch (G) {
              case 1:
              case 2:
              case 3:
                var D = 3;
                break;
              default:
                D = G;
            }
            var E = G;
            G = D;
            try {
              return j();
            } finally {
              G = E;
            }
          }),
          (x.unstable_pauseExecution = function () {}),
          (x.unstable_requestPaint = function () {}),
          (x.unstable_runWithPriority = function (j, D) {
            switch (j) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                j = 3;
            }
            var E = G;
            G = j;
            try {
              return D();
            } finally {
              G = E;
            }
          }),
          (x.unstable_scheduleCallback = function (j, D, E) {
            var f = x.unstable_now();
            switch (
              (typeof E == "object" && E !== null
                ? ((E = E.delay),
                  (E = typeof E == "number" && 0 < E ? f + E : f))
                : (E = f),
              j)
            ) {
              case 1:
                var v = -1;
                break;
              case 2:
                v = 250;
                break;
              case 5:
                v = 1073741823;
                break;
              case 4:
                v = 1e4;
                break;
              default:
                v = 5e3;
            }
            return (
              (v = E + v),
              (j = {
                id: ce++,
                callback: D,
                priorityLevel: j,
                startTime: E,
                expirationTime: v,
                sortIndex: -1,
              }),
              E > f
                ? ((j.sortIndex = E),
                  S(ee, j),
                  h(V) === null &&
                    j === h(ee) &&
                    (re ? (gt(Ge), (Ge = -1)) : (re = !0), ue(je, E - f)))
                : ((j.sortIndex = v), S(V, j), Ke || we || ((Ke = !0), Me(tt))),
              j
            );
          }),
          (x.unstable_shouldYield = Yt),
          (x.unstable_wrapCallback = function (j) {
            var D = G;
            return function () {
              var E = G;
              G = D;
              try {
                return j.apply(this, arguments);
              } finally {
                G = E;
              }
            };
          }));
      })(To)),
    To
  );
}
var Ra;
function qf() {
  return (Ra || ((Ra = 1), (Lo.exports = Jf())), Lo.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Da;
function bf() {
  if (Da) return Ae;
  Da = 1;
  var x = Ro(),
    S = qf();
  function h(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var L = new Set(),
    F = {};
  function A(e, t) {
    (Z(e, t), Z(e + "Capture", t));
  }
  function Z(e, t) {
    for (F[e] = t, e = 0; e < t.length; e++) L.add(t[e]);
  }
  var I = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    V = Object.prototype.hasOwnProperty,
    ee =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    ce = {},
    T = {};
  function G(e) {
    return V.call(T, e)
      ? !0
      : V.call(ce, e)
        ? !1
        : ee.test(e)
          ? (T[e] = !0)
          : ((ce[e] = !0), !1);
  }
  function we(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : n !== null
            ? !n.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)),
              e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function Ke(e, t, n, r) {
    if (t === null || typeof t > "u" || we(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function re(e, t, n, r, l, i, o) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = i),
      (this.removeEmptyString = o));
  }
  var J = {};
  ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      J[e] = new re(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      J[t] = new re(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(
      function (e) {
        J[e] = new re(e, 2, !1, e.toLowerCase(), null, !1, !1);
      },
    ),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      J[e] = new re(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        J[e] = new re(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      J[e] = new re(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      J[e] = new re(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      J[e] = new re(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      J[e] = new re(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var gt = /[\-:]([a-z])/g;
  function ct(e) {
    return e[1].toUpperCase();
  }
  ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(gt, ct);
      J[t] = new re(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(gt, ct);
        J[t] = new re(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(gt, ct);
      J[t] = new re(
        t,
        1,
        !1,
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        !1,
      );
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      J[e] = new re(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (J.xlinkHref = new re(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1,
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      J[e] = new re(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function et(e, t, n, r) {
    var l = J.hasOwnProperty(t) ? J[t] : null;
    (l !== null
      ? l.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (Ke(t, n, l, r) && (n = null),
      r || l === null
        ? G(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : l.mustUseProperty
          ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
          : ((t = l.attributeName),
            (r = l.attributeNamespace),
            n === null
              ? e.removeAttribute(t)
              : ((l = l.type),
                (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var je = x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    tt = Symbol.for("react.element"),
    ze = Symbol.for("react.portal"),
    Te = Symbol.for("react.fragment"),
    Ge = Symbol.for("react.strict_mode"),
    zt = Symbol.for("react.profiler"),
    xt = Symbol.for("react.provider"),
    Yt = Symbol.for("react.context"),
    ft = Symbol.for("react.forward_ref"),
    Ue = Symbol.for("react.suspense"),
    nt = Symbol.for("react.suspense_list"),
    dt = Symbol.for("react.memo"),
    Me = Symbol.for("react.lazy"),
    ue = Symbol.for("react.offscreen"),
    j = Symbol.iterator;
  function D(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (j && e[j]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var E = Object.assign,
    f;
  function v(e) {
    if (f === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        f = (t && t[1]) || "";
      }
    return (
      `
` +
      f +
      e
    );
  }
  var U = !1;
  function $(e, t) {
    if (!e || U) return "";
    U = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (m) {
            var r = m;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (m) {
            r = m;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (m) {
          r = m;
        }
        e();
      }
    } catch (m) {
      if (m && r && typeof m.stack == "string") {
        for (
          var l = m.stack.split(`
`),
            i = r.stack.split(`
`),
            o = l.length - 1,
            u = i.length - 1;
          1 <= o && 0 <= u && l[o] !== i[u];
        )
          u--;
        for (; 1 <= o && 0 <= u; o--, u--)
          if (l[o] !== i[u]) {
            if (o !== 1 || u !== 1)
              do
                if ((o--, u--, 0 > u || l[o] !== i[u])) {
                  var a =
                    `
` + l[o].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      a.includes("<anonymous>") &&
                      (a = a.replace("<anonymous>", e.displayName)),
                    a
                  );
                }
              while (1 <= o && 0 <= u);
            break;
          }
      }
    } finally {
      ((U = !1), (Error.prepareStackTrace = n));
    }
    return (e = e ? e.displayName || e.name : "") ? v(e) : "";
  }
  function W(e) {
    switch (e.tag) {
      case 5:
        return v(e.type);
      case 16:
        return v("Lazy");
      case 13:
        return v("Suspense");
      case 19:
        return v("SuspenseList");
      case 0:
      case 2:
      case 15:
        return ((e = $(e.type, !1)), e);
      case 11:
        return ((e = $(e.type.render, !1)), e);
      case 1:
        return ((e = $(e.type, !0)), e);
      default:
        return "";
    }
  }
  function Q(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Te:
        return "Fragment";
      case ze:
        return "Portal";
      case zt:
        return "Profiler";
      case Ge:
        return "StrictMode";
      case Ue:
        return "Suspense";
      case nt:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Yt:
          return (e.displayName || "Context") + ".Consumer";
        case xt:
          return (e._context.displayName || "Context") + ".Provider";
        case ft:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case dt:
          return (
            (t = e.displayName || null),
            t !== null ? t : Q(e.type) || "Memo"
          );
        case Me:
          ((t = e._payload), (e = e._init));
          try {
            return Q(e(t));
          } catch {}
      }
    return null;
  }
  function q(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Q(t);
      case 8:
        return t === Ge ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function Y(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function le(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Be(e) {
    var t = le(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var l = n.get,
        i = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (o) {
            ((r = "" + o), i.call(this, o));
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (o) {
            r = "" + o;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function Sr(e) {
    e._valueTracker || (e._valueTracker = Be(e));
  }
  function Do(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = le(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function jr(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Rl(e, t) {
    var n = t.checked;
    return E({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function Io(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    ((n = Y(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      }));
  }
  function Oo(e, t) {
    ((t = t.checked), t != null && et(e, "checked", t, !1));
  }
  function Dl(e, t) {
    Oo(e, t);
    var n = Y(t.value),
      r = t.type;
    if (n != null)
      r === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    (t.hasOwnProperty("value")
      ? Il(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Il(e, t.type, Y(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked));
  }
  function Fo(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      ((t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n));
  }
  function Il(e, t, n) {
    (t !== "number" || jr(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Dn = Array.isArray;
  function an(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        ((l = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0));
    } else {
      for (n = "" + Y(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          ((e[l].selected = !0), r && (e[l].defaultSelected = !0));
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ol(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(h(91));
    return E({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Ao(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(h(92));
        if (Dn(n)) {
          if (1 < n.length) throw Error(h(93));
          n = n[0];
        }
        t = n;
      }
      (t == null && (t = ""), (n = t));
    }
    e._wrapperState = { initialValue: Y(n) };
  }
  function Uo(e, t) {
    var n = Y(t.value),
      r = Y(t.defaultValue);
    (n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r));
  }
  function Bo(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function $o(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Fl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? $o(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var Nr,
    Vo = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, l);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          Nr = Nr || document.createElement("div"),
            Nr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Nr.firstChild;
          e.firstChild;
        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function In(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var On = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    Ja = ["Webkit", "ms", "Moz", "O"];
  Object.keys(On).forEach(function (e) {
    Ja.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (On[t] = On[e]));
    });
  });
  function Ho(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (On.hasOwnProperty(e) && On[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function Wo(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          l = Ho(n, t[n], r);
        (n === "float" && (n = "cssFloat"),
          r ? e.setProperty(n, l) : (e[n] = l));
      }
  }
  var qa = E(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    },
  );
  function Al(e, t) {
    if (t) {
      if (qa[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(h(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(h(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(h(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(h(62));
    }
  }
  function Ul(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Bl = null;
  function $l(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Vl = null,
    cn = null,
    fn = null;
  function Qo(e) {
    if ((e = lr(e))) {
      if (typeof Vl != "function") throw Error(h(280));
      var t = e.stateNode;
      t && ((t = Gr(t)), Vl(e.stateNode, e.type, t));
    }
  }
  function Ko(e) {
    cn ? (fn ? fn.push(e) : (fn = [e])) : (cn = e);
  }
  function Go() {
    if (cn) {
      var e = cn,
        t = fn;
      if (((fn = cn = null), Qo(e), t)) for (e = 0; e < t.length; e++) Qo(t[e]);
    }
  }
  function Yo(e, t) {
    return e(t);
  }
  function Xo() {}
  var Hl = !1;
  function Zo(e, t, n) {
    if (Hl) return e(t, n);
    Hl = !0;
    try {
      return Yo(e, t, n);
    } finally {
      ((Hl = !1), (cn !== null || fn !== null) && (Xo(), Go()));
    }
  }
  function Fn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Gr(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(h(231, t, typeof n));
    return n;
  }
  var Wl = !1;
  if (I)
    try {
      var An = {};
      (Object.defineProperty(An, "passive", {
        get: function () {
          Wl = !0;
        },
      }),
        window.addEventListener("test", An, An),
        window.removeEventListener("test", An, An));
    } catch {
      Wl = !1;
    }
  function ba(e, t, n, r, l, i, o, u, a) {
    var m = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, m);
    } catch (g) {
      this.onError(g);
    }
  }
  var Un = !1,
    Cr = null,
    Er = !1,
    Ql = null,
    ec = {
      onError: function (e) {
        ((Un = !0), (Cr = e));
      },
    };
  function tc(e, t, n, r, l, i, o, u, a) {
    ((Un = !1), (Cr = null), ba.apply(ec, arguments));
  }
  function nc(e, t, n, r, l, i, o, u, a) {
    if ((tc.apply(this, arguments), Un)) {
      if (Un) {
        var m = Cr;
        ((Un = !1), (Cr = null));
      } else throw Error(h(198));
      Er || ((Er = !0), (Ql = m));
    }
  }
  function Xt(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Jo(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function qo(e) {
    if (Xt(e) !== e) throw Error(h(188));
  }
  function rc(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Xt(e)), t === null)) throw Error(h(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var i = l.alternate;
      if (i === null) {
        if (((r = l.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === i.child) {
        for (i = l.child; i; ) {
          if (i === n) return (qo(l), e);
          if (i === r) return (qo(l), t);
          i = i.sibling;
        }
        throw Error(h(188));
      }
      if (n.return !== r.return) ((n = l), (r = i));
      else {
        for (var o = !1, u = l.child; u; ) {
          if (u === n) {
            ((o = !0), (n = l), (r = i));
            break;
          }
          if (u === r) {
            ((o = !0), (r = l), (n = i));
            break;
          }
          u = u.sibling;
        }
        if (!o) {
          for (u = i.child; u; ) {
            if (u === n) {
              ((o = !0), (n = i), (r = l));
              break;
            }
            if (u === r) {
              ((o = !0), (r = i), (n = l));
              break;
            }
            u = u.sibling;
          }
          if (!o) throw Error(h(189));
        }
      }
      if (n.alternate !== r) throw Error(h(190));
    }
    if (n.tag !== 3) throw Error(h(188));
    return n.stateNode.current === n ? e : t;
  }
  function bo(e) {
    return ((e = rc(e)), e !== null ? es(e) : null);
  }
  function es(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = es(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var ts = S.unstable_scheduleCallback,
    ns = S.unstable_cancelCallback,
    lc = S.unstable_shouldYield,
    ic = S.unstable_requestPaint,
    fe = S.unstable_now,
    oc = S.unstable_getCurrentPriorityLevel,
    Kl = S.unstable_ImmediatePriority,
    rs = S.unstable_UserBlockingPriority,
    _r = S.unstable_NormalPriority,
    sc = S.unstable_LowPriority,
    ls = S.unstable_IdlePriority,
    zr = null,
    pt = null;
  function uc(e) {
    if (pt && typeof pt.onCommitFiberRoot == "function")
      try {
        pt.onCommitFiberRoot(zr, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var rt = Math.clz32 ? Math.clz32 : fc,
    ac = Math.log,
    cc = Math.LN2;
  function fc(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((ac(e) / cc) | 0)) | 0);
  }
  var Pr = 64,
    Lr = 4194304;
  function Bn(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Tr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      i = e.pingedLanes,
      o = n & 268435455;
    if (o !== 0) {
      var u = o & ~l;
      u !== 0 ? (r = Bn(u)) : ((i &= o), i !== 0 && (r = Bn(i)));
    } else ((o = n & ~l), o !== 0 ? (r = Bn(o)) : i !== 0 && (r = Bn(i)));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      (t & l) === 0 &&
      ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
    )
      return t;
    if (((r & 4) !== 0 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        ((n = 31 - rt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l));
    return r;
  }
  function dc(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function pc(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        l = e.expirationTimes,
        i = e.pendingLanes;
      0 < i;
    ) {
      var o = 31 - rt(i),
        u = 1 << o,
        a = l[o];
      (a === -1
        ? ((u & n) === 0 || (u & r) !== 0) && (l[o] = dc(u, t))
        : a <= t && (e.expiredLanes |= u),
        (i &= ~u));
    }
  }
  function Gl(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function is() {
    var e = Pr;
    return ((Pr <<= 1), (Pr & 4194240) === 0 && (Pr = 64), e);
  }
  function Yl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function $n(e, t, n) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - rt(t)),
      (e[t] = n));
  }
  function mc(e, t) {
    var n = e.pendingLanes & ~t;
    ((e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements));
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - rt(n),
        i = 1 << l;
      ((t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i));
    }
  }
  function Xl(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - rt(n),
        l = 1 << r;
      ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
    }
  }
  var X = 0;
  function os(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var ss,
    Zl,
    us,
    as,
    cs,
    Jl = !1,
    Mr = [],
    Pt = null,
    Lt = null,
    Tt = null,
    Vn = new Map(),
    Hn = new Map(),
    Mt = [],
    hc =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function fs(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Pt = null;
        break;
      case "dragenter":
      case "dragleave":
        Lt = null;
        break;
      case "mouseover":
      case "mouseout":
        Tt = null;
        break;
      case "pointerover":
      case "pointerout":
        Vn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Hn.delete(t.pointerId);
    }
  }
  function Wn(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: i,
          targetContainers: [l],
        }),
        t !== null && ((t = lr(t)), t !== null && Zl(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function yc(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return ((Pt = Wn(Pt, e, t, n, r, l)), !0);
      case "dragenter":
        return ((Lt = Wn(Lt, e, t, n, r, l)), !0);
      case "mouseover":
        return ((Tt = Wn(Tt, e, t, n, r, l)), !0);
      case "pointerover":
        var i = l.pointerId;
        return (Vn.set(i, Wn(Vn.get(i) || null, e, t, n, r, l)), !0);
      case "gotpointercapture":
        return (
          (i = l.pointerId),
          Hn.set(i, Wn(Hn.get(i) || null, e, t, n, r, l)),
          !0
        );
    }
    return !1;
  }
  function ds(e) {
    var t = Zt(e.target);
    if (t !== null) {
      var n = Xt(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Jo(n)), t !== null)) {
            ((e.blockedOn = t),
              cs(e.priority, function () {
                us(n);
              }));
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Rr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = bl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        ((Bl = r), n.target.dispatchEvent(r), (Bl = null));
      } else return ((t = lr(n)), t !== null && Zl(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function ps(e, t, n) {
    Rr(e) && n.delete(t);
  }
  function vc() {
    ((Jl = !1),
      Pt !== null && Rr(Pt) && (Pt = null),
      Lt !== null && Rr(Lt) && (Lt = null),
      Tt !== null && Rr(Tt) && (Tt = null),
      Vn.forEach(ps),
      Hn.forEach(ps));
  }
  function Qn(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Jl ||
        ((Jl = !0),
        S.unstable_scheduleCallback(S.unstable_NormalPriority, vc)));
  }
  function Kn(e) {
    function t(l) {
      return Qn(l, e);
    }
    if (0 < Mr.length) {
      Qn(Mr[0], e);
      for (var n = 1; n < Mr.length; n++) {
        var r = Mr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Pt !== null && Qn(Pt, e),
        Lt !== null && Qn(Lt, e),
        Tt !== null && Qn(Tt, e),
        Vn.forEach(t),
        Hn.forEach(t),
        n = 0;
      n < Mt.length;
      n++
    )
      ((r = Mt[n]), r.blockedOn === e && (r.blockedOn = null));
    for (; 0 < Mt.length && ((n = Mt[0]), n.blockedOn === null); )
      (ds(n), n.blockedOn === null && Mt.shift());
  }
  var dn = je.ReactCurrentBatchConfig,
    Dr = !0;
  function gc(e, t, n, r) {
    var l = X,
      i = dn.transition;
    dn.transition = null;
    try {
      ((X = 1), ql(e, t, n, r));
    } finally {
      ((X = l), (dn.transition = i));
    }
  }
  function xc(e, t, n, r) {
    var l = X,
      i = dn.transition;
    dn.transition = null;
    try {
      ((X = 4), ql(e, t, n, r));
    } finally {
      ((X = l), (dn.transition = i));
    }
  }
  function ql(e, t, n, r) {
    if (Dr) {
      var l = bl(e, t, n, r);
      if (l === null) (yi(e, t, r, Ir, n), fs(e, r));
      else if (yc(l, e, t, n, r)) r.stopPropagation();
      else if ((fs(e, r), t & 4 && -1 < hc.indexOf(e))) {
        for (; l !== null; ) {
          var i = lr(l);
          if (
            (i !== null && ss(i),
            (i = bl(e, t, n, r)),
            i === null && yi(e, t, r, Ir, n),
            i === l)
          )
            break;
          l = i;
        }
        l !== null && r.stopPropagation();
      } else yi(e, t, r, null, n);
    }
  }
  var Ir = null;
  function bl(e, t, n, r) {
    if (((Ir = null), (e = $l(r)), (e = Zt(e)), e !== null))
      if (((t = Xt(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Jo(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((Ir = e), null);
  }
  function ms(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (oc()) {
          case Kl:
            return 1;
          case rs:
            return 4;
          case _r:
          case sc:
            return 16;
          case ls:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Rt = null,
    ei = null,
    Or = null;
  function hs() {
    if (Or) return Or;
    var e,
      t = ei,
      n = t.length,
      r,
      l = "value" in Rt ? Rt.value : Rt.textContent,
      i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
    return (Or = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Fr(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Ar() {
    return !0;
  }
  function ys() {
    return !1;
  }
  function $e(e) {
    function t(n, r, l, i, o) {
      ((this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = i),
        (this.target = o),
        (this.currentTarget = null));
      for (var u in e)
        e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
      return (
        (this.isDefaultPrevented = (
          i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
        )
          ? Ar
          : ys),
        (this.isPropagationStopped = ys),
        this
      );
    }
    return (
      E(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Ar));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Ar));
        },
        persist: function () {},
        isPersistent: Ar,
      }),
      t
    );
  }
  var pn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ti = $e(pn),
    Gn = E({}, pn, { view: 0, detail: 0 }),
    wc = $e(Gn),
    ni,
    ri,
    Yn,
    Ur = E({}, Gn, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: ii,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Yn &&
              (Yn && e.type === "mousemove"
                ? ((ni = e.screenX - Yn.screenX), (ri = e.screenY - Yn.screenY))
                : (ri = ni = 0),
              (Yn = e)),
            ni);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : ri;
      },
    }),
    vs = $e(Ur),
    kc = E({}, Ur, { dataTransfer: 0 }),
    Sc = $e(kc),
    jc = E({}, Gn, { relatedTarget: 0 }),
    li = $e(jc),
    Nc = E({}, pn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Cc = $e(Nc),
    Ec = E({}, pn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    _c = $e(Ec),
    zc = E({}, pn, { data: 0 }),
    gs = $e(zc),
    Pc = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Lc = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Tc = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Mc(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Tc[e])
        ? !!t[e]
        : !1;
  }
  function ii() {
    return Mc;
  }
  var Rc = E({}, Gn, {
      key: function (e) {
        if (e.key) {
          var t = Pc[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Fr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? Lc[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: ii,
      charCode: function (e) {
        return e.type === "keypress" ? Fr(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Fr(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    Dc = $e(Rc),
    Ic = E({}, Ur, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    xs = $e(Ic),
    Oc = E({}, Gn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ii,
    }),
    Fc = $e(Oc),
    Ac = E({}, pn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Uc = $e(Ac),
    Bc = E({}, Ur, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    $c = $e(Bc),
    Vc = [9, 13, 27, 32],
    oi = I && "CompositionEvent" in window,
    Xn = null;
  I && "documentMode" in document && (Xn = document.documentMode);
  var Hc = I && "TextEvent" in window && !Xn,
    ws = I && (!oi || (Xn && 8 < Xn && 11 >= Xn)),
    ks = " ",
    Ss = !1;
  function js(e, t) {
    switch (e) {
      case "keyup":
        return Vc.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Ns(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var mn = !1;
  function Wc(e, t) {
    switch (e) {
      case "compositionend":
        return Ns(t);
      case "keypress":
        return t.which !== 32 ? null : ((Ss = !0), ks);
      case "textInput":
        return ((e = t.data), e === ks && Ss ? null : e);
      default:
        return null;
    }
  }
  function Qc(e, t) {
    if (mn)
      return e === "compositionend" || (!oi && js(e, t))
        ? ((e = hs()), (Or = ei = Rt = null), (mn = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return ws && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Kc = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Cs(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Kc[e.type] : t === "textarea";
  }
  function Es(e, t, n, r) {
    (Ko(r),
      (t = Wr(t, "onChange")),
      0 < t.length &&
        ((n = new ti("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t })));
  }
  var Zn = null,
    Jn = null;
  function Gc(e) {
    Ws(e, 0);
  }
  function Br(e) {
    var t = xn(e);
    if (Do(t)) return e;
  }
  function Yc(e, t) {
    if (e === "change") return t;
  }
  var _s = !1;
  if (I) {
    var si;
    if (I) {
      var ui = "oninput" in document;
      if (!ui) {
        var zs = document.createElement("div");
        (zs.setAttribute("oninput", "return;"),
          (ui = typeof zs.oninput == "function"));
      }
      si = ui;
    } else si = !1;
    _s = si && (!document.documentMode || 9 < document.documentMode);
  }
  function Ps() {
    Zn && (Zn.detachEvent("onpropertychange", Ls), (Jn = Zn = null));
  }
  function Ls(e) {
    if (e.propertyName === "value" && Br(Jn)) {
      var t = [];
      (Es(t, Jn, e, $l(e)), Zo(Gc, t));
    }
  }
  function Xc(e, t, n) {
    e === "focusin"
      ? (Ps(), (Zn = t), (Jn = n), Zn.attachEvent("onpropertychange", Ls))
      : e === "focusout" && Ps();
  }
  function Zc(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Br(Jn);
  }
  function Jc(e, t) {
    if (e === "click") return Br(t);
  }
  function qc(e, t) {
    if (e === "input" || e === "change") return Br(t);
  }
  function bc(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var lt = typeof Object.is == "function" ? Object.is : bc;
  function qn(e, t) {
    if (lt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!V.call(t, l) || !lt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Ts(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Ms(e, t) {
    var n = Ts(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Ts(n);
    }
  }
  function Rs(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Rs(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Ds() {
    for (var e = window, t = jr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = jr(e.document);
    }
    return t;
  }
  function ai(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function ef(e) {
    var t = Ds(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      Rs(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && ai(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          ((n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length)));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var l = n.textContent.length,
            i = Math.min(r.start, l);
          ((r = r.end === void 0 ? i : Math.min(r.end, l)),
            !e.extend && i > r && ((l = r), (r = i), (i = l)),
            (l = Ms(n, i)));
          var o = Ms(n, r);
          l &&
            o &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== o.node ||
              e.focusOffset !== o.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            i > r
              ? (e.addRange(t), e.extend(o.node, o.offset))
              : (t.setEnd(o.node, o.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        ((e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top));
    }
  }
  var tf = I && "documentMode" in document && 11 >= document.documentMode,
    hn = null,
    ci = null,
    bn = null,
    fi = !1;
  function Is(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    fi ||
      hn == null ||
      hn !== jr(r) ||
      ((r = hn),
      "selectionStart" in r && ai(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (bn && qn(bn, r)) ||
        ((bn = r),
        (r = Wr(ci, "onSelect")),
        0 < r.length &&
          ((t = new ti("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = hn))));
  }
  function $r(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var yn = {
      animationend: $r("Animation", "AnimationEnd"),
      animationiteration: $r("Animation", "AnimationIteration"),
      animationstart: $r("Animation", "AnimationStart"),
      transitionend: $r("Transition", "TransitionEnd"),
    },
    di = {},
    Os = {};
  I &&
    ((Os = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete yn.animationend.animation,
      delete yn.animationiteration.animation,
      delete yn.animationstart.animation),
    "TransitionEvent" in window || delete yn.transitionend.transition);
  function Vr(e) {
    if (di[e]) return di[e];
    if (!yn[e]) return e;
    var t = yn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Os) return (di[e] = t[n]);
    return e;
  }
  var Fs = Vr("animationend"),
    As = Vr("animationiteration"),
    Us = Vr("animationstart"),
    Bs = Vr("transitionend"),
    $s = new Map(),
    Vs =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function Dt(e, t) {
    ($s.set(e, t), A(t, [e]));
  }
  for (var pi = 0; pi < Vs.length; pi++) {
    var mi = Vs[pi],
      nf = mi.toLowerCase(),
      rf = mi[0].toUpperCase() + mi.slice(1);
    Dt(nf, "on" + rf);
  }
  (Dt(Fs, "onAnimationEnd"),
    Dt(As, "onAnimationIteration"),
    Dt(Us, "onAnimationStart"),
    Dt("dblclick", "onDoubleClick"),
    Dt("focusin", "onFocus"),
    Dt("focusout", "onBlur"),
    Dt(Bs, "onTransitionEnd"),
    Z("onMouseEnter", ["mouseout", "mouseover"]),
    Z("onMouseLeave", ["mouseout", "mouseover"]),
    Z("onPointerEnter", ["pointerout", "pointerover"]),
    Z("onPointerLeave", ["pointerout", "pointerover"]),
    A(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    A(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    A("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    A(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    A(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    A(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var er =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    lf = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(er),
    );
  function Hs(e, t, n) {
    var r = e.type || "unknown-event";
    ((e.currentTarget = n), nc(r, t, void 0, e), (e.currentTarget = null));
  }
  function Ws(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event;
      r = r.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var o = r.length - 1; 0 <= o; o--) {
            var u = r[o],
              a = u.instance,
              m = u.currentTarget;
            if (((u = u.listener), a !== i && l.isPropagationStopped()))
              break e;
            (Hs(l, u, m), (i = a));
          }
        else
          for (o = 0; o < r.length; o++) {
            if (
              ((u = r[o]),
              (a = u.instance),
              (m = u.currentTarget),
              (u = u.listener),
              a !== i && l.isPropagationStopped())
            )
              break e;
            (Hs(l, u, m), (i = a));
          }
      }
    }
    if (Er) throw ((e = Ql), (Er = !1), (Ql = null), e);
  }
  function te(e, t) {
    var n = t[Si];
    n === void 0 && (n = t[Si] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Qs(t, e, 2, !1), n.add(r));
  }
  function hi(e, t, n) {
    var r = 0;
    (t && (r |= 4), Qs(n, e, r, t));
  }
  var Hr = "_reactListening" + Math.random().toString(36).slice(2);
  function tr(e) {
    if (!e[Hr]) {
      ((e[Hr] = !0),
        L.forEach(function (n) {
          n !== "selectionchange" && (lf.has(n) || hi(n, !1, e), hi(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Hr] || ((t[Hr] = !0), hi("selectionchange", !1, t));
    }
  }
  function Qs(e, t, n, r) {
    switch (ms(t)) {
      case 1:
        var l = gc;
        break;
      case 4:
        l = xc;
        break;
      default:
        l = ql;
    }
    ((n = l.bind(null, t, n, e)),
      (l = void 0),
      !Wl ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
          ? e.addEventListener(t, n, { passive: l })
          : e.addEventListener(t, n, !1));
  }
  function yi(e, t, n, r, l) {
    var i = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
      e: for (;;) {
        if (r === null) return;
        var o = r.tag;
        if (o === 3 || o === 4) {
          var u = r.stateNode.containerInfo;
          if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
          if (o === 4)
            for (o = r.return; o !== null; ) {
              var a = o.tag;
              if (
                (a === 3 || a === 4) &&
                ((a = o.stateNode.containerInfo),
                a === l || (a.nodeType === 8 && a.parentNode === l))
              )
                return;
              o = o.return;
            }
          for (; u !== null; ) {
            if (((o = Zt(u)), o === null)) return;
            if (((a = o.tag), a === 5 || a === 6)) {
              r = i = o;
              continue e;
            }
            u = u.parentNode;
          }
        }
        r = r.return;
      }
    Zo(function () {
      var m = i,
        g = $l(n),
        w = [];
      e: {
        var y = $s.get(e);
        if (y !== void 0) {
          var N = ti,
            _ = e;
          switch (e) {
            case "keypress":
              if (Fr(n) === 0) break e;
            case "keydown":
            case "keyup":
              N = Dc;
              break;
            case "focusin":
              ((_ = "focus"), (N = li));
              break;
            case "focusout":
              ((_ = "blur"), (N = li));
              break;
            case "beforeblur":
            case "afterblur":
              N = li;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              N = vs;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              N = Sc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              N = Fc;
              break;
            case Fs:
            case As:
            case Us:
              N = Cc;
              break;
            case Bs:
              N = Uc;
              break;
            case "scroll":
              N = wc;
              break;
            case "wheel":
              N = $c;
              break;
            case "copy":
            case "cut":
            case "paste":
              N = _c;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              N = xs;
          }
          var z = (t & 4) !== 0,
            de = !z && e === "scroll",
            d = z ? (y !== null ? y + "Capture" : null) : y;
          z = [];
          for (var c = m, p; c !== null; ) {
            p = c;
            var k = p.stateNode;
            if (
              (p.tag === 5 &&
                k !== null &&
                ((p = k),
                d !== null &&
                  ((k = Fn(c, d)), k != null && z.push(nr(c, k, p)))),
              de)
            )
              break;
            c = c.return;
          }
          0 < z.length &&
            ((y = new N(y, _, null, n, g)), w.push({ event: y, listeners: z }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((y = e === "mouseover" || e === "pointerover"),
            (N = e === "mouseout" || e === "pointerout"),
            y &&
              n !== Bl &&
              (_ = n.relatedTarget || n.fromElement) &&
              (Zt(_) || _[wt]))
          )
            break e;
          if (
            (N || y) &&
            ((y =
              g.window === g
                ? g
                : (y = g.ownerDocument)
                  ? y.defaultView || y.parentWindow
                  : window),
            N
              ? ((_ = n.relatedTarget || n.toElement),
                (N = m),
                (_ = _ ? Zt(_) : null),
                _ !== null &&
                  ((de = Xt(_)), _ !== de || (_.tag !== 5 && _.tag !== 6)) &&
                  (_ = null))
              : ((N = null), (_ = m)),
            N !== _)
          ) {
            if (
              ((z = vs),
              (k = "onMouseLeave"),
              (d = "onMouseEnter"),
              (c = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((z = xs),
                (k = "onPointerLeave"),
                (d = "onPointerEnter"),
                (c = "pointer")),
              (de = N == null ? y : xn(N)),
              (p = _ == null ? y : xn(_)),
              (y = new z(k, c + "leave", N, n, g)),
              (y.target = de),
              (y.relatedTarget = p),
              (k = null),
              Zt(g) === m &&
                ((z = new z(d, c + "enter", _, n, g)),
                (z.target = p),
                (z.relatedTarget = de),
                (k = z)),
              (de = k),
              N && _)
            )
              t: {
                for (z = N, d = _, c = 0, p = z; p; p = vn(p)) c++;
                for (p = 0, k = d; k; k = vn(k)) p++;
                for (; 0 < c - p; ) ((z = vn(z)), c--);
                for (; 0 < p - c; ) ((d = vn(d)), p--);
                for (; c--; ) {
                  if (z === d || (d !== null && z === d.alternate)) break t;
                  ((z = vn(z)), (d = vn(d)));
                }
                z = null;
              }
            else z = null;
            (N !== null && Ks(w, y, N, z, !1),
              _ !== null && de !== null && Ks(w, de, _, z, !0));
          }
        }
        e: {
          if (
            ((y = m ? xn(m) : window),
            (N = y.nodeName && y.nodeName.toLowerCase()),
            N === "select" || (N === "input" && y.type === "file"))
          )
            var P = Yc;
          else if (Cs(y))
            if (_s) P = qc;
            else {
              P = Zc;
              var M = Xc;
            }
          else
            (N = y.nodeName) &&
              N.toLowerCase() === "input" &&
              (y.type === "checkbox" || y.type === "radio") &&
              (P = Jc);
          if (P && (P = P(e, m))) {
            Es(w, P, n, g);
            break e;
          }
          (M && M(e, y, m),
            e === "focusout" &&
              (M = y._wrapperState) &&
              M.controlled &&
              y.type === "number" &&
              Il(y, "number", y.value));
        }
        switch (((M = m ? xn(m) : window), e)) {
          case "focusin":
            (Cs(M) || M.contentEditable === "true") &&
              ((hn = M), (ci = m), (bn = null));
            break;
          case "focusout":
            bn = ci = hn = null;
            break;
          case "mousedown":
            fi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((fi = !1), Is(w, n, g));
            break;
          case "selectionchange":
            if (tf) break;
          case "keydown":
          case "keyup":
            Is(w, n, g);
        }
        var R;
        if (oi)
          e: {
            switch (e) {
              case "compositionstart":
                var O = "onCompositionStart";
                break e;
              case "compositionend":
                O = "onCompositionEnd";
                break e;
              case "compositionupdate":
                O = "onCompositionUpdate";
                break e;
            }
            O = void 0;
          }
        else
          mn
            ? js(e, n) && (O = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (O = "onCompositionStart");
        (O &&
          (ws &&
            n.locale !== "ko" &&
            (mn || O !== "onCompositionStart"
              ? O === "onCompositionEnd" && mn && (R = hs())
              : ((Rt = g),
                (ei = "value" in Rt ? Rt.value : Rt.textContent),
                (mn = !0))),
          (M = Wr(m, O)),
          0 < M.length &&
            ((O = new gs(O, e, null, n, g)),
            w.push({ event: O, listeners: M }),
            R ? (O.data = R) : ((R = Ns(n)), R !== null && (O.data = R)))),
          (R = Hc ? Wc(e, n) : Qc(e, n)) &&
            ((m = Wr(m, "onBeforeInput")),
            0 < m.length &&
              ((g = new gs("onBeforeInput", "beforeinput", null, n, g)),
              w.push({ event: g, listeners: m }),
              (g.data = R))));
      }
      Ws(w, t);
    });
  }
  function nr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Wr(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e,
        i = l.stateNode;
      (l.tag === 5 &&
        i !== null &&
        ((l = i),
        (i = Fn(e, n)),
        i != null && r.unshift(nr(e, i, l)),
        (i = Fn(e, t)),
        i != null && r.push(nr(e, i, l))),
        (e = e.return));
    }
    return r;
  }
  function vn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Ks(e, t, n, r, l) {
    for (var i = t._reactName, o = []; n !== null && n !== r; ) {
      var u = n,
        a = u.alternate,
        m = u.stateNode;
      if (a !== null && a === r) break;
      (u.tag === 5 &&
        m !== null &&
        ((u = m),
        l
          ? ((a = Fn(n, i)), a != null && o.unshift(nr(n, a, u)))
          : l || ((a = Fn(n, i)), a != null && o.push(nr(n, a, u)))),
        (n = n.return));
    }
    o.length !== 0 && e.push({ event: t, listeners: o });
  }
  var of = /\r\n?/g,
    sf = /\u0000|\uFFFD/g;
  function Gs(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        of,
        `
`,
      )
      .replace(sf, "");
  }
  function Qr(e, t, n) {
    if (((t = Gs(t)), Gs(e) !== t && n)) throw Error(h(425));
  }
  function Kr() {}
  var vi = null,
    gi = null;
  function xi(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var wi = typeof setTimeout == "function" ? setTimeout : void 0,
    uf = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Ys = typeof Promise == "function" ? Promise : void 0,
    af =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Ys < "u"
          ? function (e) {
              return Ys.resolve(null).then(e).catch(cf);
            }
          : wi;
  function cf(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function ki(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === "/$")) {
          if (r === 0) {
            (e.removeChild(l), Kn(t));
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = l;
    } while (n);
    Kn(t);
  }
  function It(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Xs(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var gn = Math.random().toString(36).slice(2),
    mt = "__reactFiber$" + gn,
    rr = "__reactProps$" + gn,
    wt = "__reactContainer$" + gn,
    Si = "__reactEvents$" + gn,
    ff = "__reactListeners$" + gn,
    df = "__reactHandles$" + gn;
  function Zt(e) {
    var t = e[mt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[wt] || n[mt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Xs(e); e !== null; ) {
            if ((n = e[mt])) return n;
            e = Xs(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function lr(e) {
    return (
      (e = e[mt] || e[wt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function xn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(h(33));
  }
  function Gr(e) {
    return e[rr] || null;
  }
  var ji = [],
    wn = -1;
  function Ot(e) {
    return { current: e };
  }
  function ne(e) {
    0 > wn || ((e.current = ji[wn]), (ji[wn] = null), wn--);
  }
  function b(e, t) {
    (wn++, (ji[wn] = e.current), (e.current = t));
  }
  var Ft = {},
    Ne = Ot(Ft),
    Re = Ot(!1),
    Jt = Ft;
  function kn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Ft;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      i;
    for (i in n) l[i] = t[i];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function De(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function Yr() {
    (ne(Re), ne(Ne));
  }
  function Zs(e, t, n) {
    if (Ne.current !== Ft) throw Error(h(168));
    (b(Ne, t), b(Re, n));
  }
  function Js(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(h(108, q(e) || "Unknown", l));
    return E({}, n, r);
  }
  function Xr(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Ft),
      (Jt = Ne.current),
      b(Ne, e),
      b(Re, Re.current),
      !0
    );
  }
  function qs(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(h(169));
    (n
      ? ((e = Js(e, t, Jt)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        ne(Re),
        ne(Ne),
        b(Ne, e))
      : ne(Re),
      b(Re, n));
  }
  var kt = null,
    Zr = !1,
    Ni = !1;
  function bs(e) {
    kt === null ? (kt = [e]) : kt.push(e);
  }
  function pf(e) {
    ((Zr = !0), bs(e));
  }
  function At() {
    if (!Ni && kt !== null) {
      Ni = !0;
      var e = 0,
        t = X;
      try {
        var n = kt;
        for (X = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        ((kt = null), (Zr = !1));
      } catch (l) {
        throw (kt !== null && (kt = kt.slice(e + 1)), ts(Kl, At), l);
      } finally {
        ((X = t), (Ni = !1));
      }
    }
    return null;
  }
  var Sn = [],
    jn = 0,
    Jr = null,
    qr = 0,
    Ye = [],
    Xe = 0,
    qt = null,
    St = 1,
    jt = "";
  function bt(e, t) {
    ((Sn[jn++] = qr), (Sn[jn++] = Jr), (Jr = e), (qr = t));
  }
  function eu(e, t, n) {
    ((Ye[Xe++] = St), (Ye[Xe++] = jt), (Ye[Xe++] = qt), (qt = e));
    var r = St;
    e = jt;
    var l = 32 - rt(r) - 1;
    ((r &= ~(1 << l)), (n += 1));
    var i = 32 - rt(t) + l;
    if (30 < i) {
      var o = l - (l % 5);
      ((i = (r & ((1 << o) - 1)).toString(32)),
        (r >>= o),
        (l -= o),
        (St = (1 << (32 - rt(t) + l)) | (n << l) | r),
        (jt = i + e));
    } else ((St = (1 << i) | (n << l) | r), (jt = e));
  }
  function Ci(e) {
    e.return !== null && (bt(e, 1), eu(e, 1, 0));
  }
  function Ei(e) {
    for (; e === Jr; )
      ((Jr = Sn[--jn]), (Sn[jn] = null), (qr = Sn[--jn]), (Sn[jn] = null));
    for (; e === qt; )
      ((qt = Ye[--Xe]),
        (Ye[Xe] = null),
        (jt = Ye[--Xe]),
        (Ye[Xe] = null),
        (St = Ye[--Xe]),
        (Ye[Xe] = null));
  }
  var Ve = null,
    He = null,
    ie = !1,
    it = null;
  function tu(e, t) {
    var n = be(5, null, null, 0);
    ((n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
  }
  function nu(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (Ve = e), (He = It(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (Ve = e), (He = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = qt !== null ? { id: St, overflow: jt } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = be(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (Ve = e),
              (He = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function _i(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function zi(e) {
    if (ie) {
      var t = He;
      if (t) {
        var n = t;
        if (!nu(e, t)) {
          if (_i(e)) throw Error(h(418));
          t = It(n.nextSibling);
          var r = Ve;
          t && nu(e, t)
            ? tu(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (ie = !1), (Ve = e));
        }
      } else {
        if (_i(e)) throw Error(h(418));
        ((e.flags = (e.flags & -4097) | 2), (ie = !1), (Ve = e));
      }
    }
  }
  function ru(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;
    )
      e = e.return;
    Ve = e;
  }
  function br(e) {
    if (e !== Ve) return !1;
    if (!ie) return (ru(e), (ie = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !xi(e.type, e.memoizedProps))),
      t && (t = He))
    ) {
      if (_i(e)) throw (lu(), Error(h(418)));
      for (; t; ) (tu(e, t), (t = It(t.nextSibling)));
    }
    if ((ru(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(h(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                He = It(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        He = null;
      }
    } else He = Ve ? It(e.stateNode.nextSibling) : null;
    return !0;
  }
  function lu() {
    for (var e = He; e; ) e = It(e.nextSibling);
  }
  function Nn() {
    ((He = Ve = null), (ie = !1));
  }
  function Pi(e) {
    it === null ? (it = [e]) : it.push(e);
  }
  var mf = je.ReactCurrentBatchConfig;
  function ir(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(h(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(h(147, e));
        var l = r,
          i = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === i
          ? t.ref
          : ((t = function (o) {
              var u = l.refs;
              o === null ? delete u[i] : (u[i] = o);
            }),
            (t._stringRef = i),
            t);
      }
      if (typeof e != "string") throw Error(h(284));
      if (!n._owner) throw Error(h(290, e));
    }
    return e;
  }
  function el(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        h(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e,
        ),
      )
    );
  }
  function iu(e) {
    var t = e._init;
    return t(e._payload);
  }
  function ou(e) {
    function t(d, c) {
      if (e) {
        var p = d.deletions;
        p === null ? ((d.deletions = [c]), (d.flags |= 16)) : p.push(c);
      }
    }
    function n(d, c) {
      if (!e) return null;
      for (; c !== null; ) (t(d, c), (c = c.sibling));
      return null;
    }
    function r(d, c) {
      for (d = new Map(); c !== null; )
        (c.key !== null ? d.set(c.key, c) : d.set(c.index, c), (c = c.sibling));
      return d;
    }
    function l(d, c) {
      return ((d = Kt(d, c)), (d.index = 0), (d.sibling = null), d);
    }
    function i(d, c, p) {
      return (
        (d.index = p),
        e
          ? ((p = d.alternate),
            p !== null
              ? ((p = p.index), p < c ? ((d.flags |= 2), c) : p)
              : ((d.flags |= 2), c))
          : ((d.flags |= 1048576), c)
      );
    }
    function o(d) {
      return (e && d.alternate === null && (d.flags |= 2), d);
    }
    function u(d, c, p, k) {
      return c === null || c.tag !== 6
        ? ((c = ko(p, d.mode, k)), (c.return = d), c)
        : ((c = l(c, p)), (c.return = d), c);
    }
    function a(d, c, p, k) {
      var P = p.type;
      return P === Te
        ? g(d, c, p.props.children, k, p.key)
        : c !== null &&
            (c.elementType === P ||
              (typeof P == "object" &&
                P !== null &&
                P.$$typeof === Me &&
                iu(P) === c.type))
          ? ((k = l(c, p.props)), (k.ref = ir(d, c, p)), (k.return = d), k)
          : ((k = Nl(p.type, p.key, p.props, null, d.mode, k)),
            (k.ref = ir(d, c, p)),
            (k.return = d),
            k);
    }
    function m(d, c, p, k) {
      return c === null ||
        c.tag !== 4 ||
        c.stateNode.containerInfo !== p.containerInfo ||
        c.stateNode.implementation !== p.implementation
        ? ((c = So(p, d.mode, k)), (c.return = d), c)
        : ((c = l(c, p.children || [])), (c.return = d), c);
    }
    function g(d, c, p, k, P) {
      return c === null || c.tag !== 7
        ? ((c = un(p, d.mode, k, P)), (c.return = d), c)
        : ((c = l(c, p)), (c.return = d), c);
    }
    function w(d, c, p) {
      if ((typeof c == "string" && c !== "") || typeof c == "number")
        return ((c = ko("" + c, d.mode, p)), (c.return = d), c);
      if (typeof c == "object" && c !== null) {
        switch (c.$$typeof) {
          case tt:
            return (
              (p = Nl(c.type, c.key, c.props, null, d.mode, p)),
              (p.ref = ir(d, null, c)),
              (p.return = d),
              p
            );
          case ze:
            return ((c = So(c, d.mode, p)), (c.return = d), c);
          case Me:
            var k = c._init;
            return w(d, k(c._payload), p);
        }
        if (Dn(c) || D(c))
          return ((c = un(c, d.mode, p, null)), (c.return = d), c);
        el(d, c);
      }
      return null;
    }
    function y(d, c, p, k) {
      var P = c !== null ? c.key : null;
      if ((typeof p == "string" && p !== "") || typeof p == "number")
        return P !== null ? null : u(d, c, "" + p, k);
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case tt:
            return p.key === P ? a(d, c, p, k) : null;
          case ze:
            return p.key === P ? m(d, c, p, k) : null;
          case Me:
            return ((P = p._init), y(d, c, P(p._payload), k));
        }
        if (Dn(p) || D(p)) return P !== null ? null : g(d, c, p, k, null);
        el(d, p);
      }
      return null;
    }
    function N(d, c, p, k, P) {
      if ((typeof k == "string" && k !== "") || typeof k == "number")
        return ((d = d.get(p) || null), u(c, d, "" + k, P));
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case tt:
            return (
              (d = d.get(k.key === null ? p : k.key) || null),
              a(c, d, k, P)
            );
          case ze:
            return (
              (d = d.get(k.key === null ? p : k.key) || null),
              m(c, d, k, P)
            );
          case Me:
            var M = k._init;
            return N(d, c, p, M(k._payload), P);
        }
        if (Dn(k) || D(k)) return ((d = d.get(p) || null), g(c, d, k, P, null));
        el(c, k);
      }
      return null;
    }
    function _(d, c, p, k) {
      for (
        var P = null, M = null, R = c, O = (c = 0), ge = null;
        R !== null && O < p.length;
        O++
      ) {
        R.index > O ? ((ge = R), (R = null)) : (ge = R.sibling);
        var K = y(d, R, p[O], k);
        if (K === null) {
          R === null && (R = ge);
          break;
        }
        (e && R && K.alternate === null && t(d, R),
          (c = i(K, c, O)),
          M === null ? (P = K) : (M.sibling = K),
          (M = K),
          (R = ge));
      }
      if (O === p.length) return (n(d, R), ie && bt(d, O), P);
      if (R === null) {
        for (; O < p.length; O++)
          ((R = w(d, p[O], k)),
            R !== null &&
              ((c = i(R, c, O)),
              M === null ? (P = R) : (M.sibling = R),
              (M = R)));
        return (ie && bt(d, O), P);
      }
      for (R = r(d, R); O < p.length; O++)
        ((ge = N(R, d, O, p[O], k)),
          ge !== null &&
            (e &&
              ge.alternate !== null &&
              R.delete(ge.key === null ? O : ge.key),
            (c = i(ge, c, O)),
            M === null ? (P = ge) : (M.sibling = ge),
            (M = ge)));
      return (
        e &&
          R.forEach(function (Gt) {
            return t(d, Gt);
          }),
        ie && bt(d, O),
        P
      );
    }
    function z(d, c, p, k) {
      var P = D(p);
      if (typeof P != "function") throw Error(h(150));
      if (((p = P.call(p)), p == null)) throw Error(h(151));
      for (
        var M = (P = null), R = c, O = (c = 0), ge = null, K = p.next();
        R !== null && !K.done;
        O++, K = p.next()
      ) {
        R.index > O ? ((ge = R), (R = null)) : (ge = R.sibling);
        var Gt = y(d, R, K.value, k);
        if (Gt === null) {
          R === null && (R = ge);
          break;
        }
        (e && R && Gt.alternate === null && t(d, R),
          (c = i(Gt, c, O)),
          M === null ? (P = Gt) : (M.sibling = Gt),
          (M = Gt),
          (R = ge));
      }
      if (K.done) return (n(d, R), ie && bt(d, O), P);
      if (R === null) {
        for (; !K.done; O++, K = p.next())
          ((K = w(d, K.value, k)),
            K !== null &&
              ((c = i(K, c, O)),
              M === null ? (P = K) : (M.sibling = K),
              (M = K)));
        return (ie && bt(d, O), P);
      }
      for (R = r(d, R); !K.done; O++, K = p.next())
        ((K = N(R, d, O, K.value, k)),
          K !== null &&
            (e && K.alternate !== null && R.delete(K.key === null ? O : K.key),
            (c = i(K, c, O)),
            M === null ? (P = K) : (M.sibling = K),
            (M = K)));
      return (
        e &&
          R.forEach(function (Gf) {
            return t(d, Gf);
          }),
        ie && bt(d, O),
        P
      );
    }
    function de(d, c, p, k) {
      if (
        (typeof p == "object" &&
          p !== null &&
          p.type === Te &&
          p.key === null &&
          (p = p.props.children),
        typeof p == "object" && p !== null)
      ) {
        switch (p.$$typeof) {
          case tt:
            e: {
              for (var P = p.key, M = c; M !== null; ) {
                if (M.key === P) {
                  if (((P = p.type), P === Te)) {
                    if (M.tag === 7) {
                      (n(d, M.sibling),
                        (c = l(M, p.props.children)),
                        (c.return = d),
                        (d = c));
                      break e;
                    }
                  } else if (
                    M.elementType === P ||
                    (typeof P == "object" &&
                      P !== null &&
                      P.$$typeof === Me &&
                      iu(P) === M.type)
                  ) {
                    (n(d, M.sibling),
                      (c = l(M, p.props)),
                      (c.ref = ir(d, M, p)),
                      (c.return = d),
                      (d = c));
                    break e;
                  }
                  n(d, M);
                  break;
                } else t(d, M);
                M = M.sibling;
              }
              p.type === Te
                ? ((c = un(p.props.children, d.mode, k, p.key)),
                  (c.return = d),
                  (d = c))
                : ((k = Nl(p.type, p.key, p.props, null, d.mode, k)),
                  (k.ref = ir(d, c, p)),
                  (k.return = d),
                  (d = k));
            }
            return o(d);
          case ze:
            e: {
              for (M = p.key; c !== null; ) {
                if (c.key === M)
                  if (
                    c.tag === 4 &&
                    c.stateNode.containerInfo === p.containerInfo &&
                    c.stateNode.implementation === p.implementation
                  ) {
                    (n(d, c.sibling),
                      (c = l(c, p.children || [])),
                      (c.return = d),
                      (d = c));
                    break e;
                  } else {
                    n(d, c);
                    break;
                  }
                else t(d, c);
                c = c.sibling;
              }
              ((c = So(p, d.mode, k)), (c.return = d), (d = c));
            }
            return o(d);
          case Me:
            return ((M = p._init), de(d, c, M(p._payload), k));
        }
        if (Dn(p)) return _(d, c, p, k);
        if (D(p)) return z(d, c, p, k);
        el(d, p);
      }
      return (typeof p == "string" && p !== "") || typeof p == "number"
        ? ((p = "" + p),
          c !== null && c.tag === 6
            ? (n(d, c.sibling), (c = l(c, p)), (c.return = d), (d = c))
            : (n(d, c), (c = ko(p, d.mode, k)), (c.return = d), (d = c)),
          o(d))
        : n(d, c);
    }
    return de;
  }
  var Cn = ou(!0),
    su = ou(!1),
    tl = Ot(null),
    nl = null,
    En = null,
    Li = null;
  function Ti() {
    Li = En = nl = null;
  }
  function Mi(e) {
    var t = tl.current;
    (ne(tl), (e._currentValue = t));
  }
  function Ri(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function _n(e, t) {
    ((nl = e),
      (Li = En = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (Ie = !0), (e.firstContext = null)));
  }
  function Ze(e) {
    var t = e._currentValue;
    if (Li !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), En === null)) {
        if (nl === null) throw Error(h(308));
        ((En = e), (nl.dependencies = { lanes: 0, firstContext: e }));
      } else En = En.next = e;
    return t;
  }
  var en = null;
  function Di(e) {
    en === null ? (en = [e]) : en.push(e);
  }
  function uu(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), Di(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      Nt(e, r)
    );
  }
  function Nt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      ((e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return));
    return n.tag === 3 ? n.stateNode : null;
  }
  var Ut = !1;
  function Ii(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function au(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        }));
  }
  function Ct(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Bt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), (H & 2) !== 0)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        Nt(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), Di(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      Nt(e, n)
    );
  }
  function rl(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Xl(e, n));
    }
  }
  function cu(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var l = null,
        i = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var o = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          (i === null ? (l = i = o) : (i = i.next = o), (n = n.next));
        } while (n !== null);
        i === null ? (l = i = t) : (i = i.next = t);
      } else l = i = t;
      ((n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: i,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n));
      return;
    }
    ((e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t));
  }
  function ll(e, t, n, r) {
    var l = e.updateQueue;
    Ut = !1;
    var i = l.firstBaseUpdate,
      o = l.lastBaseUpdate,
      u = l.shared.pending;
    if (u !== null) {
      l.shared.pending = null;
      var a = u,
        m = a.next;
      ((a.next = null), o === null ? (i = m) : (o.next = m), (o = a));
      var g = e.alternate;
      g !== null &&
        ((g = g.updateQueue),
        (u = g.lastBaseUpdate),
        u !== o &&
          (u === null ? (g.firstBaseUpdate = m) : (u.next = m),
          (g.lastBaseUpdate = a)));
    }
    if (i !== null) {
      var w = l.baseState;
      ((o = 0), (g = m = a = null), (u = i));
      do {
        var y = u.lane,
          N = u.eventTime;
        if ((r & y) === y) {
          g !== null &&
            (g = g.next =
              {
                eventTime: N,
                lane: 0,
                tag: u.tag,
                payload: u.payload,
                callback: u.callback,
                next: null,
              });
          e: {
            var _ = e,
              z = u;
            switch (((y = t), (N = n), z.tag)) {
              case 1:
                if (((_ = z.payload), typeof _ == "function")) {
                  w = _.call(N, w, y);
                  break e;
                }
                w = _;
                break e;
              case 3:
                _.flags = (_.flags & -65537) | 128;
              case 0:
                if (
                  ((_ = z.payload),
                  (y = typeof _ == "function" ? _.call(N, w, y) : _),
                  y == null)
                )
                  break e;
                w = E({}, w, y);
                break e;
              case 2:
                Ut = !0;
            }
          }
          u.callback !== null &&
            u.lane !== 0 &&
            ((e.flags |= 64),
            (y = l.effects),
            y === null ? (l.effects = [u]) : y.push(u));
        } else
          ((N = {
            eventTime: N,
            lane: y,
            tag: u.tag,
            payload: u.payload,
            callback: u.callback,
            next: null,
          }),
            g === null ? ((m = g = N), (a = w)) : (g = g.next = N),
            (o |= y));
        if (((u = u.next), u === null)) {
          if (((u = l.shared.pending), u === null)) break;
          ((y = u),
            (u = y.next),
            (y.next = null),
            (l.lastBaseUpdate = y),
            (l.shared.pending = null));
        }
      } while (!0);
      if (
        (g === null && (a = w),
        (l.baseState = a),
        (l.firstBaseUpdate = m),
        (l.lastBaseUpdate = g),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do ((o |= l.lane), (l = l.next));
        while (l !== t);
      } else i === null && (l.shared.lanes = 0);
      ((rn |= o), (e.lanes = o), (e.memoizedState = w));
    }
  }
  function fu(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != "function"))
            throw Error(h(191, l));
          l.call(r);
        }
      }
  }
  var or = {},
    ht = Ot(or),
    sr = Ot(or),
    ur = Ot(or);
  function tn(e) {
    if (e === or) throw Error(h(174));
    return e;
  }
  function Oi(e, t) {
    switch ((b(ur, t), b(sr, e), b(ht, or), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Fl(null, "");
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Fl(t, e)));
    }
    (ne(ht), b(ht, t));
  }
  function zn() {
    (ne(ht), ne(sr), ne(ur));
  }
  function du(e) {
    tn(ur.current);
    var t = tn(ht.current),
      n = Fl(t, e.type);
    t !== n && (b(sr, e), b(ht, n));
  }
  function Fi(e) {
    sr.current === e && (ne(ht), ne(sr));
  }
  var oe = Ot(0);
  function il(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var Ai = [];
  function Ui() {
    for (var e = 0; e < Ai.length; e++)
      Ai[e]._workInProgressVersionPrimary = null;
    Ai.length = 0;
  }
  var ol = je.ReactCurrentDispatcher,
    Bi = je.ReactCurrentBatchConfig,
    nn = 0,
    se = null,
    me = null,
    ye = null,
    sl = !1,
    ar = !1,
    cr = 0,
    hf = 0;
  function Ce() {
    throw Error(h(321));
  }
  function $i(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!lt(e[n], t[n])) return !1;
    return !0;
  }
  function Vi(e, t, n, r, l, i) {
    if (
      ((nn = i),
      (se = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (ol.current = e === null || e.memoizedState === null ? xf : wf),
      (e = n(r, l)),
      ar)
    ) {
      i = 0;
      do {
        if (((ar = !1), (cr = 0), 25 <= i)) throw Error(h(301));
        ((i += 1),
          (ye = me = null),
          (t.updateQueue = null),
          (ol.current = kf),
          (e = n(r, l)));
      } while (ar);
    }
    if (
      ((ol.current = cl),
      (t = me !== null && me.next !== null),
      (nn = 0),
      (ye = me = se = null),
      (sl = !1),
      t)
    )
      throw Error(h(300));
    return e;
  }
  function Hi() {
    var e = cr !== 0;
    return ((cr = 0), e);
  }
  function yt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (ye === null ? (se.memoizedState = ye = e) : (ye = ye.next = e), ye);
  }
  function Je() {
    if (me === null) {
      var e = se.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = me.next;
    var t = ye === null ? se.memoizedState : ye.next;
    if (t !== null) ((ye = t), (me = e));
    else {
      if (e === null) throw Error(h(310));
      ((me = e),
        (e = {
          memoizedState: me.memoizedState,
          baseState: me.baseState,
          baseQueue: me.baseQueue,
          queue: me.queue,
          next: null,
        }),
        ye === null ? (se.memoizedState = ye = e) : (ye = ye.next = e));
    }
    return ye;
  }
  function fr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Wi(e) {
    var t = Je(),
      n = t.queue;
    if (n === null) throw Error(h(311));
    n.lastRenderedReducer = e;
    var r = me,
      l = r.baseQueue,
      i = n.pending;
    if (i !== null) {
      if (l !== null) {
        var o = l.next;
        ((l.next = i.next), (i.next = o));
      }
      ((r.baseQueue = l = i), (n.pending = null));
    }
    if (l !== null) {
      ((i = l.next), (r = r.baseState));
      var u = (o = null),
        a = null,
        m = i;
      do {
        var g = m.lane;
        if ((nn & g) === g)
          (a !== null &&
            (a = a.next =
              {
                lane: 0,
                action: m.action,
                hasEagerState: m.hasEagerState,
                eagerState: m.eagerState,
                next: null,
              }),
            (r = m.hasEagerState ? m.eagerState : e(r, m.action)));
        else {
          var w = {
            lane: g,
            action: m.action,
            hasEagerState: m.hasEagerState,
            eagerState: m.eagerState,
            next: null,
          };
          (a === null ? ((u = a = w), (o = r)) : (a = a.next = w),
            (se.lanes |= g),
            (rn |= g));
        }
        m = m.next;
      } while (m !== null && m !== i);
      (a === null ? (o = r) : (a.next = u),
        lt(r, t.memoizedState) || (Ie = !0),
        (t.memoizedState = r),
        (t.baseState = o),
        (t.baseQueue = a),
        (n.lastRenderedState = r));
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do ((i = l.lane), (se.lanes |= i), (rn |= i), (l = l.next));
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Qi(e) {
    var t = Je(),
      n = t.queue;
    if (n === null) throw Error(h(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      i = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var o = (l = l.next);
      do ((i = e(i, o.action)), (o = o.next));
      while (o !== l);
      (lt(i, t.memoizedState) || (Ie = !0),
        (t.memoizedState = i),
        t.baseQueue === null && (t.baseState = i),
        (n.lastRenderedState = i));
    }
    return [i, r];
  }
  function pu() {}
  function mu(e, t) {
    var n = se,
      r = Je(),
      l = t(),
      i = !lt(r.memoizedState, l);
    if (
      (i && ((r.memoizedState = l), (Ie = !0)),
      (r = r.queue),
      Ki(vu.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || i || (ye !== null && ye.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        dr(9, yu.bind(null, n, r, l, t), void 0, null),
        ve === null)
      )
        throw Error(h(349));
      (nn & 30) !== 0 || hu(n, t, l);
    }
    return l;
  }
  function hu(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = se.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (se.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function yu(e, t, n, r) {
    ((t.value = n), (t.getSnapshot = r), gu(t) && xu(e));
  }
  function vu(e, t, n) {
    return n(function () {
      gu(t) && xu(e);
    });
  }
  function gu(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !lt(e, n);
    } catch {
      return !0;
    }
  }
  function xu(e) {
    var t = Nt(e, 1);
    t !== null && at(t, e, 1, -1);
  }
  function wu(e) {
    var t = yt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = gf.bind(null, se, e)),
      [t.memoizedState, e]
    );
  }
  function dr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = se.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (se.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function ku() {
    return Je().memoizedState;
  }
  function ul(e, t, n, r) {
    var l = yt();
    ((se.flags |= e),
      (l.memoizedState = dr(1 | t, n, void 0, r === void 0 ? null : r)));
  }
  function al(e, t, n, r) {
    var l = Je();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (me !== null) {
      var o = me.memoizedState;
      if (((i = o.destroy), r !== null && $i(r, o.deps))) {
        l.memoizedState = dr(t, n, i, r);
        return;
      }
    }
    ((se.flags |= e), (l.memoizedState = dr(1 | t, n, i, r)));
  }
  function Su(e, t) {
    return ul(8390656, 8, e, t);
  }
  function Ki(e, t) {
    return al(2048, 8, e, t);
  }
  function ju(e, t) {
    return al(4, 2, e, t);
  }
  function Nu(e, t) {
    return al(4, 4, e, t);
  }
  function Cu(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Eu(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null),
      al(4, 4, Cu.bind(null, t, e), n)
    );
  }
  function Gi() {}
  function _u(e, t) {
    var n = Je();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && $i(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function zu(e, t) {
    var n = Je();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && $i(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Pu(e, t, n) {
    return (nn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (Ie = !0)), (e.memoizedState = n))
      : (lt(n, t) ||
          ((n = is()), (se.lanes |= n), (rn |= n), (e.baseState = !0)),
        t);
  }
  function yf(e, t) {
    var n = X;
    ((X = n !== 0 && 4 > n ? n : 4), e(!0));
    var r = Bi.transition;
    Bi.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((X = n), (Bi.transition = r));
    }
  }
  function Lu() {
    return Je().memoizedState;
  }
  function vf(e, t, n) {
    var r = Wt(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Tu(e))
    )
      Mu(t, n);
    else if (((n = uu(e, t, n, r)), n !== null)) {
      var l = Le();
      (at(n, e, r, l), Ru(n, t, r));
    }
  }
  function gf(e, t, n) {
    var r = Wt(e),
      l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Tu(e)) Mu(t, l);
    else {
      var i = e.alternate;
      if (
        e.lanes === 0 &&
        (i === null || i.lanes === 0) &&
        ((i = t.lastRenderedReducer), i !== null)
      )
        try {
          var o = t.lastRenderedState,
            u = i(o, n);
          if (((l.hasEagerState = !0), (l.eagerState = u), lt(u, o))) {
            var a = t.interleaved;
            (a === null
              ? ((l.next = l), Di(t))
              : ((l.next = a.next), (a.next = l)),
              (t.interleaved = l));
            return;
          }
        } catch {
        } finally {
        }
      ((n = uu(e, t, l, r)),
        n !== null && ((l = Le()), at(n, e, r, l), Ru(n, t, r)));
    }
  }
  function Tu(e) {
    var t = e.alternate;
    return e === se || (t !== null && t === se);
  }
  function Mu(e, t) {
    ar = sl = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t));
  }
  function Ru(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Xl(e, n));
    }
  }
  var cl = {
      readContext: Ze,
      useCallback: Ce,
      useContext: Ce,
      useEffect: Ce,
      useImperativeHandle: Ce,
      useInsertionEffect: Ce,
      useLayoutEffect: Ce,
      useMemo: Ce,
      useReducer: Ce,
      useRef: Ce,
      useState: Ce,
      useDebugValue: Ce,
      useDeferredValue: Ce,
      useTransition: Ce,
      useMutableSource: Ce,
      useSyncExternalStore: Ce,
      useId: Ce,
      unstable_isNewReconciler: !1,
    },
    xf = {
      readContext: Ze,
      useCallback: function (e, t) {
        return ((yt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: Ze,
      useEffect: Su,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          ul(4194308, 4, Cu.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return ul(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return ul(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = yt();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = yt();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = vf.bind(null, se, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = yt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: wu,
      useDebugValue: Gi,
      useDeferredValue: function (e) {
        return (yt().memoizedState = e);
      },
      useTransition: function () {
        var e = wu(!1),
          t = e[0];
        return ((e = yf.bind(null, e[1])), (yt().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = se,
          l = yt();
        if (ie) {
          if (n === void 0) throw Error(h(407));
          n = n();
        } else {
          if (((n = t()), ve === null)) throw Error(h(349));
          (nn & 30) !== 0 || hu(r, t, n);
        }
        l.memoizedState = n;
        var i = { value: n, getSnapshot: t };
        return (
          (l.queue = i),
          Su(vu.bind(null, r, i, e), [e]),
          (r.flags |= 2048),
          dr(9, yu.bind(null, r, i, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = yt(),
          t = ve.identifierPrefix;
        if (ie) {
          var n = jt,
            r = St;
          ((n = (r & ~(1 << (32 - rt(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = cr++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":"));
        } else ((n = hf++), (t = ":" + t + "r" + n.toString(32) + ":"));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    wf = {
      readContext: Ze,
      useCallback: _u,
      useContext: Ze,
      useEffect: Ki,
      useImperativeHandle: Eu,
      useInsertionEffect: ju,
      useLayoutEffect: Nu,
      useMemo: zu,
      useReducer: Wi,
      useRef: ku,
      useState: function () {
        return Wi(fr);
      },
      useDebugValue: Gi,
      useDeferredValue: function (e) {
        var t = Je();
        return Pu(t, me.memoizedState, e);
      },
      useTransition: function () {
        var e = Wi(fr)[0],
          t = Je().memoizedState;
        return [e, t];
      },
      useMutableSource: pu,
      useSyncExternalStore: mu,
      useId: Lu,
      unstable_isNewReconciler: !1,
    },
    kf = {
      readContext: Ze,
      useCallback: _u,
      useContext: Ze,
      useEffect: Ki,
      useImperativeHandle: Eu,
      useInsertionEffect: ju,
      useLayoutEffect: Nu,
      useMemo: zu,
      useReducer: Qi,
      useRef: ku,
      useState: function () {
        return Qi(fr);
      },
      useDebugValue: Gi,
      useDeferredValue: function (e) {
        var t = Je();
        return me === null ? (t.memoizedState = e) : Pu(t, me.memoizedState, e);
      },
      useTransition: function () {
        var e = Qi(fr)[0],
          t = Je().memoizedState;
        return [e, t];
      },
      useMutableSource: pu,
      useSyncExternalStore: mu,
      useId: Lu,
      unstable_isNewReconciler: !1,
    };
  function ot(e, t) {
    if (e && e.defaultProps) {
      ((t = E({}, t)), (e = e.defaultProps));
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Yi(e, t, n, r) {
    ((t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : E({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var fl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Xt(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Le(),
        l = Wt(e),
        i = Ct(r, l);
      ((i.payload = t),
        n != null && (i.callback = n),
        (t = Bt(e, i, l)),
        t !== null && (at(t, e, l, r), rl(t, e, l)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Le(),
        l = Wt(e),
        i = Ct(r, l);
      ((i.tag = 1),
        (i.payload = t),
        n != null && (i.callback = n),
        (t = Bt(e, i, l)),
        t !== null && (at(t, e, l, r), rl(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Le(),
        r = Wt(e),
        l = Ct(n, r);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = Bt(e, l, r)),
        t !== null && (at(t, e, r, n), rl(t, e, r)));
    },
  };
  function Du(e, t, n, r, l, i, o) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, i, o)
        : t.prototype && t.prototype.isPureReactComponent
          ? !qn(n, r) || !qn(l, i)
          : !0
    );
  }
  function Iu(e, t, n) {
    var r = !1,
      l = Ft,
      i = t.contextType;
    return (
      typeof i == "object" && i !== null
        ? (i = Ze(i))
        : ((l = De(t) ? Jt : Ne.current),
          (r = t.contextTypes),
          (i = (r = r != null) ? kn(e, l) : Ft)),
      (t = new t(n, i)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = fl),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = i)),
      t
    );
  }
  function Ou(e, t, n, r) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && fl.enqueueReplaceState(t, t.state, null));
  }
  function Xi(e, t, n, r) {
    var l = e.stateNode;
    ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), Ii(e));
    var i = t.contextType;
    (typeof i == "object" && i !== null
      ? (l.context = Ze(i))
      : ((i = De(t) ? Jt : Ne.current), (l.context = kn(e, i))),
      (l.state = e.memoizedState),
      (i = t.getDerivedStateFromProps),
      typeof i == "function" && (Yi(e, t, i, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((t = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" &&
          l.UNSAFE_componentWillMount(),
        t !== l.state && fl.enqueueReplaceState(l, l.state, null),
        ll(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308));
  }
  function Pn(e, t) {
    try {
      var n = "",
        r = t;
      do ((n += W(r)), (r = r.return));
      while (r);
      var l = n;
    } catch (i) {
      l =
        `
Error generating stack: ` +
        i.message +
        `
` +
        i.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function Zi(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Ji(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var Sf = typeof WeakMap == "function" ? WeakMap : Map;
  function Fu(e, t, n) {
    ((n = Ct(-1, n)), (n.tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
      (n.callback = function () {
        (gl || ((gl = !0), (po = r)), Ji(e, t));
      }),
      n
    );
  }
  function Au(e, t, n) {
    ((n = Ct(-1, n)), (n.tag = 3));
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      ((n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          Ji(e, t);
        }));
    }
    var i = e.stateNode;
    return (
      i !== null &&
        typeof i.componentDidCatch == "function" &&
        (n.callback = function () {
          (Ji(e, t),
            typeof r != "function" &&
              (Vt === null ? (Vt = new Set([this])) : Vt.add(this)));
          var o = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : "",
          });
        }),
      n
    );
  }
  function Uu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Sf();
      var l = new Set();
      r.set(t, l);
    } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
    l.has(n) || (l.add(n), (e = Of.bind(null, e, t, n)), t.then(e, e));
  }
  function Bu(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function $u(e, t, n, r, l) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = Ct(-1, 1)), (t.tag = 2), Bt(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  var jf = je.ReactCurrentOwner,
    Ie = !1;
  function Pe(e, t, n, r) {
    t.child = e === null ? su(t, null, n, r) : Cn(t, e.child, n, r);
  }
  function Vu(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return (
      _n(t, l),
      (r = Vi(e, t, n, r, i, l)),
      (n = Hi()),
      e !== null && !Ie
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          Et(e, t, l))
        : (ie && n && Ci(t), (t.flags |= 1), Pe(e, t, r, l), t.child)
    );
  }
  function Hu(e, t, n, r, l) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" &&
        !wo(i) &&
        i.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = i), Wu(e, t, i, r, l))
        : ((e = Nl(n.type, null, r, t, t.mode, l)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((i = e.child), (e.lanes & l) === 0)) {
      var o = i.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : qn), n(o, r) && e.ref === t.ref)
      )
        return Et(e, t, l);
    }
    return (
      (t.flags |= 1),
      (e = Kt(i, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Wu(e, t, n, r, l) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (qn(i, r) && e.ref === t.ref)
        if (((Ie = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (Ie = !0);
        else return ((t.lanes = e.lanes), Et(e, t, l));
    }
    return qi(e, t, n, r, l);
  }
  function Qu(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if ((t.mode & 1) === 0)
        ((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          b(Tn, We),
          (We |= n));
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = i !== null ? i.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            b(Tn, We),
            (We |= e),
            null
          );
        ((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = i !== null ? i.baseLanes : n),
          b(Tn, We),
          (We |= r));
      }
    else
      (i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
        b(Tn, We),
        (We |= r));
    return (Pe(e, t, l, n), t.child);
  }
  function Ku(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function qi(e, t, n, r, l) {
    var i = De(n) ? Jt : Ne.current;
    return (
      (i = kn(t, i)),
      _n(t, l),
      (n = Vi(e, t, n, r, i, l)),
      (r = Hi()),
      e !== null && !Ie
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          Et(e, t, l))
        : (ie && r && Ci(t), (t.flags |= 1), Pe(e, t, n, l), t.child)
    );
  }
  function Gu(e, t, n, r, l) {
    if (De(n)) {
      var i = !0;
      Xr(t);
    } else i = !1;
    if ((_n(t, l), t.stateNode === null))
      (pl(e, t), Iu(t, n, r), Xi(t, n, r, l), (r = !0));
    else if (e === null) {
      var o = t.stateNode,
        u = t.memoizedProps;
      o.props = u;
      var a = o.context,
        m = n.contextType;
      typeof m == "object" && m !== null
        ? (m = Ze(m))
        : ((m = De(n) ? Jt : Ne.current), (m = kn(t, m)));
      var g = n.getDerivedStateFromProps,
        w =
          typeof g == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function";
      (w ||
        (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
          typeof o.componentWillReceiveProps != "function") ||
        ((u !== r || a !== m) && Ou(t, o, r, m)),
        (Ut = !1));
      var y = t.memoizedState;
      ((o.state = y),
        ll(t, r, o, l),
        (a = t.memoizedState),
        u !== r || y !== a || Re.current || Ut
          ? (typeof g == "function" && (Yi(t, n, g, r), (a = t.memoizedState)),
            (u = Ut || Du(t, n, u, r, y, a, m))
              ? (w ||
                  (typeof o.UNSAFE_componentWillMount != "function" &&
                    typeof o.componentWillMount != "function") ||
                  (typeof o.componentWillMount == "function" &&
                    o.componentWillMount(),
                  typeof o.UNSAFE_componentWillMount == "function" &&
                    o.UNSAFE_componentWillMount()),
                typeof o.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof o.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = a)),
            (o.props = r),
            (o.state = a),
            (o.context = m),
            (r = u))
          : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1)));
    } else {
      ((o = t.stateNode),
        au(e, t),
        (u = t.memoizedProps),
        (m = t.type === t.elementType ? u : ot(t.type, u)),
        (o.props = m),
        (w = t.pendingProps),
        (y = o.context),
        (a = n.contextType),
        typeof a == "object" && a !== null
          ? (a = Ze(a))
          : ((a = De(n) ? Jt : Ne.current), (a = kn(t, a))));
      var N = n.getDerivedStateFromProps;
      ((g =
        typeof N == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function") ||
        (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
          typeof o.componentWillReceiveProps != "function") ||
        ((u !== w || y !== a) && Ou(t, o, r, a)),
        (Ut = !1),
        (y = t.memoizedState),
        (o.state = y),
        ll(t, r, o, l));
      var _ = t.memoizedState;
      u !== w || y !== _ || Re.current || Ut
        ? (typeof N == "function" && (Yi(t, n, N, r), (_ = t.memoizedState)),
          (m = Ut || Du(t, n, m, r, y, _, a) || !1)
            ? (g ||
                (typeof o.UNSAFE_componentWillUpdate != "function" &&
                  typeof o.componentWillUpdate != "function") ||
                (typeof o.componentWillUpdate == "function" &&
                  o.componentWillUpdate(r, _, a),
                typeof o.UNSAFE_componentWillUpdate == "function" &&
                  o.UNSAFE_componentWillUpdate(r, _, a)),
              typeof o.componentDidUpdate == "function" && (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof o.componentDidUpdate != "function" ||
                (u === e.memoizedProps && y === e.memoizedState) ||
                (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != "function" ||
                (u === e.memoizedProps && y === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = _)),
          (o.props = r),
          (o.state = _),
          (o.context = a),
          (r = m))
        : (typeof o.componentDidUpdate != "function" ||
            (u === e.memoizedProps && y === e.memoizedState) ||
            (t.flags |= 4),
          typeof o.getSnapshotBeforeUpdate != "function" ||
            (u === e.memoizedProps && y === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return bi(e, t, n, r, i, l);
  }
  function bi(e, t, n, r, l, i) {
    Ku(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return (l && qs(t, n, !1), Et(e, t, i));
    ((r = t.stateNode), (jf.current = t));
    var u =
      o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && o
        ? ((t.child = Cn(t, e.child, null, i)), (t.child = Cn(t, null, u, i)))
        : Pe(e, t, u, i),
      (t.memoizedState = r.state),
      l && qs(t, n, !0),
      t.child
    );
  }
  function Yu(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? Zs(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Zs(e, t.context, !1),
      Oi(e, t.containerInfo));
  }
  function Xu(e, t, n, r, l) {
    return (Nn(), Pi(l), (t.flags |= 256), Pe(e, t, n, r), t.child);
  }
  var eo = { dehydrated: null, treeContext: null, retryLane: 0 };
  function to(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Zu(e, t, n) {
    var r = t.pendingProps,
      l = oe.current,
      i = !1,
      o = (t.flags & 128) !== 0,
      u;
    if (
      ((u = o) ||
        (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      u
        ? ((i = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      b(oe, l & 1),
      e === null)
    )
      return (
        zi(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824),
            null)
          : ((o = r.children),
            (e = r.fallback),
            i
              ? ((r = t.mode),
                (i = t.child),
                (o = { mode: "hidden", children: o }),
                (r & 1) === 0 && i !== null
                  ? ((i.childLanes = 0), (i.pendingProps = o))
                  : (i = Cl(o, r, 0, null)),
                (e = un(e, r, n, null)),
                (i.return = t),
                (e.return = t),
                (i.sibling = e),
                (t.child = i),
                (t.child.memoizedState = to(n)),
                (t.memoizedState = eo),
                e)
              : no(t, o))
      );
    if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
      return Nf(e, t, o, r, u, l, n);
    if (i) {
      ((i = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling));
      var a = { mode: "hidden", children: r.children };
      return (
        (o & 1) === 0 && t.child !== l
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = a),
            (t.deletions = null))
          : ((r = Kt(l, a)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        u !== null ? (i = Kt(u, i)) : ((i = un(i, o, n, null)), (i.flags |= 2)),
        (i.return = t),
        (r.return = t),
        (r.sibling = i),
        (t.child = r),
        (r = i),
        (i = t.child),
        (o = e.child.memoizedState),
        (o =
          o === null
            ? to(n)
            : {
                baseLanes: o.baseLanes | n,
                cachePool: null,
                transitions: o.transitions,
              }),
        (i.memoizedState = o),
        (i.childLanes = e.childLanes & ~n),
        (t.memoizedState = eo),
        r
      );
    }
    return (
      (i = e.child),
      (e = i.sibling),
      (r = Kt(i, { mode: "visible", children: r.children })),
      (t.mode & 1) === 0 && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function no(e, t) {
    return (
      (t = Cl({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function dl(e, t, n, r) {
    return (
      r !== null && Pi(r),
      Cn(t, e.child, null, n),
      (e = no(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Nf(e, t, n, r, l, i, o) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = Zi(Error(h(422)))), dl(e, t, o, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((i = r.fallback),
            (l = t.mode),
            (r = Cl({ mode: "visible", children: r.children }, l, 0, null)),
            (i = un(i, l, o, null)),
            (i.flags |= 2),
            (r.return = t),
            (i.return = t),
            (r.sibling = i),
            (t.child = r),
            (t.mode & 1) !== 0 && Cn(t, e.child, null, o),
            (t.child.memoizedState = to(o)),
            (t.memoizedState = eo),
            i);
    if ((t.mode & 1) === 0) return dl(e, t, o, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
      return (
        (r = u),
        (i = Error(h(419))),
        (r = Zi(i, r, void 0)),
        dl(e, t, o, r)
      );
    }
    if (((u = (o & e.childLanes) !== 0), Ie || u)) {
      if (((r = ve), r !== null)) {
        switch (o & -o) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        ((l = (l & (r.suspendedLanes | o)) !== 0 ? 0 : l),
          l !== 0 &&
            l !== i.retryLane &&
            ((i.retryLane = l), Nt(e, l), at(r, e, l, -1)));
      }
      return (xo(), (r = Zi(Error(h(421)))), dl(e, t, o, r));
    }
    return l.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = Ff.bind(null, e)),
        (l._reactRetry = t),
        null)
      : ((e = i.treeContext),
        (He = It(l.nextSibling)),
        (Ve = t),
        (ie = !0),
        (it = null),
        e !== null &&
          ((Ye[Xe++] = St),
          (Ye[Xe++] = jt),
          (Ye[Xe++] = qt),
          (St = e.id),
          (jt = e.overflow),
          (qt = t)),
        (t = no(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function Ju(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (r !== null && (r.lanes |= t), Ri(e.return, t, n));
  }
  function ro(e, t, n, r, l) {
    var i = e.memoizedState;
    i === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: l,
        })
      : ((i.isBackwards = t),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = r),
        (i.tail = n),
        (i.tailMode = l));
  }
  function qu(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      i = r.tail;
    if ((Pe(e, t, r.children, n), (r = oe.current), (r & 2) !== 0))
      ((r = (r & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Ju(e, n, t);
          else if (e.tag === 19) Ju(e, n, t);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      r &= 1;
    }
    if ((b(oe, r), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null; )
            ((e = n.alternate),
              e !== null && il(e) === null && (l = n),
              (n = n.sibling));
          ((n = l),
            n === null
              ? ((l = t.child), (t.child = null))
              : ((l = n.sibling), (n.sibling = null)),
            ro(t, !1, l, n, i));
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && il(e) === null)) {
              t.child = l;
              break;
            }
            ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
          }
          ro(t, !0, n, null, i);
          break;
        case "together":
          ro(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function pl(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Et(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (rn |= t.lanes),
      (n & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(h(153));
    if (t.child !== null) {
      for (
        e = t.child, n = Kt(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;
      )
        ((e = e.sibling),
          (n = n.sibling = Kt(e, e.pendingProps)),
          (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function Cf(e, t, n) {
    switch (t.tag) {
      case 3:
        (Yu(t), Nn());
        break;
      case 5:
        du(t);
        break;
      case 1:
        De(t.type) && Xr(t);
        break;
      case 4:
        Oi(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        (b(tl, r._currentValue), (r._currentValue = l));
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (b(oe, oe.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? Zu(e, t, n)
              : (b(oe, oe.current & 1),
                (e = Et(e, t, n)),
                e !== null ? e.sibling : null);
        b(oe, oe.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return qu(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          b(oe, oe.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), Qu(e, t, n));
    }
    return Et(e, t, n);
  }
  var bu, lo, ea, ta;
  ((bu = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        ((n.child.return = n), (n = n.child));
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      ((n.sibling.return = n.return), (n = n.sibling));
    }
  }),
    (lo = function () {}),
    (ea = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        ((e = t.stateNode), tn(ht.current));
        var i = null;
        switch (n) {
          case "input":
            ((l = Rl(e, l)), (r = Rl(e, r)), (i = []));
            break;
          case "select":
            ((l = E({}, l, { value: void 0 })),
              (r = E({}, r, { value: void 0 })),
              (i = []));
            break;
          case "textarea":
            ((l = Ol(e, l)), (r = Ol(e, r)), (i = []));
            break;
          default:
            typeof l.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = Kr);
        }
        Al(n, r);
        var o;
        n = null;
        for (m in l)
          if (!r.hasOwnProperty(m) && l.hasOwnProperty(m) && l[m] != null)
            if (m === "style") {
              var u = l[m];
              for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
            } else
              m !== "dangerouslySetInnerHTML" &&
                m !== "children" &&
                m !== "suppressContentEditableWarning" &&
                m !== "suppressHydrationWarning" &&
                m !== "autoFocus" &&
                (F.hasOwnProperty(m)
                  ? i || (i = [])
                  : (i = i || []).push(m, null));
        for (m in r) {
          var a = r[m];
          if (
            ((u = l != null ? l[m] : void 0),
            r.hasOwnProperty(m) && a !== u && (a != null || u != null))
          )
            if (m === "style")
              if (u) {
                for (o in u)
                  !u.hasOwnProperty(o) ||
                    (a && a.hasOwnProperty(o)) ||
                    (n || (n = {}), (n[o] = ""));
                for (o in a)
                  a.hasOwnProperty(o) &&
                    u[o] !== a[o] &&
                    (n || (n = {}), (n[o] = a[o]));
              } else (n || (i || (i = []), i.push(m, n)), (n = a));
            else
              m === "dangerouslySetInnerHTML"
                ? ((a = a ? a.__html : void 0),
                  (u = u ? u.__html : void 0),
                  a != null && u !== a && (i = i || []).push(m, a))
                : m === "children"
                  ? (typeof a != "string" && typeof a != "number") ||
                    (i = i || []).push(m, "" + a)
                  : m !== "suppressContentEditableWarning" &&
                    m !== "suppressHydrationWarning" &&
                    (F.hasOwnProperty(m)
                      ? (a != null && m === "onScroll" && te("scroll", e),
                        i || u === a || (i = []))
                      : (i = i || []).push(m, a));
        }
        n && (i = i || []).push("style", n);
        var m = i;
        (t.updateQueue = m) && (t.flags |= 4);
      }
    }),
    (ta = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    }));
  function pr(e, t) {
    if (!ie)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            (t.alternate !== null && (n = t), (t = t.sibling));
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            (n.alternate !== null && (r = n), (n = n.sibling));
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function Ee(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var l = e.child; l !== null; )
        ((n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags & 14680064),
          (r |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling));
    else
      for (l = e.child; l !== null; )
        ((n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags),
          (r |= l.flags),
          (l.return = e),
          (l = l.sibling));
    return ((e.subtreeFlags |= r), (e.childLanes = n), t);
  }
  function Ef(e, t, n) {
    var r = t.pendingProps;
    switch ((Ei(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Ee(t), null);
      case 1:
        return (De(t.type) && Yr(), Ee(t), null);
      case 3:
        return (
          (r = t.stateNode),
          zn(),
          ne(Re),
          ne(Ne),
          Ui(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (br(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), it !== null && (yo(it), (it = null)))),
          lo(e, t),
          Ee(t),
          null
        );
      case 5:
        Fi(t);
        var l = tn(ur.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          (ea(e, t, n, r, l),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(h(166));
            return (Ee(t), null);
          }
          if (((e = tn(ht.current)), br(t))) {
            ((r = t.stateNode), (n = t.type));
            var i = t.memoizedProps;
            switch (((r[mt] = t), (r[rr] = i), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                (te("cancel", r), te("close", r));
                break;
              case "iframe":
              case "object":
              case "embed":
                te("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < er.length; l++) te(er[l], r);
                break;
              case "source":
                te("error", r);
                break;
              case "img":
              case "image":
              case "link":
                (te("error", r), te("load", r));
                break;
              case "details":
                te("toggle", r);
                break;
              case "input":
                (Io(r, i), te("invalid", r));
                break;
              case "select":
                ((r._wrapperState = { wasMultiple: !!i.multiple }),
                  te("invalid", r));
                break;
              case "textarea":
                (Ao(r, i), te("invalid", r));
            }
            (Al(n, i), (l = null));
            for (var o in i)
              if (i.hasOwnProperty(o)) {
                var u = i[o];
                o === "children"
                  ? typeof u == "string"
                    ? r.textContent !== u &&
                      (i.suppressHydrationWarning !== !0 &&
                        Qr(r.textContent, u, e),
                      (l = ["children", u]))
                    : typeof u == "number" &&
                      r.textContent !== "" + u &&
                      (i.suppressHydrationWarning !== !0 &&
                        Qr(r.textContent, u, e),
                      (l = ["children", "" + u]))
                  : F.hasOwnProperty(o) &&
                    u != null &&
                    o === "onScroll" &&
                    te("scroll", r);
              }
            switch (n) {
              case "input":
                (Sr(r), Fo(r, i, !0));
                break;
              case "textarea":
                (Sr(r), Bo(r));
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (r.onclick = Kr);
            }
            ((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4));
          } else {
            ((o = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = $o(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = o.createElement("div")),
                    (e.innerHTML = "<script><\/script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                    ? (e = o.createElement(n, { is: r.is }))
                    : ((e = o.createElement(n)),
                      n === "select" &&
                        ((o = e),
                        r.multiple
                          ? (o.multiple = !0)
                          : r.size && (o.size = r.size)))
                : (e = o.createElementNS(e, n)),
              (e[mt] = t),
              (e[rr] = r),
              bu(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((o = Ul(n, r)), n)) {
                case "dialog":
                  (te("cancel", e), te("close", e), (l = r));
                  break;
                case "iframe":
                case "object":
                case "embed":
                  (te("load", e), (l = r));
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < er.length; l++) te(er[l], e);
                  l = r;
                  break;
                case "source":
                  (te("error", e), (l = r));
                  break;
                case "img":
                case "image":
                case "link":
                  (te("error", e), te("load", e), (l = r));
                  break;
                case "details":
                  (te("toggle", e), (l = r));
                  break;
                case "input":
                  (Io(e, r), (l = Rl(e, r)), te("invalid", e));
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  ((e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = E({}, r, { value: void 0 })),
                    te("invalid", e));
                  break;
                case "textarea":
                  (Ao(e, r), (l = Ol(e, r)), te("invalid", e));
                  break;
                default:
                  l = r;
              }
              (Al(n, l), (u = l));
              for (i in u)
                if (u.hasOwnProperty(i)) {
                  var a = u[i];
                  i === "style"
                    ? Wo(e, a)
                    : i === "dangerouslySetInnerHTML"
                      ? ((a = a ? a.__html : void 0), a != null && Vo(e, a))
                      : i === "children"
                        ? typeof a == "string"
                          ? (n !== "textarea" || a !== "") && In(e, a)
                          : typeof a == "number" && In(e, "" + a)
                        : i !== "suppressContentEditableWarning" &&
                          i !== "suppressHydrationWarning" &&
                          i !== "autoFocus" &&
                          (F.hasOwnProperty(i)
                            ? a != null && i === "onScroll" && te("scroll", e)
                            : a != null && et(e, i, a, o));
                }
              switch (n) {
                case "input":
                  (Sr(e), Fo(e, r, !1));
                  break;
                case "textarea":
                  (Sr(e), Bo(e));
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + Y(r.value));
                  break;
                case "select":
                  ((e.multiple = !!r.multiple),
                    (i = r.value),
                    i != null
                      ? an(e, !!r.multiple, i, !1)
                      : r.defaultValue != null &&
                        an(e, !!r.multiple, r.defaultValue, !0));
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Kr);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return (Ee(t), null);
      case 6:
        if (e && t.stateNode != null) ta(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(h(166));
          if (((n = tn(ur.current)), tn(ht.current), br(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[mt] = t),
              (i = r.nodeValue !== n) && ((e = Ve), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Qr(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Qr(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            i && (t.flags |= 4);
          } else
            ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[mt] = t),
              (t.stateNode = r));
        }
        return (Ee(t), null);
      case 13:
        if (
          (ne(oe),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (ie && He !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (lu(), Nn(), (t.flags |= 98560), (i = !1));
          else if (((i = br(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!i) throw Error(h(318));
              if (
                ((i = t.memoizedState),
                (i = i !== null ? i.dehydrated : null),
                !i)
              )
                throw Error(h(317));
              i[mt] = t;
            } else
              (Nn(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (Ee(t), (i = !1));
          } else (it !== null && (yo(it), (it = null)), (i = !0));
          if (!i) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (oe.current & 1) !== 0
                  ? he === 0 && (he = 3)
                  : xo())),
            t.updateQueue !== null && (t.flags |= 4),
            Ee(t),
            null);
      case 4:
        return (
          zn(),
          lo(e, t),
          e === null && tr(t.stateNode.containerInfo),
          Ee(t),
          null
        );
      case 10:
        return (Mi(t.type._context), Ee(t), null);
      case 17:
        return (De(t.type) && Yr(), Ee(t), null);
      case 19:
        if ((ne(oe), (i = t.memoizedState), i === null)) return (Ee(t), null);
        if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
          if (r) pr(i, !1);
          else {
            if (he !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((o = il(e)), o !== null)) {
                  for (
                    t.flags |= 128,
                      pr(i, !1),
                      r = o.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;
                  )
                    ((i = n),
                      (e = r),
                      (i.flags &= 14680066),
                      (o = i.alternate),
                      o === null
                        ? ((i.childLanes = 0),
                          (i.lanes = e),
                          (i.child = null),
                          (i.subtreeFlags = 0),
                          (i.memoizedProps = null),
                          (i.memoizedState = null),
                          (i.updateQueue = null),
                          (i.dependencies = null),
                          (i.stateNode = null))
                        : ((i.childLanes = o.childLanes),
                          (i.lanes = o.lanes),
                          (i.child = o.child),
                          (i.subtreeFlags = 0),
                          (i.deletions = null),
                          (i.memoizedProps = o.memoizedProps),
                          (i.memoizedState = o.memoizedState),
                          (i.updateQueue = o.updateQueue),
                          (i.type = o.type),
                          (e = o.dependencies),
                          (i.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling));
                  return (b(oe, (oe.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            i.tail !== null &&
              fe() > Mn &&
              ((t.flags |= 128), (r = !0), pr(i, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = il(o)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                pr(i, !0),
                i.tail === null &&
                  i.tailMode === "hidden" &&
                  !o.alternate &&
                  !ie)
              )
                return (Ee(t), null);
            } else
              2 * fe() - i.renderingStartTime > Mn &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), pr(i, !1), (t.lanes = 4194304));
          i.isBackwards
            ? ((o.sibling = t.child), (t.child = o))
            : ((n = i.last),
              n !== null ? (n.sibling = o) : (t.child = o),
              (i.last = o));
        }
        return i.tail !== null
          ? ((t = i.tail),
            (i.rendering = t),
            (i.tail = t.sibling),
            (i.renderingStartTime = fe()),
            (t.sibling = null),
            (n = oe.current),
            b(oe, r ? (n & 1) | 2 : n & 1),
            t)
          : (Ee(t), null);
      case 22:
      case 23:
        return (
          go(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (We & 1073741824) !== 0 &&
              (Ee(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ee(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(h(156, t.tag));
  }
  function _f(e, t) {
    switch ((Ei(t), t.tag)) {
      case 1:
        return (
          De(t.type) && Yr(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          zn(),
          ne(Re),
          ne(Ne),
          Ui(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 5:
        return (Fi(t), null);
      case 13:
        if (
          (ne(oe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(h(340));
          Nn();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (ne(oe), null);
      case 4:
        return (zn(), null);
      case 10:
        return (Mi(t.type._context), null);
      case 22:
      case 23:
        return (go(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ml = !1,
    _e = !1,
    zf = typeof WeakSet == "function" ? WeakSet : Set,
    C = null;
  function Ln(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          ae(e, t, r);
        }
      else n.current = null;
  }
  function io(e, t, n) {
    try {
      n();
    } catch (r) {
      ae(e, t, r);
    }
  }
  var na = !1;
  function Pf(e, t) {
    if (((vi = Dr), (e = Ds()), ai(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var l = r.anchorOffset,
              i = r.focusNode;
            r = r.focusOffset;
            try {
              (n.nodeType, i.nodeType);
            } catch {
              n = null;
              break e;
            }
            var o = 0,
              u = -1,
              a = -1,
              m = 0,
              g = 0,
              w = e,
              y = null;
            t: for (;;) {
              for (
                var N;
                w !== n || (l !== 0 && w.nodeType !== 3) || (u = o + l),
                  w !== i || (r !== 0 && w.nodeType !== 3) || (a = o + r),
                  w.nodeType === 3 && (o += w.nodeValue.length),
                  (N = w.firstChild) !== null;
              )
                ((y = w), (w = N));
              for (;;) {
                if (w === e) break t;
                if (
                  (y === n && ++m === l && (u = o),
                  y === i && ++g === r && (a = o),
                  (N = w.nextSibling) !== null)
                )
                  break;
                ((w = y), (y = w.parentNode));
              }
              w = N;
            }
            n = u === -1 || a === -1 ? null : { start: u, end: a };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      gi = { focusedElem: e, selectionRange: n }, Dr = !1, C = t;
      C !== null;
    )
      if (((t = C), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (C = e));
      else
        for (; C !== null; ) {
          t = C;
          try {
            var _ = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (_ !== null) {
                    var z = _.memoizedProps,
                      de = _.memoizedState,
                      d = t.stateNode,
                      c = d.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? z : ot(t.type, z),
                        de,
                      );
                    d.__reactInternalSnapshotBeforeUpdate = c;
                  }
                  break;
                case 3:
                  var p = t.stateNode.containerInfo;
                  p.nodeType === 1
                    ? (p.textContent = "")
                    : p.nodeType === 9 &&
                      p.documentElement &&
                      p.removeChild(p.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(h(163));
              }
          } catch (k) {
            ae(t, t.return, k);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (C = e));
            break;
          }
          C = t.return;
        }
    return ((_ = na), (na = !1), _);
  }
  function mr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var i = l.destroy;
          ((l.destroy = void 0), i !== void 0 && io(t, n, i));
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function hl(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function oo(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function ra(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), ra(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[mt],
          delete t[rr],
          delete t[Si],
          delete t[ff],
          delete t[df])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function la(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function ia(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || la(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function so(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      ((e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = Kr)));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (so(e, t, n), e = e.sibling; e !== null; )
        (so(e, t, n), (e = e.sibling));
  }
  function uo(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (uo(e, t, n), e = e.sibling; e !== null; )
        (uo(e, t, n), (e = e.sibling));
  }
  var ke = null,
    st = !1;
  function $t(e, t, n) {
    for (n = n.child; n !== null; ) (oa(e, t, n), (n = n.sibling));
  }
  function oa(e, t, n) {
    if (pt && typeof pt.onCommitFiberUnmount == "function")
      try {
        pt.onCommitFiberUnmount(zr, n);
      } catch {}
    switch (n.tag) {
      case 5:
        _e || Ln(n, t);
      case 6:
        var r = ke,
          l = st;
        ((ke = null),
          $t(e, t, n),
          (ke = r),
          (st = l),
          ke !== null &&
            (st
              ? ((e = ke),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : ke.removeChild(n.stateNode)));
        break;
      case 18:
        ke !== null &&
          (st
            ? ((e = ke),
              (n = n.stateNode),
              e.nodeType === 8
                ? ki(e.parentNode, n)
                : e.nodeType === 1 && ki(e, n),
              Kn(e))
            : ki(ke, n.stateNode));
        break;
      case 4:
        ((r = ke),
          (l = st),
          (ke = n.stateNode.containerInfo),
          (st = !0),
          $t(e, t, n),
          (ke = r),
          (st = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !_e &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          l = r = r.next;
          do {
            var i = l,
              o = i.destroy;
            ((i = i.tag),
              o !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && io(n, t, o),
              (l = l.next));
          } while (l !== r);
        }
        $t(e, t, n);
        break;
      case 1:
        if (
          !_e &&
          (Ln(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            ((r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount());
          } catch (u) {
            ae(n, t, u);
          }
        $t(e, t, n);
        break;
      case 21:
        $t(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((_e = (r = _e) || n.memoizedState !== null), $t(e, t, n), (_e = r))
          : $t(e, t, n);
        break;
      default:
        $t(e, t, n);
    }
  }
  function sa(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      (n === null && (n = e.stateNode = new zf()),
        t.forEach(function (r) {
          var l = Af.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        }));
    }
  }
  function ut(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
          var i = e,
            o = t,
            u = o;
          e: for (; u !== null; ) {
            switch (u.tag) {
              case 5:
                ((ke = u.stateNode), (st = !1));
                break e;
              case 3:
                ((ke = u.stateNode.containerInfo), (st = !0));
                break e;
              case 4:
                ((ke = u.stateNode.containerInfo), (st = !0));
                break e;
            }
            u = u.return;
          }
          if (ke === null) throw Error(h(160));
          (oa(i, o, l), (ke = null), (st = !1));
          var a = l.alternate;
          (a !== null && (a.return = null), (l.return = null));
        } catch (m) {
          ae(l, t, m);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) (ua(t, e), (t = t.sibling));
  }
  function ua(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((ut(t, e), vt(e), r & 4)) {
          try {
            (mr(3, e, e.return), hl(3, e));
          } catch (z) {
            ae(e, e.return, z);
          }
          try {
            mr(5, e, e.return);
          } catch (z) {
            ae(e, e.return, z);
          }
        }
        break;
      case 1:
        (ut(t, e), vt(e), r & 512 && n !== null && Ln(n, n.return));
        break;
      case 5:
        if (
          (ut(t, e),
          vt(e),
          r & 512 && n !== null && Ln(n, n.return),
          e.flags & 32)
        ) {
          var l = e.stateNode;
          try {
            In(l, "");
          } catch (z) {
            ae(e, e.return, z);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var i = e.memoizedProps,
            o = n !== null ? n.memoizedProps : i,
            u = e.type,
            a = e.updateQueue;
          if (((e.updateQueue = null), a !== null))
            try {
              (u === "input" &&
                i.type === "radio" &&
                i.name != null &&
                Oo(l, i),
                Ul(u, o));
              var m = Ul(u, i);
              for (o = 0; o < a.length; o += 2) {
                var g = a[o],
                  w = a[o + 1];
                g === "style"
                  ? Wo(l, w)
                  : g === "dangerouslySetInnerHTML"
                    ? Vo(l, w)
                    : g === "children"
                      ? In(l, w)
                      : et(l, g, w, m);
              }
              switch (u) {
                case "input":
                  Dl(l, i);
                  break;
                case "textarea":
                  Uo(l, i);
                  break;
                case "select":
                  var y = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!i.multiple;
                  var N = i.value;
                  N != null
                    ? an(l, !!i.multiple, N, !1)
                    : y !== !!i.multiple &&
                      (i.defaultValue != null
                        ? an(l, !!i.multiple, i.defaultValue, !0)
                        : an(l, !!i.multiple, i.multiple ? [] : "", !1));
              }
              l[rr] = i;
            } catch (z) {
              ae(e, e.return, z);
            }
        }
        break;
      case 6:
        if ((ut(t, e), vt(e), r & 4)) {
          if (e.stateNode === null) throw Error(h(162));
          ((l = e.stateNode), (i = e.memoizedProps));
          try {
            l.nodeValue = i;
          } catch (z) {
            ae(e, e.return, z);
          }
        }
        break;
      case 3:
        if (
          (ut(t, e), vt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Kn(t.containerInfo);
          } catch (z) {
            ae(e, e.return, z);
          }
        break;
      case 4:
        (ut(t, e), vt(e));
        break;
      case 13:
        (ut(t, e),
          vt(e),
          (l = e.child),
          l.flags & 8192 &&
            ((i = l.memoizedState !== null),
            (l.stateNode.isHidden = i),
            !i ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (fo = fe())),
          r & 4 && sa(e));
        break;
      case 22:
        if (
          ((g = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((_e = (m = _e) || g), ut(t, e), (_e = m)) : ut(t, e),
          vt(e),
          r & 8192)
        ) {
          if (
            ((m = e.memoizedState !== null),
            (e.stateNode.isHidden = m) && !g && (e.mode & 1) !== 0)
          )
            for (C = e, g = e.child; g !== null; ) {
              for (w = C = g; C !== null; ) {
                switch (((y = C), (N = y.child), y.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    mr(4, y, y.return);
                    break;
                  case 1:
                    Ln(y, y.return);
                    var _ = y.stateNode;
                    if (typeof _.componentWillUnmount == "function") {
                      ((r = y), (n = y.return));
                      try {
                        ((t = r),
                          (_.props = t.memoizedProps),
                          (_.state = t.memoizedState),
                          _.componentWillUnmount());
                      } catch (z) {
                        ae(r, n, z);
                      }
                    }
                    break;
                  case 5:
                    Ln(y, y.return);
                    break;
                  case 22:
                    if (y.memoizedState !== null) {
                      fa(w);
                      continue;
                    }
                }
                N !== null ? ((N.return = y), (C = N)) : fa(w);
              }
              g = g.sibling;
            }
          e: for (g = null, w = e; ; ) {
            if (w.tag === 5) {
              if (g === null) {
                g = w;
                try {
                  ((l = w.stateNode),
                    m
                      ? ((i = l.style),
                        typeof i.setProperty == "function"
                          ? i.setProperty("display", "none", "important")
                          : (i.display = "none"))
                      : ((u = w.stateNode),
                        (a = w.memoizedProps.style),
                        (o =
                          a != null && a.hasOwnProperty("display")
                            ? a.display
                            : null),
                        (u.style.display = Ho("display", o))));
                } catch (z) {
                  ae(e, e.return, z);
                }
              }
            } else if (w.tag === 6) {
              if (g === null)
                try {
                  w.stateNode.nodeValue = m ? "" : w.memoizedProps;
                } catch (z) {
                  ae(e, e.return, z);
                }
            } else if (
              ((w.tag !== 22 && w.tag !== 23) ||
                w.memoizedState === null ||
                w === e) &&
              w.child !== null
            ) {
              ((w.child.return = w), (w = w.child));
              continue;
            }
            if (w === e) break e;
            for (; w.sibling === null; ) {
              if (w.return === null || w.return === e) break e;
              (g === w && (g = null), (w = w.return));
            }
            (g === w && (g = null),
              (w.sibling.return = w.return),
              (w = w.sibling));
          }
        }
        break;
      case 19:
        (ut(t, e), vt(e), r & 4 && sa(e));
        break;
      case 21:
        break;
      default:
        (ut(t, e), vt(e));
    }
  }
  function vt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (la(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(h(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (In(l, ""), (r.flags &= -33));
            var i = ia(e);
            uo(e, i, l);
            break;
          case 3:
          case 4:
            var o = r.stateNode.containerInfo,
              u = ia(e);
            so(e, u, o);
            break;
          default:
            throw Error(h(161));
        }
      } catch (a) {
        ae(e, e.return, a);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Lf(e, t, n) {
    ((C = e), aa(e));
  }
  function aa(e, t, n) {
    for (var r = (e.mode & 1) !== 0; C !== null; ) {
      var l = C,
        i = l.child;
      if (l.tag === 22 && r) {
        var o = l.memoizedState !== null || ml;
        if (!o) {
          var u = l.alternate,
            a = (u !== null && u.memoizedState !== null) || _e;
          u = ml;
          var m = _e;
          if (((ml = o), (_e = a) && !m))
            for (C = l; C !== null; )
              ((o = C),
                (a = o.child),
                o.tag === 22 && o.memoizedState !== null
                  ? da(l)
                  : a !== null
                    ? ((a.return = o), (C = a))
                    : da(l));
          for (; i !== null; ) ((C = i), aa(i), (i = i.sibling));
          ((C = l), (ml = u), (_e = m));
        }
        ca(e);
      } else
        (l.subtreeFlags & 8772) !== 0 && i !== null
          ? ((i.return = l), (C = i))
          : ca(e);
    }
  }
  function ca(e) {
    for (; C !== null; ) {
      var t = C;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                _e || hl(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !_e)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : ot(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      l,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var i = t.updateQueue;
                i !== null && fu(t, i, r);
                break;
              case 3:
                var o = t.updateQueue;
                if (o !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  fu(t, o, n);
                }
                break;
              case 5:
                var u = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = u;
                  var a = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      a.autoFocus && n.focus();
                      break;
                    case "img":
                      a.src && (n.src = a.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var m = t.alternate;
                  if (m !== null) {
                    var g = m.memoizedState;
                    if (g !== null) {
                      var w = g.dehydrated;
                      w !== null && Kn(w);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(h(163));
            }
          _e || (t.flags & 512 && oo(t));
        } catch (y) {
          ae(t, t.return, y);
        }
      }
      if (t === e) {
        C = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        ((n.return = t.return), (C = n));
        break;
      }
      C = t.return;
    }
  }
  function fa(e) {
    for (; C !== null; ) {
      var t = C;
      if (t === e) {
        C = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        ((n.return = t.return), (C = n));
        break;
      }
      C = t.return;
    }
  }
  function da(e) {
    for (; C !== null; ) {
      var t = C;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              hl(4, t);
            } catch (a) {
              ae(t, n, a);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (a) {
                ae(t, l, a);
              }
            }
            var i = t.return;
            try {
              oo(t);
            } catch (a) {
              ae(t, i, a);
            }
            break;
          case 5:
            var o = t.return;
            try {
              oo(t);
            } catch (a) {
              ae(t, o, a);
            }
        }
      } catch (a) {
        ae(t, t.return, a);
      }
      if (t === e) {
        C = null;
        break;
      }
      var u = t.sibling;
      if (u !== null) {
        ((u.return = t.return), (C = u));
        break;
      }
      C = t.return;
    }
  }
  var Tf = Math.ceil,
    yl = je.ReactCurrentDispatcher,
    ao = je.ReactCurrentOwner,
    qe = je.ReactCurrentBatchConfig,
    H = 0,
    ve = null,
    pe = null,
    Se = 0,
    We = 0,
    Tn = Ot(0),
    he = 0,
    hr = null,
    rn = 0,
    vl = 0,
    co = 0,
    yr = null,
    Oe = null,
    fo = 0,
    Mn = 1 / 0,
    _t = null,
    gl = !1,
    po = null,
    Vt = null,
    xl = !1,
    Ht = null,
    wl = 0,
    vr = 0,
    mo = null,
    kl = -1,
    Sl = 0;
  function Le() {
    return (H & 6) !== 0 ? fe() : kl !== -1 ? kl : (kl = fe());
  }
  function Wt(e) {
    return (e.mode & 1) === 0
      ? 1
      : (H & 2) !== 0 && Se !== 0
        ? Se & -Se
        : mf.transition !== null
          ? (Sl === 0 && (Sl = is()), Sl)
          : ((e = X),
            e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 16 : ms(e.type))),
            e);
  }
  function at(e, t, n, r) {
    if (50 < vr) throw ((vr = 0), (mo = null), Error(h(185)));
    ($n(e, n, r),
      ((H & 2) === 0 || e !== ve) &&
        (e === ve && ((H & 2) === 0 && (vl |= n), he === 4 && Qt(e, Se)),
        Fe(e, r),
        n === 1 &&
          H === 0 &&
          (t.mode & 1) === 0 &&
          ((Mn = fe() + 500), Zr && At())));
  }
  function Fe(e, t) {
    var n = e.callbackNode;
    pc(e, t);
    var r = Tr(e, e === ve ? Se : 0);
    if (r === 0)
      (n !== null && ns(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && ns(n), t === 1))
        (e.tag === 0 ? pf(ma.bind(null, e)) : bs(ma.bind(null, e)),
          af(function () {
            (H & 6) === 0 && At();
          }),
          (n = null));
      else {
        switch (os(r)) {
          case 1:
            n = Kl;
            break;
          case 4:
            n = rs;
            break;
          case 16:
            n = _r;
            break;
          case 536870912:
            n = ls;
            break;
          default:
            n = _r;
        }
        n = Sa(n, pa.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = n));
    }
  }
  function pa(e, t) {
    if (((kl = -1), (Sl = 0), (H & 6) !== 0)) throw Error(h(327));
    var n = e.callbackNode;
    if (Rn() && e.callbackNode !== n) return null;
    var r = Tr(e, e === ve ? Se : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = jl(e, r);
    else {
      t = r;
      var l = H;
      H |= 2;
      var i = ya();
      (ve !== e || Se !== t) && ((_t = null), (Mn = fe() + 500), on(e, t));
      do
        try {
          Df();
          break;
        } catch (u) {
          ha(e, u);
        }
      while (!0);
      (Ti(),
        (yl.current = i),
        (H = l),
        pe !== null ? (t = 0) : ((ve = null), (Se = 0), (t = he)));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((l = Gl(e)), l !== 0 && ((r = l), (t = ho(e, l)))),
        t === 1)
      )
        throw ((n = hr), on(e, 0), Qt(e, r), Fe(e, fe()), n);
      if (t === 6) Qt(e, r);
      else {
        if (
          ((l = e.current.alternate),
          (r & 30) === 0 &&
            !Mf(l) &&
            ((t = jl(e, r)),
            t === 2 && ((i = Gl(e)), i !== 0 && ((r = i), (t = ho(e, i)))),
            t === 1))
        )
          throw ((n = hr), on(e, 0), Qt(e, r), Fe(e, fe()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(h(345));
          case 2:
            sn(e, Oe, _t);
            break;
          case 3:
            if (
              (Qt(e, r),
              (r & 130023424) === r && ((t = fo + 500 - fe()), 10 < t))
            ) {
              if (Tr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                (Le(), (e.pingedLanes |= e.suspendedLanes & l));
                break;
              }
              e.timeoutHandle = wi(sn.bind(null, e, Oe, _t), t);
              break;
            }
            sn(e, Oe, _t);
            break;
          case 4:
            if ((Qt(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var o = 31 - rt(r);
              ((i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i));
            }
            if (
              ((r = l),
              (r = fe() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                    ? 480
                    : 1080 > r
                      ? 1080
                      : 1920 > r
                        ? 1920
                        : 3e3 > r
                          ? 3e3
                          : 4320 > r
                            ? 4320
                            : 1960 * Tf(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = wi(sn.bind(null, e, Oe, _t), r);
              break;
            }
            sn(e, Oe, _t);
            break;
          case 5:
            sn(e, Oe, _t);
            break;
          default:
            throw Error(h(329));
        }
      }
    }
    return (Fe(e, fe()), e.callbackNode === n ? pa.bind(null, e) : null);
  }
  function ho(e, t) {
    var n = yr;
    return (
      e.current.memoizedState.isDehydrated && (on(e, t).flags |= 256),
      (e = jl(e, t)),
      e !== 2 && ((t = Oe), (Oe = n), t !== null && yo(t)),
      e
    );
  }
  function yo(e) {
    Oe === null ? (Oe = e) : Oe.push.apply(Oe, e);
  }
  function Mf(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              i = l.getSnapshot;
            l = l.value;
            try {
              if (!lt(i(), l)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        ((n.return = t), (t = n));
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function Qt(e, t) {
    for (
      t &= ~co,
        t &= ~vl,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;
    ) {
      var n = 31 - rt(t),
        r = 1 << n;
      ((e[n] = -1), (t &= ~r));
    }
  }
  function ma(e) {
    if ((H & 6) !== 0) throw Error(h(327));
    Rn();
    var t = Tr(e, 0);
    if ((t & 1) === 0) return (Fe(e, fe()), null);
    var n = jl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Gl(e);
      r !== 0 && ((t = r), (n = ho(e, r)));
    }
    if (n === 1) throw ((n = hr), on(e, 0), Qt(e, t), Fe(e, fe()), n);
    if (n === 6) throw Error(h(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      sn(e, Oe, _t),
      Fe(e, fe()),
      null
    );
  }
  function vo(e, t) {
    var n = H;
    H |= 1;
    try {
      return e(t);
    } finally {
      ((H = n), H === 0 && ((Mn = fe() + 500), Zr && At()));
    }
  }
  function ln(e) {
    Ht !== null && Ht.tag === 0 && (H & 6) === 0 && Rn();
    var t = H;
    H |= 1;
    var n = qe.transition,
      r = X;
    try {
      if (((qe.transition = null), (X = 1), e)) return e();
    } finally {
      ((X = r), (qe.transition = n), (H = t), (H & 6) === 0 && At());
    }
  }
  function go() {
    ((We = Tn.current), ne(Tn));
  }
  function on(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), uf(n)), pe !== null))
      for (n = pe.return; n !== null; ) {
        var r = n;
        switch ((Ei(r), r.tag)) {
          case 1:
            ((r = r.type.childContextTypes), r != null && Yr());
            break;
          case 3:
            (zn(), ne(Re), ne(Ne), Ui());
            break;
          case 5:
            Fi(r);
            break;
          case 4:
            zn();
            break;
          case 13:
            ne(oe);
            break;
          case 19:
            ne(oe);
            break;
          case 10:
            Mi(r.type._context);
            break;
          case 22:
          case 23:
            go();
        }
        n = n.return;
      }
    if (
      ((ve = e),
      (pe = e = Kt(e.current, null)),
      (Se = We = t),
      (he = 0),
      (hr = null),
      (co = vl = rn = 0),
      (Oe = yr = null),
      en !== null)
    ) {
      for (t = 0; t < en.length; t++)
        if (((n = en[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            i = n.pending;
          if (i !== null) {
            var o = i.next;
            ((i.next = l), (r.next = o));
          }
          n.pending = r;
        }
      en = null;
    }
    return e;
  }
  function ha(e, t) {
    do {
      var n = pe;
      try {
        if ((Ti(), (ol.current = cl), sl)) {
          for (var r = se.memoizedState; r !== null; ) {
            var l = r.queue;
            (l !== null && (l.pending = null), (r = r.next));
          }
          sl = !1;
        }
        if (
          ((nn = 0),
          (ye = me = se = null),
          (ar = !1),
          (cr = 0),
          (ao.current = null),
          n === null || n.return === null)
        ) {
          ((he = 1), (hr = t), (pe = null));
          break;
        }
        e: {
          var i = e,
            o = n.return,
            u = n,
            a = t;
          if (
            ((t = Se),
            (u.flags |= 32768),
            a !== null && typeof a == "object" && typeof a.then == "function")
          ) {
            var m = a,
              g = u,
              w = g.tag;
            if ((g.mode & 1) === 0 && (w === 0 || w === 11 || w === 15)) {
              var y = g.alternate;
              y
                ? ((g.updateQueue = y.updateQueue),
                  (g.memoizedState = y.memoizedState),
                  (g.lanes = y.lanes))
                : ((g.updateQueue = null), (g.memoizedState = null));
            }
            var N = Bu(o);
            if (N !== null) {
              ((N.flags &= -257),
                $u(N, o, u, i, t),
                N.mode & 1 && Uu(i, m, t),
                (t = N),
                (a = m));
              var _ = t.updateQueue;
              if (_ === null) {
                var z = new Set();
                (z.add(a), (t.updateQueue = z));
              } else _.add(a);
              break e;
            } else {
              if ((t & 1) === 0) {
                (Uu(i, m, t), xo());
                break e;
              }
              a = Error(h(426));
            }
          } else if (ie && u.mode & 1) {
            var de = Bu(o);
            if (de !== null) {
              ((de.flags & 65536) === 0 && (de.flags |= 256),
                $u(de, o, u, i, t),
                Pi(Pn(a, u)));
              break e;
            }
          }
          ((i = a = Pn(a, u)),
            he !== 4 && (he = 2),
            yr === null ? (yr = [i]) : yr.push(i),
            (i = o));
          do {
            switch (i.tag) {
              case 3:
                ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                var d = Fu(i, a, t);
                cu(i, d);
                break e;
              case 1:
                u = a;
                var c = i.type,
                  p = i.stateNode;
                if (
                  (i.flags & 128) === 0 &&
                  (typeof c.getDerivedStateFromError == "function" ||
                    (p !== null &&
                      typeof p.componentDidCatch == "function" &&
                      (Vt === null || !Vt.has(p))))
                ) {
                  ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                  var k = Au(i, u, t);
                  cu(i, k);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        ga(n);
      } catch (P) {
        ((t = P), pe === n && n !== null && (pe = n = n.return));
        continue;
      }
      break;
    } while (!0);
  }
  function ya() {
    var e = yl.current;
    return ((yl.current = cl), e === null ? cl : e);
  }
  function xo() {
    ((he === 0 || he === 3 || he === 2) && (he = 4),
      ve === null ||
        ((rn & 268435455) === 0 && (vl & 268435455) === 0) ||
        Qt(ve, Se));
  }
  function jl(e, t) {
    var n = H;
    H |= 2;
    var r = ya();
    (ve !== e || Se !== t) && ((_t = null), on(e, t));
    do
      try {
        Rf();
        break;
      } catch (l) {
        ha(e, l);
      }
    while (!0);
    if ((Ti(), (H = n), (yl.current = r), pe !== null)) throw Error(h(261));
    return ((ve = null), (Se = 0), he);
  }
  function Rf() {
    for (; pe !== null; ) va(pe);
  }
  function Df() {
    for (; pe !== null && !lc(); ) va(pe);
  }
  function va(e) {
    var t = ka(e.alternate, e, We);
    ((e.memoizedProps = e.pendingProps),
      t === null ? ga(e) : (pe = t),
      (ao.current = null));
  }
  function ga(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = Ef(n, t, We)), n !== null)) {
          pe = n;
          return;
        }
      } else {
        if (((n = _f(n, t)), n !== null)) {
          ((n.flags &= 32767), (pe = n));
          return;
        }
        if (e !== null)
          ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((he = 6), (pe = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        pe = t;
        return;
      }
      pe = t = e;
    } while (t !== null);
    he === 0 && (he = 5);
  }
  function sn(e, t, n) {
    var r = X,
      l = qe.transition;
    try {
      ((qe.transition = null), (X = 1), If(e, t, n, r));
    } finally {
      ((qe.transition = l), (X = r));
    }
    return null;
  }
  function If(e, t, n, r) {
    do Rn();
    while (Ht !== null);
    if ((H & 6) !== 0) throw Error(h(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(h(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var i = n.lanes | n.childLanes;
    if (
      (mc(e, i),
      e === ve && ((pe = ve = null), (Se = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        xl ||
        ((xl = !0),
        Sa(_r, function () {
          return (Rn(), null);
        })),
      (i = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || i)
    ) {
      ((i = qe.transition), (qe.transition = null));
      var o = X;
      X = 1;
      var u = H;
      ((H |= 4),
        (ao.current = null),
        Pf(e, n),
        ua(n, e),
        ef(gi),
        (Dr = !!vi),
        (gi = vi = null),
        (e.current = n),
        Lf(n),
        ic(),
        (H = u),
        (X = o),
        (qe.transition = i));
    } else e.current = n;
    if (
      (xl && ((xl = !1), (Ht = e), (wl = l)),
      (i = e.pendingLanes),
      i === 0 && (Vt = null),
      uc(n.stateNode),
      Fe(e, fe()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
    if (gl) throw ((gl = !1), (e = po), (po = null), e);
    return (
      (wl & 1) !== 0 && e.tag !== 0 && Rn(),
      (i = e.pendingLanes),
      (i & 1) !== 0 ? (e === mo ? vr++ : ((vr = 0), (mo = e))) : (vr = 0),
      At(),
      null
    );
  }
  function Rn() {
    if (Ht !== null) {
      var e = os(wl),
        t = qe.transition,
        n = X;
      try {
        if (((qe.transition = null), (X = 16 > e ? 16 : e), Ht === null))
          var r = !1;
        else {
          if (((e = Ht), (Ht = null), (wl = 0), (H & 6) !== 0))
            throw Error(h(331));
          var l = H;
          for (H |= 4, C = e.current; C !== null; ) {
            var i = C,
              o = i.child;
            if ((C.flags & 16) !== 0) {
              var u = i.deletions;
              if (u !== null) {
                for (var a = 0; a < u.length; a++) {
                  var m = u[a];
                  for (C = m; C !== null; ) {
                    var g = C;
                    switch (g.tag) {
                      case 0:
                      case 11:
                      case 15:
                        mr(8, g, i);
                    }
                    var w = g.child;
                    if (w !== null) ((w.return = g), (C = w));
                    else
                      for (; C !== null; ) {
                        g = C;
                        var y = g.sibling,
                          N = g.return;
                        if ((ra(g), g === m)) {
                          C = null;
                          break;
                        }
                        if (y !== null) {
                          ((y.return = N), (C = y));
                          break;
                        }
                        C = N;
                      }
                  }
                }
                var _ = i.alternate;
                if (_ !== null) {
                  var z = _.child;
                  if (z !== null) {
                    _.child = null;
                    do {
                      var de = z.sibling;
                      ((z.sibling = null), (z = de));
                    } while (z !== null);
                  }
                }
                C = i;
              }
            }
            if ((i.subtreeFlags & 2064) !== 0 && o !== null)
              ((o.return = i), (C = o));
            else
              e: for (; C !== null; ) {
                if (((i = C), (i.flags & 2048) !== 0))
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      mr(9, i, i.return);
                  }
                var d = i.sibling;
                if (d !== null) {
                  ((d.return = i.return), (C = d));
                  break e;
                }
                C = i.return;
              }
          }
          var c = e.current;
          for (C = c; C !== null; ) {
            o = C;
            var p = o.child;
            if ((o.subtreeFlags & 2064) !== 0 && p !== null)
              ((p.return = o), (C = p));
            else
              e: for (o = c; C !== null; ) {
                if (((u = C), (u.flags & 2048) !== 0))
                  try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        hl(9, u);
                    }
                  } catch (P) {
                    ae(u, u.return, P);
                  }
                if (u === o) {
                  C = null;
                  break e;
                }
                var k = u.sibling;
                if (k !== null) {
                  ((k.return = u.return), (C = k));
                  break e;
                }
                C = u.return;
              }
          }
          if (
            ((H = l), At(), pt && typeof pt.onPostCommitFiberRoot == "function")
          )
            try {
              pt.onPostCommitFiberRoot(zr, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        ((X = n), (qe.transition = t));
      }
    }
    return !1;
  }
  function xa(e, t, n) {
    ((t = Pn(n, t)),
      (t = Fu(e, t, 1)),
      (e = Bt(e, t, 1)),
      (t = Le()),
      e !== null && ($n(e, 1, t), Fe(e, t)));
  }
  function ae(e, t, n) {
    if (e.tag === 3) xa(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          xa(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (Vt === null || !Vt.has(r)))
          ) {
            ((e = Pn(n, e)),
              (e = Au(t, e, 1)),
              (t = Bt(t, e, 1)),
              (e = Le()),
              t !== null && ($n(t, 1, e), Fe(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Of(e, t, n) {
    var r = e.pingCache;
    (r !== null && r.delete(t),
      (t = Le()),
      (e.pingedLanes |= e.suspendedLanes & n),
      ve === e &&
        (Se & n) === n &&
        (he === 4 || (he === 3 && (Se & 130023424) === Se && 500 > fe() - fo)
          ? on(e, 0)
          : (co |= n)),
      Fe(e, t));
  }
  function wa(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Lr), (Lr <<= 1), (Lr & 130023424) === 0 && (Lr = 4194304)));
    var n = Le();
    ((e = Nt(e, t)), e !== null && ($n(e, t, n), Fe(e, n)));
  }
  function Ff(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), wa(e, n));
  }
  function Af(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(h(314));
    }
    (r !== null && r.delete(t), wa(e, n));
  }
  var ka;
  ka = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Re.current) Ie = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
          return ((Ie = !1), Cf(e, t, n));
        Ie = (e.flags & 131072) !== 0;
      }
    else ((Ie = !1), ie && (t.flags & 1048576) !== 0 && eu(t, qr, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        (pl(e, t), (e = t.pendingProps));
        var l = kn(t, Ne.current);
        (_n(t, n), (l = Vi(null, t, r, e, l, n)));
        var i = Hi();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              De(r) ? ((i = !0), Xr(t)) : (i = !1),
              (t.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              Ii(t),
              (l.updater = fl),
              (t.stateNode = l),
              (l._reactInternals = t),
              Xi(t, r, e, n),
              (t = bi(null, t, r, !0, i, n)))
            : ((t.tag = 0), ie && i && Ci(t), Pe(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (pl(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = Bf(r)),
            (e = ot(r, e)),
            l)
          ) {
            case 0:
              t = qi(null, t, r, e, n);
              break e;
            case 1:
              t = Gu(null, t, r, e, n);
              break e;
            case 11:
              t = Vu(null, t, r, e, n);
              break e;
            case 14:
              t = Hu(null, t, r, ot(r.type, e), n);
              break e;
          }
          throw Error(h(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ot(r, l)),
          qi(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ot(r, l)),
          Gu(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((Yu(t), e === null)) throw Error(h(387));
          ((r = t.pendingProps),
            (i = t.memoizedState),
            (l = i.element),
            au(e, t),
            ll(t, r, null, n));
          var o = t.memoizedState;
          if (((r = o.element), i.isDehydrated))
            if (
              ((i = {
                element: r,
                isDehydrated: !1,
                cache: o.cache,
                pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                transitions: o.transitions,
              }),
              (t.updateQueue.baseState = i),
              (t.memoizedState = i),
              t.flags & 256)
            ) {
              ((l = Pn(Error(h(423)), t)), (t = Xu(e, t, r, n, l)));
              break e;
            } else if (r !== l) {
              ((l = Pn(Error(h(424)), t)), (t = Xu(e, t, r, n, l)));
              break e;
            } else
              for (
                He = It(t.stateNode.containerInfo.firstChild),
                  Ve = t,
                  ie = !0,
                  it = null,
                  n = su(t, null, r, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((Nn(), r === l)) {
              t = Et(e, t, n);
              break e;
            }
            Pe(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          du(t),
          e === null && zi(t),
          (r = t.type),
          (l = t.pendingProps),
          (i = e !== null ? e.memoizedProps : null),
          (o = l.children),
          xi(r, l) ? (o = null) : i !== null && xi(r, i) && (t.flags |= 32),
          Ku(e, t),
          Pe(e, t, o, n),
          t.child
        );
      case 6:
        return (e === null && zi(t), null);
      case 13:
        return Zu(e, t, n);
      case 4:
        return (
          Oi(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Cn(t, null, r, n)) : Pe(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ot(r, l)),
          Vu(e, t, r, l, n)
        );
      case 7:
        return (Pe(e, t, t.pendingProps, n), t.child);
      case 8:
        return (Pe(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (Pe(e, t, t.pendingProps.children, n), t.child);
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (i = t.memoizedProps),
            (o = l.value),
            b(tl, r._currentValue),
            (r._currentValue = o),
            i !== null)
          )
            if (lt(i.value, o)) {
              if (i.children === l.children && !Re.current) {
                t = Et(e, t, n);
                break e;
              }
            } else
              for (i = t.child, i !== null && (i.return = t); i !== null; ) {
                var u = i.dependencies;
                if (u !== null) {
                  o = i.child;
                  for (var a = u.firstContext; a !== null; ) {
                    if (a.context === r) {
                      if (i.tag === 1) {
                        ((a = Ct(-1, n & -n)), (a.tag = 2));
                        var m = i.updateQueue;
                        if (m !== null) {
                          m = m.shared;
                          var g = m.pending;
                          (g === null
                            ? (a.next = a)
                            : ((a.next = g.next), (g.next = a)),
                            (m.pending = a));
                        }
                      }
                      ((i.lanes |= n),
                        (a = i.alternate),
                        a !== null && (a.lanes |= n),
                        Ri(i.return, n, t),
                        (u.lanes |= n));
                      break;
                    }
                    a = a.next;
                  }
                } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
                else if (i.tag === 18) {
                  if (((o = i.return), o === null)) throw Error(h(341));
                  ((o.lanes |= n),
                    (u = o.alternate),
                    u !== null && (u.lanes |= n),
                    Ri(o, n, t),
                    (o = i.sibling));
                } else o = i.child;
                if (o !== null) o.return = i;
                else
                  for (o = i; o !== null; ) {
                    if (o === t) {
                      o = null;
                      break;
                    }
                    if (((i = o.sibling), i !== null)) {
                      ((i.return = o.return), (o = i));
                      break;
                    }
                    o = o.return;
                  }
                i = o;
              }
          (Pe(e, t, l.children, n), (t = t.child));
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          _n(t, n),
          (l = Ze(l)),
          (r = r(l)),
          (t.flags |= 1),
          Pe(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (l = ot(r, t.pendingProps)),
          (l = ot(r.type, l)),
          Hu(e, t, r, l, n)
        );
      case 15:
        return Wu(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ot(r, l)),
          pl(e, t),
          (t.tag = 1),
          De(r) ? ((e = !0), Xr(t)) : (e = !1),
          _n(t, n),
          Iu(t, r, l),
          Xi(t, r, l, n),
          bi(null, t, r, !0, e, n)
        );
      case 19:
        return qu(e, t, n);
      case 22:
        return Qu(e, t, n);
    }
    throw Error(h(156, t.tag));
  };
  function Sa(e, t) {
    return ts(e, t);
  }
  function Uf(e, t, n, r) {
    ((this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function be(e, t, n, r) {
    return new Uf(e, t, n, r);
  }
  function wo(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Bf(e) {
    if (typeof e == "function") return wo(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === ft)) return 11;
      if (e === dt) return 14;
    }
    return 2;
  }
  function Kt(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = be(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function Nl(e, t, n, r, l, i) {
    var o = 2;
    if (((r = e), typeof e == "function")) wo(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else
      e: switch (e) {
        case Te:
          return un(n.children, l, i, t);
        case Ge:
          ((o = 8), (l |= 8));
          break;
        case zt:
          return (
            (e = be(12, n, t, l | 2)),
            (e.elementType = zt),
            (e.lanes = i),
            e
          );
        case Ue:
          return (
            (e = be(13, n, t, l)),
            (e.elementType = Ue),
            (e.lanes = i),
            e
          );
        case nt:
          return (
            (e = be(19, n, t, l)),
            (e.elementType = nt),
            (e.lanes = i),
            e
          );
        case ue:
          return Cl(n, l, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case xt:
                o = 10;
                break e;
              case Yt:
                o = 9;
                break e;
              case ft:
                o = 11;
                break e;
              case dt:
                o = 14;
                break e;
              case Me:
                ((o = 16), (r = null));
                break e;
            }
          throw Error(h(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = be(o, n, t, l)),
      (t.elementType = e),
      (t.type = r),
      (t.lanes = i),
      t
    );
  }
  function un(e, t, n, r) {
    return ((e = be(7, e, r, t)), (e.lanes = n), e);
  }
  function Cl(e, t, n, r) {
    return (
      (e = be(22, e, r, t)),
      (e.elementType = ue),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function ko(e, t, n) {
    return ((e = be(6, e, null, t)), (e.lanes = n), e);
  }
  function So(e, t, n) {
    return (
      (t = be(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function $f(e, t, n, r, l) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Yl(0)),
      (this.expirationTimes = Yl(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Yl(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null));
  }
  function jo(e, t, n, r, l, i, o, u, a) {
    return (
      (e = new $f(e, t, n, u, a)),
      t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
      (i = be(3, null, null, t)),
      (e.current = i),
      (i.stateNode = e),
      (i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Ii(i),
      e
    );
  }
  function Vf(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: ze,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function ja(e) {
    if (!e) return Ft;
    e = e._reactInternals;
    e: {
      if (Xt(e) !== e || e.tag !== 1) throw Error(h(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (De(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(h(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (De(n)) return Js(e, n, t);
    }
    return t;
  }
  function Na(e, t, n, r, l, i, o, u, a) {
    return (
      (e = jo(n, r, !0, e, l, i, o, u, a)),
      (e.context = ja(null)),
      (n = e.current),
      (r = Le()),
      (l = Wt(n)),
      (i = Ct(r, l)),
      (i.callback = t ?? null),
      Bt(n, i, l),
      (e.current.lanes = l),
      $n(e, l, r),
      Fe(e, r),
      e
    );
  }
  function El(e, t, n, r) {
    var l = t.current,
      i = Le(),
      o = Wt(l);
    return (
      (n = ja(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Ct(i, o)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = Bt(l, t, o)),
      e !== null && (at(e, l, o, i), rl(e, l, o)),
      o
    );
  }
  function _l(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Ca(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function No(e, t) {
    (Ca(e, t), (e = e.alternate) && Ca(e, t));
  }
  function Hf() {
    return null;
  }
  var Ea =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Co(e) {
    this._internalRoot = e;
  }
  ((zl.prototype.render = Co.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(h(409));
      El(e, t, null, null);
    }),
    (zl.prototype.unmount = Co.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (ln(function () {
            El(null, e, null, null);
          }),
            (t[wt] = null));
        }
      }));
  function zl(e) {
    this._internalRoot = e;
  }
  zl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = as();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Mt.length && t !== 0 && t < Mt[n].priority; n++);
      (Mt.splice(n, 0, e), n === 0 && ds(e));
    }
  };
  function Eo(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Pl(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function _a() {}
  function Wf(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var i = r;
        r = function () {
          var m = _l(o);
          i.call(m);
        };
      }
      var o = Na(t, r, e, 0, null, !1, !1, "", _a);
      return (
        (e._reactRootContainer = o),
        (e[wt] = o.current),
        tr(e.nodeType === 8 ? e.parentNode : e),
        ln(),
        o
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == "function") {
      var u = r;
      r = function () {
        var m = _l(a);
        u.call(m);
      };
    }
    var a = jo(e, 0, !1, null, null, !1, !1, "", _a);
    return (
      (e._reactRootContainer = a),
      (e[wt] = a.current),
      tr(e.nodeType === 8 ? e.parentNode : e),
      ln(function () {
        El(t, a, n, r);
      }),
      a
    );
  }
  function Ll(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
      var o = i;
      if (typeof l == "function") {
        var u = l;
        l = function () {
          var a = _l(o);
          u.call(a);
        };
      }
      El(t, o, e, l);
    } else o = Wf(n, t, e, l, r);
    return _l(o);
  }
  ((ss = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Bn(t.pendingLanes);
          n !== 0 &&
            (Xl(t, n | 1),
            Fe(t, fe()),
            (H & 6) === 0 && ((Mn = fe() + 500), At()));
        }
        break;
      case 13:
        (ln(function () {
          var r = Nt(e, 1);
          if (r !== null) {
            var l = Le();
            at(r, e, 1, l);
          }
        }),
          No(e, 1));
    }
  }),
    (Zl = function (e) {
      if (e.tag === 13) {
        var t = Nt(e, 134217728);
        if (t !== null) {
          var n = Le();
          at(t, e, 134217728, n);
        }
        No(e, 134217728);
      }
    }),
    (us = function (e) {
      if (e.tag === 13) {
        var t = Wt(e),
          n = Nt(e, t);
        if (n !== null) {
          var r = Le();
          at(n, e, t, r);
        }
        No(e, t);
      }
    }),
    (as = function () {
      return X;
    }),
    (cs = function (e, t) {
      var n = X;
      try {
        return ((X = e), t());
      } finally {
        X = n;
      }
    }),
    (Vl = function (e, t, n) {
      switch (t) {
        case "input":
          if ((Dl(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var l = Gr(r);
                if (!l) throw Error(h(90));
                (Do(r), Dl(r, l));
              }
            }
          }
          break;
        case "textarea":
          Uo(e, n);
          break;
        case "select":
          ((t = n.value), t != null && an(e, !!n.multiple, t, !1));
      }
    }),
    (Yo = vo),
    (Xo = ln));
  var Qf = { usingClientEntryPoint: !1, Events: [lr, xn, Gr, Ko, Go, vo] },
    gr = {
      findFiberByHostInstance: Zt,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Kf = {
      bundleType: gr.bundleType,
      version: gr.version,
      rendererPackageName: gr.rendererPackageName,
      rendererConfig: gr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: je.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = bo(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: gr.findFiberByHostInstance || Hf,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Tl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Tl.isDisabled && Tl.supportsFiber)
      try {
        ((zr = Tl.inject(Kf)), (pt = Tl));
      } catch {}
  }
  return (
    (Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qf),
    (Ae.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Eo(t)) throw Error(h(200));
      return Vf(e, t, null, n);
    }),
    (Ae.createRoot = function (e, t) {
      if (!Eo(e)) throw Error(h(299));
      var n = !1,
        r = "",
        l = Ea;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = jo(e, 1, !1, null, null, n, !1, r, l)),
        (e[wt] = t.current),
        tr(e.nodeType === 8 ? e.parentNode : e),
        new Co(t)
      );
    }),
    (Ae.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(h(188))
          : ((e = Object.keys(e).join(",")), Error(h(268, e)));
      return ((e = bo(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (Ae.flushSync = function (e) {
      return ln(e);
    }),
    (Ae.hydrate = function (e, t, n) {
      if (!Pl(t)) throw Error(h(200));
      return Ll(null, e, t, !0, n);
    }),
    (Ae.hydrateRoot = function (e, t, n) {
      if (!Eo(e)) throw Error(h(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        i = "",
        o = Ea;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
        (t = Na(t, null, e, 1, n ?? null, l, !1, i, o)),
        (e[wt] = t.current),
        tr(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          ((n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l));
      return new zl(t);
    }),
    (Ae.render = function (e, t, n) {
      if (!Pl(t)) throw Error(h(200));
      return Ll(null, e, t, !1, n);
    }),
    (Ae.unmountComponentAtNode = function (e) {
      if (!Pl(e)) throw Error(h(40));
      return e._reactRootContainer
        ? (ln(function () {
            Ll(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[wt] = null));
            });
          }),
          !0)
        : !1;
    }),
    (Ae.unstable_batchedUpdates = vo),
    (Ae.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Pl(n)) throw Error(h(200));
      if (e == null || e._reactInternals === void 0) throw Error(h(38));
      return Ll(e, t, n, !1, r);
    }),
    (Ae.version = "18.3.1-next-f1338f8080-20240426"),
    Ae
  );
}
var Ia;
function ed() {
  if (Ia) return Po.exports;
  Ia = 1;
  function x() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x);
      } catch (S) {
        console.error(S);
      }
  }
  return (x(), (Po.exports = bf()), Po.exports);
}
var Oa;
function td() {
  if (Oa) return Ml;
  Oa = 1;
  var x = ed();
  return ((Ml.createRoot = x.createRoot), (Ml.hydrateRoot = x.hydrateRoot), Ml);
}
var nd = td(),
  Qe = Ro();
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rd = (x) => x.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  ld = (x) =>
    x.replace(/^([A-Z])|[\s-_]+(\w)/g, (S, h, L) =>
      L ? L.toUpperCase() : h.toLowerCase(),
    ),
  Fa = (x) => {
    const S = ld(x);
    return S.charAt(0).toUpperCase() + S.slice(1);
  },
  $a = (...x) =>
    x
      .filter((S, h, L) => !!S && S.trim() !== "" && L.indexOf(S) === h)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var id = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const od = Qe.forwardRef(
  (
    {
      color: x = "currentColor",
      size: S = 24,
      strokeWidth: h = 2,
      absoluteStrokeWidth: L,
      className: F = "",
      children: A,
      iconNode: Z,
      ...I
    },
    V,
  ) =>
    Qe.createElement(
      "svg",
      {
        ref: V,
        ...id,
        width: S,
        height: S,
        stroke: x,
        strokeWidth: L ? (Number(h) * 24) / Number(S) : h,
        className: $a("lucide", F),
        ...I,
      },
      [
        ...Z.map(([ee, ce]) => Qe.createElement(ee, ce)),
        ...(Array.isArray(A) ? A : [A]),
      ],
    ),
);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xe = (x, S) => {
  const h = Qe.forwardRef(({ className: L, ...F }, A) =>
    Qe.createElement(od, {
      ref: A,
      iconNode: S,
      className: $a(`lucide-${rd(Fa(x))}`, `lucide-${x}`, L),
      ...F,
    }),
  );
  return ((h.displayName = Fa(x)), h);
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sd = [
    ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
    ["path", { d: "M19 12H5", key: "x3x0zl" }],
  ],
  ud = xe("arrow-left", sd);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ad = [
    ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
    [
      "path",
      {
        d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
        key: "11g9vi",
      },
    ],
  ],
  cd = xe("bell", ad);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fd = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]],
  Va = xe("check", fd);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dd = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]],
  wr = xe("chevron-right", dd);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pd = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
  ],
  md = xe("circle-check", pd);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hd = [
    [
      "rect",
      {
        width: "14",
        height: "14",
        x: "8",
        y: "8",
        rx: "2",
        ry: "2",
        key: "17jyea",
      },
    ],
    [
      "path",
      {
        d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
        key: "zix9uf",
      },
    ],
  ],
  Ha = xe("copy", hd);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yd = [
    [
      "rect",
      { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" },
    ],
    ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }],
  ],
  vd = xe("credit-card", yd);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gd = [
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
    ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
    ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
  ],
  xd = xe("download", gd);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wd = [
    [
      "path",
      {
        d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
        key: "ct8e1f",
      },
    ],
    ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
    [
      "path",
      {
        d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
        key: "13bj9a",
      },
    ],
    ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ],
  Wa = xe("eye-off", wd);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const kd = [
    [
      "path",
      {
        d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
        key: "1nclc0",
      },
    ],
    ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ],
  Qa = xe("eye", kd);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sd = [
    [
      "path",
      { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" },
    ],
    [
      "path",
      {
        d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
        key: "1d0kgt",
      },
    ],
  ],
  jd = xe("house", Sd);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Nd = [
    [
      "rect",
      {
        width: "18",
        height: "11",
        x: "3",
        y: "11",
        rx: "2",
        ry: "2",
        key: "1w4ew1",
      },
    ],
    ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }],
  ],
  Ka = xe("lock", Nd);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cd = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "M12 5v14", key: "s699le" }],
  ],
  Ga = xe("plus", Cd);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ed = [
    [
      "path",
      {
        d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
        key: "v9h5vc",
      },
    ],
    ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
    [
      "path",
      {
        d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
        key: "3uifl3",
      },
    ],
    ["path", { d: "M8 16H3v5", key: "1cv678" }],
  ],
  _d = xe("refresh-cw", Ed);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zd = [
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
    ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
  ],
  Ya = xe("search", zd);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Pd = [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y",
      },
    ],
  ],
  Xa = xe("shield", Pd);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ld = [
    ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
    ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
  ],
  Za = xe("user", Ld);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Td = [
    ["path", { d: "M12 20h.01", key: "zekei9" }],
    ["path", { d: "M2 8.82a15 15 0 0 1 20 0", key: "dnpr2z" }],
    ["path", { d: "M5 12.859a10 10 0 0 1 14 0", key: "1x1e6c" }],
    ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }],
  ],
  Md = xe("wifi", Td),
  Rd = [
    {
      id: 1,
      name: "Gmail",
      username: "mustafa@gmail.com",
      password: "Gm@il2024Secure!",
      bg: "#EA4335",
      emoji: "📧",
      lastUsed: "2 saat önce",
      strength: "Güçlü",
      strengthLevel: 3,
    },
    {
      id: 2,
      name: "Instagram",
      username: "@mustafa_dev",
      password: "Inst@gr4m!Pass99",
      bg: "#E1306C",
      emoji: "📸",
      lastUsed: "Dün",
      strength: "Güçlü",
      strengthLevel: 3,
    },
    {
      id: 3,
      name: "GitHub",
      username: "mustafadev42",
      password: "G1tHub#Secure99!",
      bg: "#24292e",
      emoji: "🐙",
      lastUsed: "3 gün önce",
      strength: "Çok Güçlü",
      strengthLevel: 4,
    },
    {
      id: 4,
      name: "Netflix",
      username: "mustafa@gmail.com",
      password: "N3tfl1x@H0me!2",
      bg: "#E50914",
      emoji: "🎬",
      lastUsed: "1 hafta önce",
      strength: "Orta",
      strengthLevel: 2,
    },
    {
      id: 5,
      name: "Twitter / X",
      username: "@mustafa_yilmaz",
      password: "Tw1tt3r#2024X!",
      bg: "#000000",
      emoji: "✖️",
      lastUsed: "2 gün önce",
      strength: "Güçlü",
      strengthLevel: 3,
    },
    {
      id: 6,
      name: "LinkedIn",
      username: "mustafa.yilmaz@co",
      password: "L1nk3dIn@Prof!",
      bg: "#0A66C2",
      emoji: "💼",
      lastUsed: "5 gün önce",
      strength: "Güçlü",
      strengthLevel: 3,
    },
  ],
  Aa = [
    {
      id: 1,
      bank: "Ziraat Bankası",
      holder: "MUSTAFA YILMAZ",
      number: "4532123456787841",
      expiry: "08/27",
      type: "Visa",
      cvv: "421",
      c1: "#1a472a",
      c2: "#2d7a4f",
      limit: "25.000 ₺",
      balance: "8.430 ₺",
    },
    {
      id: 2,
      bank: "İş Bankası",
      holder: "MUSTAFA YILMAZ",
      number: "5412987654323256",
      expiry: "12/26",
      type: "Mastercard",
      cvv: "857",
      c1: "#1a1a2e",
      c2: "#2c2c54",
      limit: "15.000 ₺",
      balance: "3.200 ₺",
    },
    {
      id: 3,
      bank: "Akbank",
      holder: "MUSTAFA YILMAZ",
      number: "4916111122229023",
      expiry: "03/28",
      type: "Visa",
      cvv: "293",
      c1: "#7a0000",
      c2: "#c0392b",
      limit: "20.000 ₺",
      balance: "12.750 ₺",
    },
  ],
  Ua = [
    {
      id: 1,
      name: "SkorX",
      url: "https://skorx.vercel.app",
      desc: "Maç tahminlerinin ve kullanıcı skorlarının yönetildiği web uygulaması.",
      services: [
        { name: "GitHub", account: "skorx@gmail.com", password: "SkorX-örnek-şifre", url: "https://github.com/" },
        { name: "Vercel", account: "skorx@gmail.com", password: "Vercel-örnek-şifre", url: "https://vercel.com/" },
        { name: "Firebase", account: "skorx@gmail.com", password: "Firebase-örnek-şifre", url: "https://console.firebase.google.com/" },
      ],
      notes: "Kodlar GitHub deposundan Vercel'e otomatik aktarılır. Veriler Firebase üzerinde tutulur.",
      updated: "Bugün",
    },
    {
      id: 2,
      name: "Kişisel Kasa",
      url: "https://kisisel-kasa.vercel.app",
      desc: "Şifrelerin, kartların, projelerin, notların ve belgelerin saklandığı kişisel kasa.",
      services: [
        { name: "GitHub", account: "kasa@gmail.com", password: "Kasa-örnek-şifre", url: "https://github.com/" },
        { name: "Vercel", account: "kasa@gmail.com", password: "Vercel-örnek-şifre", url: "https://vercel.com/" },
      ],
      notes: "AES-256 şifreleme kullanır. Firebase bağlantısı yayın ortamındaki ayarlardan sağlanır.",
      updated: "2 gün önce",
    },
    {
      id: 3,
      name: "Sipariş Takip Sistemi",
      url: "https://siparis-paneli.netlify.app",
      desc: "Siparişlerin, müşterilerin ve teslimat durumlarının takip edildiği yönetim paneli.",
      services: [
        { name: "GitHub", account: "siparis@gmail.com", password: "Sipariş-örnek-şifre", url: "https://github.com/" },
        { name: "Netlify", account: "siparis@gmail.com", password: "Netlify-örnek-şifre", url: "https://app.netlify.com/" },
      ],
      notes: "Yeni sürüm GitHub ana dalına gönderildiğinde Netlify otomatik yayınlar.",
      updated: "1 hafta önce",
    },
  ],
  Mo = [
    {
      id: 1,
      title: "Sunucu Kurulum Notları",
      content:
        "Ubuntu 22.04 LTS kurulum adımları. nginx reverse proxy konfigürasyonu. SSL sertifika yenileme tarihi: 15 Mart 2025. Komutlar: sudo apt update && apt upgrade -y",
      date: "13 Ağu",
      category: "Teknik",
      accent: "#1B4DD8",
      pinned: !0,
    },
    {
      id: 2,
      title: "Sprint 12 Hedefleri",
      content:
        "1. Auth modülünü tamamla  2. Unit testler — %80 coverage hedefi  3. Staging ortamına deploy  4. Code review'ları bitir  5. Dökümantasyon güncelle",
      date: "12 Ağu",
      category: "İş",
      accent: "#1A5C3A",
      pinned: !0,
    },
    {
      id: 3,
      title: "Ofis Erişim Bilgileri",
      content:
        "WiFi: Mustafa_Office_5G / Şifre: Ofis@2024Secure!  VPN server: vpn.company.com:1194  Toplantı odası kodu: 4821  Asansör şifresi: 1234#",
      date: "10 Ağu",
      category: "Gizli",
      accent: "#E05A3A",
      pinned: !1,
    },
    {
      id: 4,
      title: "2FA Yedek Kodlar",
      content:
        "Gmail: 7291-4823, 8821-3942, 4412-8823  GitHub: 1234-5678, 8765-4321  LinkedIn: 2468-1357, 9753-8642  DİKKAT: Tek kullanımlık — saklayın!",
      date: "5 Ağu",
      category: "Güvenlik",
      accent: "#7c3aed",
      pinned: !1,
    },
  ],
  Ba = [
    {
      id: 1,
      name: "TC Kimlik — Ön Yüz",
      type: "Kimlik",
      size: "2.1 MB",
      date: "15 Haz 2026",
      emoji: "🪪",
      color: "#1B4DD8",
    },
    {
      id: 2,
      name: "Pasaport — Bilgi Sayfası",
      type: "Pasaport",
      size: "3.4 MB",
      date: "20 May 2026",
      emoji: "📘",
      color: "#1A5C3A",
    },
    {
      id: 3,
      name: "Araç Ruhsatı",
      type: "Ruhsat",
      size: "1.8 MB",
      date: "8 Mar 2026",
      emoji: "🚗",
      color: "#E05A3A",
    },
    {
      id: 4,
      name: "Sağlık Sigortası 2026",
      type: "Sigorta",
      size: "5.2 MB",
      date: "1 Oca 2026",
      emoji: "🏥",
      color: "#d97706",
    },
    {
      id: 5,
      name: "İkametgah Belgesi",
      type: "Resmi",
      size: "0.9 MB",
      date: "12 Ara 2025",
      emoji: "🏠",
      color: "#6b7280",
    },
    {
      id: 6,
      name: "Diploma — Lisans",
      type: "Eğitim",
      size: "4.1 MB",
      date: "5 Haz 2022",
      emoji: "🎓",
      color: "#7c3aed",
    },
  ];
function Dd(x) {
  return `${x.slice(0, 4)} •••• •••• ${x.slice(-4)}`;
}
function Id(x) {
  return `${x.slice(0, 4)} ${x.slice(4, 8)} ${x.slice(8, 12)} ${x.slice(12)}`;
}
function Od() {
  return s.jsxs("svg", {
    viewBox: "0 0 130 130",
    className: "w-full h-full",
    "aria-hidden": !0,
    children: [
      s.jsx("rect", {
        x: "25",
        y: "62",
        width: "80",
        height: "58",
        rx: "13",
        fill: "rgba(255,255,255,0.22)",
      }),
      s.jsx("path", {
        d: "M40 62 V42 Q40 18 65 18 Q90 18 90 42 V62",
        fill: "none",
        stroke: "rgba(255,255,255,0.3)",
        strokeWidth: "11",
        strokeLinecap: "round",
      }),
      s.jsx("circle", {
        cx: "65",
        cy: "85",
        r: "9",
        fill: "rgba(255,255,255,0.5)",
      }),
      s.jsx("rect", {
        x: "61",
        y: "90",
        width: "8",
        height: "14",
        rx: "3",
        fill: "rgba(255,255,255,0.5)",
      }),
      s.jsx("circle", {
        cx: "105",
        cy: "108",
        r: "14",
        fill: "rgba(255,215,0,0.75)",
      }),
      s.jsx("rect", {
        x: "114",
        y: "104",
        width: "20",
        height: "6.5",
        rx: "3",
        fill: "rgba(255,215,0,0.8)",
      }),
      s.jsx("rect", {
        x: "126",
        y: "100",
        width: "5",
        height: "6",
        rx: "1.5",
        fill: "rgba(255,215,0,0.8)",
      }),
    ],
  });
}
function Fd() {
  return s.jsxs("svg", {
    viewBox: "0 0 140 130",
    className: "w-full h-full",
    "aria-hidden": !0,
    children: [
      s.jsx("rect", {
        x: "18",
        y: "18",
        width: "112",
        height: "70",
        rx: "12",
        fill: "rgba(255,255,255,0.12)",
        transform: "rotate(-6 74 53)",
      }),
      s.jsx("rect", {
        x: "14",
        y: "28",
        width: "112",
        height: "70",
        rx: "12",
        fill: "rgba(255,255,255,0.18)",
        transform: "rotate(-2 70 63)",
      }),
      s.jsx("rect", {
        x: "10",
        y: "38",
        width: "112",
        height: "70",
        rx: "12",
        fill: "rgba(255,255,255,0.28)",
      }),
      s.jsx("rect", {
        x: "22",
        y: "57",
        width: "24",
        height: "18",
        rx: "3.5",
        fill: "rgba(255,215,0,0.72)",
      }),
      s.jsx("path", {
        d: "M62 64 Q72 58 62 52",
        fill: "none",
        stroke: "rgba(255,255,255,0.65)",
        strokeWidth: "2.5",
        strokeLinecap: "round",
      }),
      s.jsx("path", {
        d: "M62 69 Q76 61 62 49",
        fill: "none",
        stroke: "rgba(255,255,255,0.45)",
        strokeWidth: "2.5",
        strokeLinecap: "round",
      }),
      s.jsx("circle", {
        cx: "32",
        cy: "90",
        r: "2.8",
        fill: "rgba(255,255,255,0.6)",
      }),
      s.jsx("circle", {
        cx: "42",
        cy: "90",
        r: "2.8",
        fill: "rgba(255,255,255,0.6)",
      }),
      s.jsx("circle", {
        cx: "52",
        cy: "90",
        r: "2.8",
        fill: "rgba(255,255,255,0.6)",
      }),
      s.jsx("circle", {
        cx: "62",
        cy: "90",
        r: "2.8",
        fill: "rgba(255,255,255,0.6)",
      }),
    ],
  });
}
function Ad() {
  return s.jsxs("svg", {
    viewBox: "0 0 240 150",
    className: "w-full h-full",
    "aria-hidden": !0,
    children: [
      s.jsx("rect", {
        x: "110",
        y: "18",
        width: "108",
        height: "86",
        rx: "11",
        fill: "rgba(255,255,255,0.1)",
        transform: "rotate(7 164 61)",
      }),
      s.jsx("rect", {
        x: "90",
        y: "26",
        width: "108",
        height: "86",
        rx: "11",
        fill: "rgba(255,255,255,0.16)",
        transform: "rotate(3 144 69)",
      }),
      s.jsx("path", {
        d: "M58 48 Q58 40 70 40 L116 40 Q126 40 128 50 L176 50 Q184 50 184 58 V110 Q184 118 176 118 L66 118 Q58 118 58 110 Z",
        fill: "rgba(255,255,255,0.26)",
      }),
      s.jsx("path", {
        d: "M70 40 L106 40 L116 50 L70 50 Z",
        fill: "rgba(255,255,255,0.14)",
      }),
      s.jsx("text", {
        x: "90",
        y: "90",
        fontSize: "30",
        fontFamily: "monospace",
        fill: "rgba(255,215,0,0.85)",
        fontWeight: "bold",
        children: "</>",
      }),
      s.jsx("circle", {
        cx: "208",
        cy: "28",
        r: "7",
        fill: "rgba(255,215,0,0.75)",
      }),
      s.jsx("circle", {
        cx: "225",
        cy: "56",
        r: "5.5",
        fill: "rgba(255,215,0,0.55)",
      }),
      s.jsx("circle", {
        cx: "198",
        cy: "60",
        r: "4.5",
        fill: "rgba(255,215,0,0.55)",
      }),
      s.jsx("line", {
        x1: "208",
        y1: "28",
        x2: "225",
        y2: "56",
        stroke: "rgba(255,215,0,0.38)",
        strokeWidth: "1.5",
      }),
      s.jsx("line", {
        x1: "208",
        y1: "28",
        x2: "198",
        y2: "60",
        stroke: "rgba(255,215,0,0.38)",
        strokeWidth: "1.5",
      }),
      s.jsx("line", {
        x1: "225",
        y1: "56",
        x2: "198",
        y2: "60",
        stroke: "rgba(255,215,0,0.38)",
        strokeWidth: "1.5",
      }),
    ],
  });
}
function Ud() {
  return s.jsxs("svg", {
    viewBox: "0 0 120 120",
    className: "w-full h-full",
    "aria-hidden": !0,
    children: [
      s.jsx("rect", {
        x: "18",
        y: "12",
        width: "78",
        height: "94",
        rx: "6",
        fill: "rgba(139,90,43,0.22)",
      }),
      s.jsx("rect", {
        x: "22",
        y: "14",
        width: "74",
        height: "92",
        rx: "5",
        fill: "rgba(255,255,255,0.55)",
      }),
      [22, 33, 44, 55, 66, 77, 88].map((x, S) =>
        s.jsx(
          "circle",
          { cx: "20", cy: x, r: "4.5", fill: "rgba(139,90,43,0.38)" },
          S,
        ),
      ),
      s.jsx("line", {
        x1: "30",
        y1: "32",
        x2: "87",
        y2: "32",
        stroke: "rgba(139,90,43,0.22)",
        strokeWidth: "1.5",
      }),
      s.jsx("line", {
        x1: "30",
        y1: "44",
        x2: "87",
        y2: "44",
        stroke: "rgba(139,90,43,0.22)",
        strokeWidth: "1.5",
      }),
      s.jsx("line", {
        x1: "30",
        y1: "56",
        x2: "87",
        y2: "56",
        stroke: "rgba(139,90,43,0.22)",
        strokeWidth: "1.5",
      }),
      s.jsx("line", {
        x1: "30",
        y1: "68",
        x2: "68",
        y2: "68",
        stroke: "rgba(139,90,43,0.22)",
        strokeWidth: "1.5",
      }),
      s.jsx("path", {
        d: "M54 70 Q54 63 62 60 Q70 63 70 70 V77 Q70 84 62 87 Q54 84 54 77 Z",
        fill: "rgba(255,215,0,0.72)",
      }),
      s.jsx("circle", {
        cx: "62",
        cy: "72",
        r: "3.8",
        fill: "rgba(100,65,20,0.5)",
      }),
      s.jsx("rect", {
        x: "59.5",
        y: "74.5",
        width: "5",
        height: "7",
        rx: "1.5",
        fill: "rgba(100,65,20,0.5)",
      }),
      s.jsx("rect", {
        x: "74",
        y: "62",
        width: "9",
        height: "36",
        rx: "3.5",
        fill: "rgba(25,25,25,0.48)",
        transform: "rotate(-18 78 80)",
      }),
      s.jsx("polygon", {
        points: "70,98 74.5,90 79,98",
        fill: "rgba(200,155,55,0.65)",
        transform: "rotate(-18 75 94)",
      }),
    ],
  });
}
function Bd() {
  return s.jsxs("svg", {
    viewBox: "0 0 120 120",
    className: "w-full h-full",
    "aria-hidden": !0,
    children: [
      s.jsx("rect", {
        x: "12",
        y: "18",
        width: "82",
        height: "82",
        rx: "9",
        fill: "rgba(160,160,185,0.38)",
      }),
      s.jsx("rect", {
        x: "15",
        y: "21",
        width: "76",
        height: "76",
        rx: "7",
        fill: "rgba(200,200,225,0.28)",
      }),
      s.jsx("line", {
        x1: "12",
        y1: "59",
        x2: "94",
        y2: "59",
        stroke: "rgba(140,140,165,0.38)",
        strokeWidth: "2.5",
      }),
      s.jsx("rect", {
        x: "36",
        y: "29",
        width: "30",
        height: "11",
        rx: "5.5",
        fill: "rgba(255,215,0,0.7)",
      }),
      s.jsx("rect", {
        x: "36",
        y: "61",
        width: "30",
        height: "11",
        rx: "5.5",
        fill: "rgba(255,215,0,0.7)",
      }),
      s.jsx("circle", {
        cx: "80",
        cy: "59",
        r: "18",
        fill: "rgba(255,215,0,0.5)",
        stroke: "rgba(255,215,0,0.82)",
        strokeWidth: "2.2",
      }),
      s.jsx("circle", {
        cx: "80",
        cy: "59",
        r: "9",
        fill: "rgba(255,215,0,0.72)",
      }),
      [0, 45, 90, 135, 180, 225, 270, 315].map((x, S) => {
        const h = (x * Math.PI) / 180;
        return s.jsx(
          "line",
          {
            x1: 80 + 9 * Math.cos(h),
            y1: 59 + 9 * Math.sin(h),
            x2: 80 + 16 * Math.cos(h),
            y2: 59 + 16 * Math.sin(h),
            stroke: "rgba(120,80,20,0.6)",
            strokeWidth: "2.8",
            strokeLinecap: "round",
          },
          S,
        );
      }),
      s.jsx("rect", {
        x: "2",
        y: "10",
        width: "22",
        height: "28",
        rx: "2.5",
        fill: "rgba(100,150,255,0.48)",
        transform: "rotate(-10 13 24)",
      }),
      s.jsx("rect", {
        x: "11",
        y: "8",
        width: "22",
        height: "28",
        rx: "2.5",
        fill: "rgba(255,255,255,0.5)",
        transform: "rotate(-3 22 22)",
      }),
    ],
  });
}
function $d() {
  return null;
  /* Telefon görünümünde kalabalık yaptığı için özel saat, sinyal,
     Wi-Fi ve pil durum çubuğu devre dışı bırakıldı. */
  return s.jsxs("div", {
    className:
      "flex items-center justify-between px-6 pt-4 pb-1 text-xs font-semibold text-[#1A1A2E] flex-shrink-0",
    children: [
      s.jsx("span", {
        style: { fontFamily: "'Inter', sans-serif" },
        children: "9:41",
      }),
      s.jsxs("div", {
        className: "flex items-center gap-1.5",
        children: [
          s.jsxs("svg", {
            width: "17",
            height: "12",
            viewBox: "0 0 17 12",
            fill: "currentColor",
            "aria-hidden": !0,
            children: [
              s.jsx("rect", {
                x: "0",
                y: "4",
                width: "3",
                height: "8",
                rx: "1",
              }),
              s.jsx("rect", {
                x: "4.5",
                y: "2.5",
                width: "3",
                height: "9.5",
                rx: "1",
              }),
              s.jsx("rect", {
                x: "9",
                y: "1",
                width: "3",
                height: "11",
                rx: "1",
              }),
              s.jsx("rect", {
                x: "13.5",
                y: "0",
                width: "3",
                height: "12",
                rx: "1",
              }),
            ],
          }),
          s.jsx(Md, { size: 14 }),
          s.jsxs("svg", {
            width: "26",
            height: "12",
            viewBox: "0 0 26 12",
            fill: "currentColor",
            "aria-hidden": !0,
            children: [
              s.jsx("rect", {
                x: "0.5",
                y: "0.5",
                width: "21",
                height: "11",
                rx: "3.5",
                stroke: "currentColor",
                strokeWidth: "1",
                fill: "none",
                opacity: "0.5",
              }),
              s.jsx("rect", {
                x: "2",
                y: "2",
                width: "17",
                height: "8",
                rx: "2.5",
                fill: "currentColor",
              }),
              s.jsx("rect", {
                x: "22.5",
                y: "3.5",
                width: "3",
                height: "5",
                rx: "1.5",
                fill: "currentColor",
                opacity: "0.5",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function KasaHistoryIcon({ size = 22, strokeWidth = 2 }) {
  return s.jsxs("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      s.jsx("path", { d: "M3 12a9 9 0 1 0 3-6.7" }),
      s.jsx("path", { d: "M3 4v5h5" }),
      s.jsx("path", { d: "M12 7v5l3 2" }),
    ],
  });
}
function Vd({ active: x, onSelect: S }) {
  const h = [
    { id: "anasayfa", label: "Ana Sayfa", Icon: jd },
    { id: "kasa", label: "Kasa", Icon: Xa },
    { id: "ara", label: "Ara", Icon: Ya },
    { id: "gecmis", label: "Geçmiş", Icon: KasaHistoryIcon },
    { id: "profil", label: "Profil", Icon: Za },
  ];
  return s.jsx("div", {
    className:
      "flex-shrink-0 flex items-center justify-around bg-white border-t border-gray-100 px-1 py-2 pb-4",
    style: { fontFamily: "'Inter', sans-serif" },
    children: h.map(({ id: L, label: F, Icon: A }) =>
      s.jsxs(
        "button",
        {
          onClick: () => S(L),
          className: `flex flex-col items-center gap-0.5 px-3 py-1 transition-colors ${x === L ? "text-[#1B4DD8]" : "text-gray-400"}`,
          children: [
            s.jsx(A, { size: 22, strokeWidth: x === L ? 2.5 : 1.8 }),
            s.jsx("span", {
              className: `text-[10px] font-medium ${x === L ? "text-[#1B4DD8]" : "text-gray-400"}`,
              children: F,
            }),
            x === L &&
              s.jsx("div", { className: "w-1 h-1 bg-[#1B4DD8] rounded-full" }),
          ],
        },
        L,
      ),
    ),
  });
}
function kr({ title: x, onBack: S, onAdd: h }) {
  return s.jsxs("div", {
    className: "flex items-center justify-between px-5 py-3 flex-shrink-0",
    children: [
      s.jsx("button", {
        onClick: S,
        className:
          "w-10 h-10 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 active:scale-95 transition-transform",
        "aria-label": "Geri",
        children: s.jsx(ud, { size: 18, className: "text-gray-700" }),
      }),
      s.jsx("h2", {
        className: "font-bold text-[#1A1A2E] text-lg",
        style: { fontFamily: "'Inter', sans-serif" },
        children: x,
      }),
      h
        ? s.jsx("button", {
            onClick: h,
            className:
              "w-10 h-10 bg-[#1B4DD8] rounded-2xl flex items-center justify-center shadow-md active:scale-95 transition-transform",
            "aria-label": "Yeni ekle",
            children: s.jsx(Ga, { size: 18, className: "text-white" }),
          })
        : s.jsx("div", { className: "w-10" }),
    ],
  });
}
function Hd({ onNavigate: x, onAdd: S, onSync: syncFirebase, syncState = "idle", counts: h = {} }) {
  return s.jsxs("div", {
    className: "flex-1 overflow-hidden px-4 pb-2",
    style: { fontFamily: "'Inter', sans-serif" },
    children: [
      s.jsxs("div", {
        className: "flex items-center justify-between py-2",
        children: [
          s.jsxs("div", {
            className: "flex items-center gap-2.5",
            children: [
              s.jsx("div", {
                className:
                  "w-10 h-10 rounded-xl flex items-center justify-center shadow-md",
                style: {
                  background: "linear-gradient(135deg, #f59e0b, #d97706)",
                },
                children: s.jsx(Ka, { size: 20, className: "text-white" }),
              }),
              s.jsx("span", {
                className:
                  "font-bold text-[#1A1A2E] text-[17px] tracking-tight",
                children: "Kişisel Kasa",
              }),
            ],
          }),
          s.jsxs("div", {
            className: "flex items-center gap-2",
            children: [
              s.jsx("button", {
                onClick: S,
                className:
                  "w-9 h-9 rounded-full bg-[#1B4DD8] flex items-center justify-center shadow-md active:scale-95 transition-transform",
                "aria-label": "Yeni kayıt",
                children: s.jsx(Ga, { size: 18, className: "text-white" }),
              }),
              s.jsx("button", {
                className:
                  "w-9 h-9 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm",
                children: s.jsx(Za, { size: 18, className: "text-gray-500" }),
              }),
            ],
          }),
        ],
      }),
      s.jsxs("div", {
        className: "flex items-center justify-between mb-3",
        children: [
          s.jsx("h1", {
            className: "font-bold text-[#1A1A2E] leading-tight",
            style: {
              fontFamily: "'Playfair Display', serif",
              fontSize: "24px",
              whiteSpace: "nowrap",
            },
            children: "Merhaba, Mustafa",
          }),
          s.jsxs("div", {
            className:
              "kasa-no-longpress ml-2 bg-white rounded-2xl px-2.5 py-1.5 shadow-sm border border-green-100 flex items-center gap-1.5 flex-shrink-0",
            onContextMenu: (event) => event.preventDefault(),
            onDragStart: (event) => event.preventDefault(),
            children: [
              s.jsx(md, { size: 15, className: "text-green-500" }),
              s.jsx("span", {
                className:
                  "text-green-600 text-xs font-semibold whitespace-nowrap",
                children: "Kasan Güvende",
              }),
            ],
          }),
        ],
      }),
      s.jsxs("div", {
        className: "kasa-no-longpress flex gap-2 mb-3 flex-nowrap",
        onContextMenu: (event) => event.preventDefault(),
        onDragStart: (event) => event.preventDefault(),
        children: [
          s.jsxs("div", {
            className:
              "flex-1 flex items-center justify-center gap-1.5 bg-white rounded-xl px-2 py-1.5 shadow-sm border border-gray-100",
            children: [
              s.jsx(Xa, { size: 13, className: "text-blue-500" }),
              s.jsx("span", {
                className: "text-[11px] font-semibold text-gray-700",
                children: "AES-256 Şifreleme",
              }),
            ],
          }),
          s.jsxs("button", {
            type: "button",
            onClick: syncFirebase,
            disabled: syncState === "syncing",
            "aria-label": "Firebase verilerini şimdi senkronize et",
            className:
              "flex-1 flex items-center justify-center gap-1.5 bg-white rounded-xl px-2 py-1.5 shadow-sm border border-gray-100 active:scale-[0.98] transition-transform disabled:opacity-70",
            children: [
              s.jsx(_d, { size: 13, className: syncState === "error" ? "text-red-500" : "text-green-500" }),
              s.jsx("span", {
                className: "text-[11px] font-semibold text-gray-700",
                children: syncState === "syncing" ? "Senkronize..." : syncState === "done" ? "Güncel ✓" : syncState === "error" ? "Tekrar Dene" : "Firebase Senkron",
              }),
            ],
          }),
        ],
      }),
      s.jsxs("div", {
        className: "space-y-3",
        children: [
          s.jsxs("div", {
            className: "grid grid-cols-2 gap-3",
            children: [
              s.jsxs("button", {
                onClick: () => x("hesaplar"),
                className:
                  "relative rounded-3xl overflow-hidden h-44 flex flex-col justify-start p-4 text-left active:scale-[0.97] transition-transform",
                style: {
                  background: "linear-gradient(145deg, #1B3EC8, #2563eb)",
                  height: "154px",
                },
                children: [
                  s.jsx("span", {
                    className:
                      "relative z-10 font-bold text-white text-lg leading-tight",
                    children: "Hesaplar",
                  }),
                  s.jsx("span", {
                    className:
                      "relative z-10 text-blue-200 text-[11px] mt-1 font-medium",
                    children: `${h.hesaplar || 0} şifre kayıtlı`,
                  }),
                  s.jsx("div", {
                    className: "absolute right-0 bottom-0 pointer-events-none",
                    children: s.jsx("img", {
                      src: "./assets/icon-hesaplar.png",
                      alt: "",
                      style: {
                        width: "130px", // İkon genişliği: Büyütmek için artır, küçültmek için azalt
                        height: "125px", // İkon yüksekliği: Genellikle width ile aynı değeri kullan

                        objectFit: "contain", // İkonun oranını korur, değiştirme

                        transform: "translate(8px, 12px)",
                        // İlk 12px  = yatay konum
                        // Artırırsan sağa gider: 20px
                        // Azaltırsan sola gider: 0px veya -10px
                        //
                        // İkinci 12px = dikey konum
                        // Artırırsan aşağı gider: 20px
                        // Azaltırsan yukarı gider: 0px veya -10px

                        filter: "drop-shadow(0 8px 10px rgba(8, 24, 70, 0.25))",
                        // İkonun gölgesi, değiştirmek zorunda değilsin
                      },
                    }),
                  }),
                  s.jsx("div", {
                    className:
                      "absolute z-10 bottom-3.5 left-4 w-7 h-7 bg-white/20 rounded-full flex items-center justify-center",
                    children: s.jsx(wr, { size: 14, className: "text-white" }),
                  }),
                ],
              }),
              s.jsxs("button", {
                onClick: () => x("kartlar"),
                className:
                  "relative rounded-3xl overflow-hidden h-44 flex flex-col justify-start p-4 text-left active:scale-[0.97] transition-transform",
                style: {
                  background: "linear-gradient(145deg, #c8481e, #e8613a)",
                  height: "154px",
                },
                children: [
                  s.jsx("span", {
                    className:
                      "relative z-10 font-bold text-white text-lg leading-tight",
                    children: "Kartlar",
                  }),
                  s.jsx("span", {
                    className:
                      "relative z-10 text-orange-100 text-[11px] mt-1 font-medium",
                    children: `${h.kartlar || 0} kart kayıtlı`,
                  }),
                  s.jsx("div", {
                    className: "absolute right-0 bottom-0 pointer-events-none",
                    children: s.jsx("img", {
                      src: "./assets/icon-kartlar.png",
                      alt: "",
                      style: {
                        width: "130px", // Kartlar ikonunun genişliği
                        height: "110px", // Kartlar ikonunun yüksekliği

                        objectFit: "contain", // Görsel oranını korur, değiştirme

                        transform: "translate(8px, 1px)",
                        // İlk değer yatay konum:
                        // 20px yaparsan sağa gider
                        // 0px yaparsan sola gelir
                        //
                        // İkinci değer dikey konum:
                        // 20px yaparsan aşağı gider
                        // 0px yaparsan yukarı gelir

                        filter:
                          "drop-shadow(0 8px 10px rgba(92, 26, 10, 0.22))",
                        // Kart ikonunun gölgesi
                      },
                    }),
                  }),
                  s.jsx("div", {
                    className:
                      "absolute z-10 bottom-3.5 left-4 w-7 h-7 bg-white/20 rounded-full flex items-center justify-center",
                    children: s.jsx(wr, { size: 14, className: "text-white" }),
                  }),
                ],
              }),
            ],
          }),
          s.jsxs("button", {
            onClick: () => x("projeler"),
            className:
              "relative w-full rounded-3xl overflow-hidden h-40 flex flex-col justify-start p-5 text-left active:scale-[0.98] transition-transform",
            style: {
              background: "linear-gradient(135deg, #1A5238, #16a34a)",
              height: "132px",
            },
            children: [
              s.jsx("span", {
                className:
                  "relative z-10 font-bold text-white text-xl leading-tight",
                children: "Projeler",
              }),
              s.jsx("span", {
                className:
                  "relative z-10 text-green-200 text-[11px] mt-1 font-medium",
                children: `${h.projeler || 0} proje kayıtlı`,
              }),
              s.jsx("div", {
                className: "absolute pointer-events-none",

                style: {
                  right: "-20px",
                  // Sağ-sol konumu:
                  // Daha sağa götürmek için: -20px
                  // Daha sola getirmek için: 0px, 10px veya 20px

                  bottom: "-10px",
                  // Yukarı-aşağı konumu:
                  // Daha aşağı götürmek için: -20px
                  // Daha yukarı getirmek için: 0px, 10px veya 20px
                },

                children: s.jsx("img", {
                  src: "./assets/icon-projeler.png",
                  alt: "",

                  style: {
                    width: "185px", // Proje ikonunun genişliği
                    height: "148px", // Proje ikonunun yüksekliği

                    objectFit: "contain", // Görsel oranını korur, değiştirme

                    filter: "drop-shadow(0 8px 10px rgba(4, 45, 28, 0.25))",
                    // Proje ikonunun gölgesi
                  },
                }),
              }),
              s.jsx("div", {
                className:
                  "absolute z-10 bottom-4 left-5 w-7 h-7 bg-white/20 rounded-full flex items-center justify-center",
                children: s.jsx(wr, { size: 14, className: "text-white" }),
              }),
            ],
          }),
          s.jsxs("div", {
            className: "grid grid-cols-2 gap-3",
            children: [
              s.jsxs("button", {
                onClick: () => x("notlar"),
                className:
                  "relative rounded-3xl overflow-hidden h-44 flex flex-col justify-start p-4 text-left active:scale-[0.97] transition-transform",
                style: {
                  background: "linear-gradient(145deg, #ead5a0, #f5e6c0)",
                  height: "154px",
                },
                children: [
                  s.jsxs("span", {
                    className:
                      "relative z-10 font-bold text-[#5c3e0a] text-base leading-tight",
                    children: ["Güvenli", s.jsx("br", {}), "Notlar"],
                  }),
                  s.jsx("span", {
                    className:
                      "relative z-10 text-amber-700 text-[11px] mt-1 font-medium",
                    children: `${h.notlar || 0} not`,
                  }),
                  s.jsx("div", {
                    className: "absolute right-0 bottom-0 pointer-events-none",
                    children: s.jsx("img", {
                      src: "./assets/icon-notlar.png",
                      alt: "",
                      style: {
                        width: "130px", // Not defteri ikonunun genişliği
                        height: "130px", // Not defteri ikonunun yüksekliği

                        objectFit: "contain", // Görsel oranını korur, değiştirme

                        transform: "translate(12px, 1px)",
                        // İlk değer yatay konum:
                        // Artırırsan sağa gider
                        // Azaltırsan sola gelir
                        //
                        // İkinci değer dikey konum:
                        // Artırırsan aşağı gider
                        // Azaltırsan yukarı gelir

                        filter: "drop-shadow(0 8px 10px rgba(92, 62, 10, 0.2))",
                        // Not ikonunun gölgesi
                      },
                    }),
                  }),
                  s.jsx("div", {
                    className:
                      "absolute z-10 bottom-3.5 left-4 w-7 h-7 bg-amber-900/15 rounded-full flex items-center justify-center",
                    children: s.jsx(wr, {
                      size: 14,
                      className: "text-amber-800",
                    }),
                  }),
                ],
              }),
              s.jsxs("button", {
                onClick: () => x("belgeler"),
                className:
                  "relative rounded-3xl overflow-hidden h-44 flex flex-col justify-start p-4 text-left active:scale-[0.97] transition-transform",
                style: {
                  background: "linear-gradient(145deg, #d0d0de, #e8e8ec)",
                  height: "154px",
                },
                children: [
                  s.jsx("span", {
                    className:
                      "relative z-10 font-bold text-[#2a2a3a] text-base leading-tight",
                    children: "Belgeler",
                  }),
                  s.jsx("span", {
                    className:
                      "relative z-10 text-gray-500 text-[11px] mt-1 font-medium",
                    children: `${h.belgeler || 0} belge`,
                  }),
                  s.jsx("div", {
                    className: "absolute right-0 bottom-0 pointer-events-none",
                    children: s.jsx("img", {
                      src: "./assets/icon-belgeler.png",
                      alt: "",
                      style: {
                        width: "139px", // Belgeler ikonunun genişliği
                        height: "139px", // Belgeler ikonunun yüksekliği

                        objectFit: "contain", // Görsel oranını korur, değiştirme

                        transform: "translate(12px, 10px)",
                        // İlk değer yatay konum:
                        // Artırırsan sağa gider
                        // Azaltırsan sola gelir
                        //
                        // İkinci değer dikey konum:
                        // Artırırsan aşağı gider
                        // Azaltırsan yukarı gelir

                        filter: "drop-shadow(0 8px 10px rgba(36, 43, 60, 0.2))",
                        // Belgeler ikonunun gölgesi
                      },
                    }),
                  }),
                  s.jsx("div", {
                    className:
                      "absolute z-10 bottom-3.5 left-4 w-7 h-7 bg-gray-400/20 rounded-full flex items-center justify-center",
                    children: s.jsx(wr, {
                      size: 14,
                      className: "text-gray-600",
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function kasaDialog({
  title,
  message = "",
  fields = [],
  confirmText = "Onayla",
  danger = !1,
}) {
  return new Promise((resolve) => {
    const host = document.querySelector(".kasa-phone-shell") || document.body,
      overlay = document.createElement("div"),
      panel = document.createElement("form"),
      icon = document.createElement("div"),
      heading = document.createElement("div"),
      description = document.createElement("div"),
      fieldWrap = document.createElement("div"),
      actions = document.createElement("div"),
      cancelButton = document.createElement("button"),
      confirmButton = document.createElement("button"),
      controls = {};
    overlay.className = "kasa-dialog-overlay";
    panel.className = "kasa-dialog-panel";
    icon.className = `kasa-dialog-icon ${danger ? "is-danger" : ""}`;
    icon.textContent = danger ? "!" : "✦";
    heading.className = "kasa-dialog-title";
    heading.textContent = title;
    description.className = "kasa-dialog-message";
    description.textContent = message;
    fieldWrap.className = "kasa-dialog-fields";
    fields.forEach((field) => {
      const label = document.createElement("label"),
        labelText = document.createElement("span"),
        control = document.createElement(field.area ? "textarea" : "input");
      label.className = "kasa-dialog-field";
      labelText.textContent = field.label;
      control.value = field.value || "";
      control.placeholder = field.placeholder || "";
      if (!field.area) control.type = field.type || "text";
      if (field.area) control.rows = field.rows || 3;
      label.append(labelText, control);
      fieldWrap.appendChild(label);
      controls[field.key] = control;
    });
    actions.className = "kasa-dialog-actions";
    cancelButton.type = "button";
    cancelButton.className = "kasa-dialog-cancel";
    cancelButton.textContent = "Vazgeç";
    confirmButton.type = "button";
    confirmButton.className = `kasa-dialog-confirm ${danger ? "is-danger" : ""}`;
    confirmButton.textContent = confirmText;
    actions.append(cancelButton, confirmButton);
    panel.append(icon, heading);
    message && panel.appendChild(description);
    fields.length && panel.appendChild(fieldWrap);
    panel.appendChild(actions);
    overlay.appendChild(panel);
    host.appendChild(overlay);
    let settled = !1;
    const close = (value) => {
      if (settled) return;
      settled = !0;
      document.removeEventListener("keydown", onKeyDown);
      overlay.classList.remove("is-open");
      setTimeout(() => overlay.remove(), 180);
      resolve(value);
    },
      onKeyDown = (event) => event.key === "Escape" && close(null),
      submitDialog = (event) => {
      event.preventDefault();
      event.stopPropagation();
      const values = {};
      Object.entries(controls).forEach(([key, control]) => (values[key] = control.value));
      close(fields.length ? values : !0);
    };
    cancelButton.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      close(null);
    });
    confirmButton.addEventListener("click", submitDialog);
    overlay.addEventListener("click", (event) => event.target === overlay && close(null));
    panel.addEventListener("submit", submitDialog);
    document.addEventListener("keydown", onKeyDown);
    requestAnimationFrame(() => {
      overlay.classList.add("is-open");
      const firstControl = Object.values(controls)[0];
      firstControl && setTimeout(() => firstControl.focus(), 120);
    });
  });
}
const kasaConfirm = (title, message) =>
    kasaDialog({ title, message, confirmText: "Evet, Sil", danger: !0 }),
  kasaForm = (title, fields) =>
    kasaDialog({ title, fields, confirmText: "Kaydet" });
window.kasaDialog = kasaDialog;

async function kasaCopyText(value) {
  const text = String(value || "");
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return !0;
    }
  } catch {}
  const field = document.createElement("textarea");
  field.value = text;
  field.setAttribute("readonly", "");
  field.style.position = "fixed";
  field.style.left = "-9999px";
  field.style.opacity = "0";
  document.body.appendChild(field);
  field.select();
  field.setSelectionRange(0, field.value.length);
  let copied = !1;
  try { copied = document.execCommand("copy"); } catch {}
  field.remove();
  return copied;
}

function AccountProviderLogo({ type, size = 22 }) {
  if (type === "google")
    return s.jsxs("svg", {
      className: "kasa-provider-logo",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      "aria-hidden": !0,
      children: [
        s.jsx("path", { d: "M3.5 7 12 13.5 20.5 7", stroke: "#EA4335", strokeWidth: "3.1", strokeLinecap: "round", strokeLinejoin: "round" }),
        s.jsx("path", { d: "M3.5 7v10", stroke: "#4285F4", strokeWidth: "3.1", strokeLinecap: "round" }),
        s.jsx("path", { d: "M20.5 7v10", stroke: "#34A853", strokeWidth: "3.1", strokeLinecap: "round" }),
        s.jsx("path", { d: "M3.5 17h4", stroke: "#FBBC04", strokeWidth: "3.1", strokeLinecap: "round" }),
        s.jsx("path", { d: "M16.5 17h4", stroke: "#4285F4", strokeWidth: "3.1", strokeLinecap: "round" }),
      ],
    });
  if (type === "microsoft")
    return s.jsxs("svg", {
      className: "kasa-provider-logo",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      "aria-hidden": !0,
      children: [
        s.jsx("rect", { x: "3", y: "5", width: "10.5", height: "14", rx: "2.2", fill: "#0A64C9" }),
        s.jsx("path", { d: "M11 8h9.3c.9 0 1.7.7 1.7 1.7v7.1c0 .9-.8 1.7-1.7 1.7H11z", fill: "#1473E6" }),
        s.jsx("path", { d: "m11 9.5 5.5 4 5.5-4", stroke: "#8ED1FC", strokeWidth: "1.4", strokeLinejoin: "round" }),
        s.jsx("circle", { cx: "8.2", cy: "12", r: "2.7", stroke: "white", strokeWidth: "1.6" }),
      ],
    });
  if (type === "work")
    return s.jsxs("svg", {
      className: "kasa-provider-logo",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "#16834C",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": !0,
      children: [
        s.jsx("rect", { x: "3", y: "7", width: "18", height: "12", rx: "3" }),
        s.jsx("path", { d: "M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7M3 12h18M10 12v2h4v-2" }),
      ],
    });
  return s.jsxs("svg", {
    className: "kasa-provider-logo",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#7C3AED",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": !0,
    children: [
      s.jsx("circle", { cx: "8", cy: "12", r: "4" }),
      s.jsx("path", { d: "M12 12h9M18 12v3M15 12v2" }),
    ],
  });
}

function Wd({
  onBack: x,
  onAdd: Te,
  extraRecords: De = [],
  overrides: accountOverrides = [],
  deletedIds: deletedAccountIds = [],
  onUpdate: updateAccount,
  onDelete: deleteAccount,
}) {
  const [S, h] = Qe.useState(""),
    [L, F] = Qe.useState(new Set()),
    [A, Z] = Qe.useState(null),
    [accountOpen, setAccountOpen] = Qe.useState(null),
    [expandedAccount, setExpandedAccount] = Qe.useState(null),
    [openGroups, setOpenGroups] = Qe.useState(new Set()),
    [editingAccount, setEditingAccount] = Qe.useState(null),
    [accountForm, setAccountForm] = Qe.useState({}),
    accountStartX = Qe.useRef(0),
    accountSwipeMoved = Qe.useRef(!1),
    I = (T) =>
      F((G) => {
        const we = new Set(G);
        return (we.has(T) ? we.delete(T) : we.add(T), we);
      }),
    V = async (T, G) => {
      if (await kasaCopyText(G)) {
        Z(T);
        setTimeout(() => Z(null), 2e3);
      }
    },
    ee = [...De]
      .filter((T) => !deletedAccountIds.includes(T.id))
      .map((T) => accountOverrides.find((G) => G.id === T.id) || T)
      .filter(
        (T) =>
          T.name.toLowerCase().includes(S.toLowerCase()) ||
          T.username.toLowerCase().includes(S.toLowerCase()),
      ),
    accountGroup = (T) => {
      const value = `${T.name || ""} ${T.username || ""}`.toLocaleLowerCase("tr"),
        domain = String(T.username || "").split("@")[1]?.toLowerCase() || "";
      if (/gmail|googlemail|\bgoogle\b/.test(value)) return "google";
      if (/hotmail|outlook|live\.com|msn\.com|\bmicrosoft\b/.test(value)) return "microsoft";
      const personalDomains = ["yahoo.com", "yandex.com", "yandex.com.tr", "icloud.com", "me.com", "proton.me", "protonmail.com", "mail.com", "gmx.com"];
      if (domain && !personalDomains.includes(domain)) return "work";
      return "other";
    },
    groupDefinitions = [
      { id: "google", title: "Google / Gmail", subtitle: "Google hesapların", icon: "G", color: "#1B4DD8", bg: "#EAF0FF", gradient: "linear-gradient(135deg,#eef3ff,#ffffff)" },
      { id: "microsoft", title: "Microsoft / Outlook", subtitle: "Hotmail, Live ve Outlook", icon: "M", color: "#2563EB", bg: "#EAF4FF", gradient: "linear-gradient(135deg,#eaf6ff,#ffffff)" },
      { id: "work", title: "İş / Kurumsal", subtitle: "Kurumsal e-posta hesapların", icon: "İ", color: "#16834C", bg: "#E8F6EF", gradient: "linear-gradient(135deg,#eaf8f0,#ffffff)" },
      { id: "other", title: "Diğer Hesaplar", subtitle: "Diğer servis ve üyelikler", icon: "•", color: "#7C3AED", bg: "#F2ECFF", gradient: "linear-gradient(135deg,#f4efff,#ffffff)" },
    ],
    accountGroups = groupDefinitions
      .map((group) => ({ ...group, records: ee.filter((record) => accountGroup(record) === group.id) }))
      .filter((group) => group.records.length),
    toggleGroup = (id) => setOpenGroups((current) => {
      const next = new Set(current);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    }),
    editAccount = (T) => {
      setEditingAccount(T);
      setAccountForm({ name: T.name, username: T.username, password: T.password });
      setAccountOpen(null);
    },
    saveAccount = () => {
      if (!editingAccount) return;
      updateAccount({ ...editingAccount, ...accountForm });
      setEditingAccount(null);
    };
  return s.jsxs("div", {
    className: "relative flex-1 overflow-y-auto",
    style: { fontFamily: "'Inter', sans-serif" },
    children: [
      s.jsx(kr, { title: "Hesaplar", onBack: x, onAdd: Te }),
      s.jsx("div", {
        className: "px-5 mb-4",
        children: s.jsxs("div", {
          className:
            "flex items-center gap-2 bg-white rounded-2xl px-4 py-3 shadow-sm border border-gray-100",
          children: [
            s.jsx(Ya, { size: 16, className: "text-gray-400" }),
            s.jsx("input", {
              type: "text",
              placeholder: "Hesap ara...",
              value: S,
              onChange: (T) => h(T.target.value),
              className:
                "flex-1 text-sm text-gray-700 outline-none bg-transparent placeholder-gray-400",
            }),
          ],
        }),
      }),
      s.jsxs("div", {
        className: "px-5 mb-3 flex items-center justify-between",
        children: [
          s.jsxs("span", {
            className: "text-xs text-gray-500 font-medium",
            children: [ee.length, " hesap"],
          }),
          s.jsxs("span", { className: "text-[10px] text-gray-400", children: [accountGroups.length, " grup"] }),
        ],
      }),
      s.jsx("div", {
        className: "px-5 space-y-2.5 pb-4",
        children: accountGroups.map((group, groupIndex) => s.jsxs("section", {
          className: "bg-white rounded-2xl shadow-sm overflow-hidden",
          style: { border: "1px solid rgba(226,229,235,.82)", boxShadow: "0 7px 20px rgba(47,55,70,.065)" },
          children: [
            s.jsxs("button", {
              type: "button",
              onClick: () => toggleGroup(group.id),
              className: "kasa-account-group-button w-full flex items-center gap-3 pl-5 pr-4 py-3 text-left active:opacity-80 transition-opacity",
              style: {
  paddingLeft: "10px",
  background: `linear-gradient(115deg,${group.bg}cc 0%,#ffffff 72%)`
},
              children: [
                s.jsx("span", { className: "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0", style: { background: "rgba(255,255,255,.92)", boxShadow: `inset 0 0 0 1px ${group.color}16,0 4px 10px ${group.color}12` }, children: s.jsx(AccountProviderLogo, { type: group.id, size: 23 }) }),
                s.jsxs("span", { className: "flex-1 min-w-0", children: [
                  s.jsx("span", { className: "block text-[13px] font-bold text-[#1A1A2E] leading-tight", children: group.title }),
                  s.jsx("span", { className: "block text-[9px] text-gray-400 truncate mt-1", children: group.subtitle }),
                ] }),
                s.jsx("span", { className: "min-w-7 h-7 px-2 rounded-full flex items-center justify-center text-[10px] font-bold", style: { color: group.color, background: "rgba(255,255,255,.92)" }, children: group.records.length }),
                s.jsx("span", { className: "w-6 h-6 flex items-center justify-center text-gray-400 text-lg transition-transform", style: { transform: openGroups.has(group.id) ? "rotate(90deg)" : "rotate(0deg)" }, children: "›" }),
              ],
            }),
            openGroups.has(group.id) && s.jsx("div", {
              className: "border-t border-gray-100",
              children: group.records.map((T, accountIndex) => s.jsxs("div", {
              className:
                "relative overflow-hidden",
              style: { borderTop: accountIndex ? "1px solid #F0F1F3" : "0" },
              onPointerDown: (G) => {
                accountStartX.current = G.clientX;
                accountSwipeMoved.current = !1;
              },
              onPointerUp: (G) => {
                const we = G.clientX - accountStartX.current;
                accountSwipeMoved.current = Math.abs(we) > 10;
                we < -35
                  ? setAccountOpen(T.id)
                  : we > 35 && setAccountOpen(null);
              },
              children: [
                s.jsxs("div", {
                  className: "absolute inset-y-0 right-0 flex",
                  style: { width: "116px" },
                  children: [
                    s.jsx("button", {
                      onClick: () => editAccount(T),
                      className: "flex-1 text-white text-[10px] font-bold",
                      style: { background: "#315A86" },
                      children: "Düzenle",
                    }),
                    s.jsx("button", {
                      onClick: async () => {
                        if (!(await kasaConfirm("Hesabı Sil", `“${T.name}” hesabı kalıcı olarak silinsin mi?`))) return;
                        deleteAccount(T.id, T.name);
                        setAccountOpen(null);
                      },
                      className: "flex-1 text-white text-[10px] font-bold",
                      style: { background: "#B94A48" },
                      children: "Sil",
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className:
                    `${groupIndex === 0 && accountIndex === 0 ? "kasa-swipe-hint " : ""}relative bg-white pl-5 pr-4 py-3 transition-transform`,
                  
style: {
  paddingLeft: "10px",
  transform:
    accountOpen === T.id
      ? "translateX(-116px)"
      : "translateX(0)",
  transition: "transform 320ms cubic-bezier(.22,.8,.3,1)",
  touchAction: "pan-y",
},
                  onClick: () => {
                    if (accountSwipeMoved.current) return;
                    setExpandedAccount((current) => current === T.id ? null : T.id);
                    setAccountOpen(null);
                  },
                  children: [
                s.jsxs("div", {
                  className: "flex items-center gap-2.5",
                  children: [
                    s.jsx("div", {
                      className:
                        "w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0",
                      style: { background: group.bg, color: group.color, boxShadow: `inset 0 0 0 1px ${group.color}10` },
                      children: s.jsx(AccountProviderLogo, { type: group.id, size: 20 }),
                    }),
                    s.jsxs("div", {
                      className: "flex-1 min-w-0",
                      children: [
                        s.jsx("div", {
                          className: "font-semibold text-[#1A1A2E] text-[12px] leading-tight",
                          children: T.name,
                        }),
                        s.jsx("div", {
                          className: "text-gray-400 text-[10px] truncate mt-1",
                          children: T.username,
                        }),
                      ],
                    }),
                    s.jsx("span", { className: "w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center text-gray-300 text-sm", children: expandedAccount === T.id ? "⌄" : "›" }),
                  ],
                }),
                expandedAccount === T.id && s.jsxs("div", {
                  className:
                    "flex items-center gap-2 rounded-xl px-3 py-2 mt-2",
                  style: { background: group.bg + "88" },
                  onClick: (event) => event.stopPropagation(),
                  children: [
                    s.jsx(Ka, {
                      size: 12,
                      className: "text-gray-400 flex-shrink-0",
                    }),
                    s.jsx("span", {
                      className:
                        "flex-1 text-xs font-mono text-gray-600 truncate",
                      children: L.has(T.id) ? T.password : "••••••••••••",
                    }),
                    s.jsx("button", {
                      onClick: () => I(T.id),
                      className:
                        "p-0.5 text-gray-400 hover:text-gray-700 transition-colors",
                      children: L.has(T.id)
                        ? s.jsx(Wa, { size: 14 })
                        : s.jsx(Qa, { size: 14 }),
                    }),
                    s.jsx("button", {
                      onClick: () => V(T.id, T.password),
                      className:
                        "p-0.5 text-gray-400 hover:text-[#1B4DD8] transition-colors",
                      children:
                        A === T.id
                          ? s.jsx(Va, { size: 14, className: "text-green-500" })
                          : s.jsx(Ha, { size: 14 }),
                    }),
                  ],
                }),
                  ],
                }),
              ],
            }, T.id)),
            }),
          ],
        }, group.id)),
      }),
      editingAccount &&
        s.jsx("div", {
          className: "absolute inset-0 flex items-end",
          style: { zIndex: 80, background: "rgba(15,23,42,.48)" },
          onClick: () => setEditingAccount(null),
          children: s.jsxs("div", {
            className: "w-full bg-white rounded-t-3xl p-5 space-y-3",
            onClick: (T) => T.stopPropagation(),
            children: [
              s.jsxs("div", {
                className: "flex items-center justify-between",
                children: [
                  s.jsx("div", { className: "font-bold text-lg", children: "Hesabı Düzenle" }),
                  s.jsx("button", { onClick: () => setEditingAccount(null), children: "✕" }),
                ],
              }),
              s.jsx("input", {
                value: accountForm.name || "",
                onChange: (T) => setAccountForm({ ...accountForm, name: T.target.value }),
                placeholder: "Hesap / Site adı",
                className: "w-full bg-gray-50 rounded-xl px-3 py-2.5 text-sm outline-none",
              }),
              s.jsx("input", {
                value: accountForm.username || "",
                onChange: (T) => setAccountForm({ ...accountForm, username: T.target.value }),
                placeholder: "E-posta / Kullanıcı adı",
                className: "w-full bg-gray-50 rounded-xl px-3 py-2.5 text-sm outline-none",
              }),
              s.jsx("input", {
                value: accountForm.password || "",
                onChange: (T) => setAccountForm({ ...accountForm, password: T.target.value }),
                placeholder: "Şifre",
                className: "w-full bg-gray-50 rounded-xl px-3 py-2.5 text-sm outline-none",
              }),
              s.jsx("button", {
                onClick: saveAccount,
                className: "w-full bg-[#1B4DD8] text-white font-bold rounded-2xl py-3",
                children: "Değişiklikleri Kaydet",
              }),
            ],
          }),
        }),
    ],
  });
}
function Qd({
  onBack: x,
  onAdd: T,
  extraRecords: G = [],
  overrides: cardOverrides = [],
  deletedIds: deletedCardIds = [],
  onUpdate: updateCard,
  onDelete: deleteCard,
}) {
  const [S, h] = Qe.useState(new Set()),
    [L, F] = Qe.useState(null),
    [openCard, setOpenCard] = Qe.useState(null),
    cardStartX = Qe.useRef(0),
    A = (I) =>
      h((V) => {
        const ee = new Set(V);
        return (ee.has(I) ? ee.delete(I) : ee.add(I), ee);
      }),
    Z = async (I, V) => {
      if (await kasaCopyText(V)) {
        F(I);
        setTimeout(() => F(null), 2e3);
      }
    },
    cards = [...G]
      .filter((I) => !deletedCardIds.includes(I.id))
      .map((I) => cardOverrides.find((V) => V.id === I.id) || I),
    editCard = async (I) => {
      const values = await kasaForm("Kartı Düzenle", [
        { key: "bank", label: "Banka / Kart adı", value: I.bank },
        { key: "holder", label: "Kart sahibi", value: I.holder },
        { key: "number", label: "Kart numarası", value: I.number },
        { key: "expiry", label: "Son kullanma", value: I.expiry },
        { key: "cvv", label: "CVV", value: I.cvv, type: "password" },
      ]);
      if (!values) return;
      updateCard({ ...I, ...values, number: values.number.replace(/\s/g, "") });
      setOpenCard(null);
    };
  return s.jsxs("div", {
    className: "flex-1 overflow-y-auto",
    style: { fontFamily: "'Inter', sans-serif" },
    children: [
      s.jsx(kr, { title: "Kartlar", onBack: x, onAdd: T }),
      s.jsx("div", {
        className: "px-5 mb-3",
        children: s.jsxs("span", {
          className: "text-xs text-gray-500 font-medium",
            children: [cards.length, " kart kayıtlı"],
        }),
      }),
      s.jsx("div", {
        className: "px-5 space-y-6 pb-4",
        children: cards.map((I) =>
          s.jsxs(
            "div",
            {
              className: "relative rounded-3xl overflow-hidden",
              onPointerDown: (V) => (cardStartX.current = V.clientX),
              onPointerUp: (V) => {
                const ee = V.clientX - cardStartX.current;
                ee < -35 ? setOpenCard(I.id) : ee > 35 && setOpenCard(null);
              },
              children: [
                s.jsxs("div", {
                  className: "absolute inset-y-0 right-0 flex",
                  style: { width: "116px" },
                  children: [
                    s.jsx("button", { onClick: () => editCard(I), className: "flex-1 text-white text-[10px] font-bold", style: { background: "#315A86" }, children: "Düzenle" }),
                    s.jsx("button", { onClick: async () => { if (!(await kasaConfirm("Kartı Sil", `“${I.bank}” kartı kalıcı olarak silinsin mi?`))) return; deleteCard(I.id, I.bank); setOpenCard(null); }, className: "flex-1 text-white text-[10px] font-bold", style: { background: "#B94A48" }, children: "Sil" }),
                  ],
                }),
                s.jsxs("div", {
                  className: "kasa-swipe-hint relative bg-[#F0EAE0] transition-transform",
                  style: { transform: openCard === I.id ? "translateX(-116px)" : "translateX(0)", transition: "transform 320ms cubic-bezier(.22,.8,.3,1)", touchAction: "pan-y" },
                  children: [
                s.jsxs("div", {
                  className:
                    "relative w-full rounded-3xl p-5 overflow-hidden shadow-xl",
                  style: {
                    height: "190px",
                    background: `linear-gradient(135deg, ${I.c1}, ${I.c2})`,
                  },
                  children: [
                    s.jsx("div", {
                      className: "absolute pointer-events-none",
                      style: {
                        top: "-60px",
                        right: "-60px",
                        width: "240px",
                        height: "240px",
                        borderRadius: "50%",
                        background:
                          "radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)",
                      },
                    }),
                    s.jsxs("div", {
                      className: "flex items-start justify-between",
                      children: [
                        s.jsx("span", {
                          className: "text-white/90 font-bold text-sm",
                          children: I.bank,
                        }),
                        s.jsx("span", {
                          className: "text-white/70 font-bold text-xs italic",
                          children: I.type,
                        }),
                      ],
                    }),
                    s.jsx("div", {
                      className: "mt-3 w-10 h-7 rounded-md opacity-80",
                      style: {
                        background: "linear-gradient(135deg, #fcd34d, #f59e0b)",
                      },
                    }),
                    s.jsxs("div", {
                      className: "mt-3 flex items-center gap-2",
                      children: [
                        s.jsx("div", {
                          className:
                            "flex-1 font-mono text-white text-sm tracking-[0.15em]",
                          children: S.has(I.id) ? Id(I.number) : Dd(I.number),
                        }),
                        s.jsx("button", {
                          onClick: () => Z(I.id, I.number),
                          className:
                            "h-7 px-2 rounded-lg bg-white/20 flex items-center gap-1 text-white backdrop-blur-sm",
                          "aria-label": "Kart numarasını kopyala",
                          children:
                            L === I.id
                              ? s.jsxs(s.Fragment, { children: [
                                  s.jsx(Va, { size: 12 }),
                                  s.jsx("span", { className: "text-[8px] font-bold", children: "Kopyalandı" }),
                                ] })
                              : s.jsx(Ha, { size: 13 }),
                        }),
                      ],
                    }),
                    s.jsxs("div", {
                      className:
                        "absolute bottom-4 left-5 right-5 items-end",
                      style: {
                        display: "grid",
                        gridTemplateColumns: "minmax(0, 1fr) auto auto auto",
                        columnGap: "13px",
                      },
                      children: [
                        s.jsxs("div", {
                          className: "min-w-0",
                          children: [
                            s.jsx("div", {
                              className:
                                "text-white/55 text-[9px] uppercase tracking-widest mb-0.5",
                              children: "Kart Sahibi",
                            }),
                            s.jsx("div", {
                              className:
                                "text-white font-semibold text-xs tracking-wider truncate",
                              children: I.holder,
                            }),
                          ],
                        }),
                        s.jsxs("div", {
                          children: [
                            s.jsx("div", {
                              className:
                                "text-white/55 text-[9px] uppercase tracking-widest mb-0.5",
                              children: "Son Tarih",
                            }),
                            s.jsx("div", {
                              className: "text-white font-semibold text-xs",
                              children: I.expiry,
                            }),
                          ],
                        }),
                        s.jsxs("div", {
                          children: [
                            s.jsx("div", {
                              className:
                                "text-white/55 text-[9px] uppercase tracking-widest mb-0.5",
                              children: "CVV",
                            }),
                            s.jsx("div", {
                              className: "text-white font-semibold text-xs font-mono",
                              children: S.has(I.id) ? I.cvv : "•••",
                            }),
                          ],
                        }),
                        s.jsx("button", {
                          onClick: () => A(I.id),
                          className:
                            "w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm",
                          children: S.has(I.id)
                            ? s.jsx(Wa, { size: 13, className: "text-white" })
                            : s.jsx(Qa, { size: 13, className: "text-white" }),
                        }),
                      ],
                    }),
                  ],
                }),
                  ],
                }),
              ],
            },
            I.id,
          ),
        ),
      }),
    ],
  });
}
function Kd({
  onBack: x,
  onAdd: Te,
  extraRecords: De = [],
  overrides: projectOverrides = [],
  deletedIds: deletedProjectIds = [],
  onUpdate: updateProject,
  onDelete: deleteProject,
}) {
  const [S, h] = Qe.useState(null),
    [L, F] = Qe.useState(null),
    [A, Z] = Qe.useState(new Set()),
    [openProject, setOpenProject] = Qe.useState(null),
    projectStartX = Qe.useRef(0),
    projectDidSwipe = Qe.useRef(!1),
    I = (V) =>
      Z((ee) => {
        const ce = new Set(ee);
        return (ce.has(V) ? ce.delete(V) : ce.add(V), ce);
      }),
    V = async (ee, ce) => {
      if (await kasaCopyText(ce)) {
        F(ee);
        setTimeout(() => F(null), 1500);
      }
    },
    projects = [...De]
      .filter((ee) => !deletedProjectIds.includes(ee.id))
      .map((ee) => projectOverrides.find((ce) => ce.id === ee.id) || ee),
    editProject = async (ee) => {
      const values = await kasaForm("Projeyi Düzenle", [
        { key: "name", label: "Proje adı", value: ee.name },
        { key: "url", label: "Proje adresi", value: ee.url },
        { key: "desc", label: "Kısa açıklama", value: ee.desc, area: !0, rows: 2 },
        { key: "notes", label: "Proje nasıl çalışıyor?", value: ee.notes, area: !0, rows: 3 },
      ]);
      if (!values) return;
      updateProject({ ...ee, ...values, updated: "Bugün" });
      setOpenProject(null);
    };
  if (S)
    return s.jsxs("div", {
      className: "flex-1 overflow-y-auto",
      style: { fontFamily: "'Inter', sans-serif" },
      children: [
        s.jsx(kr, { title: S.name, onBack: () => h(null) }),
        s.jsxs("div", {
          className: "px-5 pb-5 space-y-4",
          children: [
            s.jsxs("div", {
              className:
                "rounded-3xl p-5 text-white shadow-md",
              style: {
                background: "linear-gradient(135deg, #075985 0%, #0f766e 100%)",
                boxShadow: "0 12px 28px rgba(7, 89, 133, 0.24)",
              },
              children: [
                s.jsx("div", {
                  className: "text-xl font-bold mb-1",
                  children: S.name,
                }),
                s.jsx("div", {
                  className: "text-green-100 text-xs leading-relaxed mb-4",
                  children: S.desc,
                }),
                s.jsx("a", {
                  href: S.url,
                  target: "_blank",
                  rel: "noreferrer",
                  className:
                    "inline-flex items-center bg-white/20 rounded-xl px-3 py-2 text-xs font-semibold",
                  children: S.url.replace("https://", ""),
                }),
              ],
            }),
            s.jsxs("div", {
              children: [
                s.jsx("div", {
                  className: "font-bold text-[#1A1A2E] text-sm mb-2",
                  children: "Bağlı Hesaplar ve Servisler",
                }),
                s.jsx("div", {
                  className: "space-y-3",
                  children: S.services.map((Z) =>
                    s.jsxs(
                      "div",
                      {
                        className:
                          "bg-white rounded-2xl p-4 shadow-sm border border-gray-100",
                        children: [
                          s.jsxs("div", {
                            className: "flex items-center justify-between mb-3",
                            children: [
                              s.jsx("span", {
                                className:
                                  "font-bold text-[#1A1A2E] text-sm",
                                children: Z.name,
                              }),
                              s.jsx("a", {
                                href: Z.url,
                                target: "_blank",
                                rel: "noreferrer",
                                className:
                                  "text-[10px] font-bold text-[#1B4DD8] bg-blue-50 px-2.5 py-1 rounded-full",
                                children: "Servisi Aç",
                              }),
                            ],
                          }),
                          s.jsxs("div", {
                            className:
                              "flex items-center justify-between bg-gray-50 rounded-xl px-3 py-2 mb-2",
                            children: [
                              s.jsxs("div", {
                                className: "min-w-0 mr-2",
                                children: [
                                  s.jsx("div", {
                                    className: "text-[9px] text-gray-400",
                                    children: "E-posta / Kullanıcı adı",
                                  }),
                                  s.jsx("div", {
                                    className:
                                      "text-xs font-semibold text-gray-700 truncate",
                                    children: Z.account,
                                  }),
                                ],
                              }),
                              s.jsx("button", {
                                onClick: () => V(`${Z.name}-account`, Z.account),
                                className:
                                  "text-[10px] font-bold text-[#1B4DD8] flex-shrink-0",
                                children:
                                  L === `${Z.name}-account` ? "Kopyalandı" : "Kopyala",
                              }),
                            ],
                          }),
                          s.jsxs("div", {
                            className:
                              "flex items-center justify-between bg-gray-50 rounded-xl px-3 py-2",
                            children: [
                              s.jsxs("div", {
                                children: [
                                  s.jsx("div", {
                                    className: "text-[9px] text-gray-400",
                                    children: "Şifre",
                                  }),
                                  s.jsx("div", {
                                    className:
                                      "text-xs font-bold tracking-widest text-gray-700",
                                    children: A.has(`${S.id}-${Z.name}`)
                                      ? Z.password
                                      : "••••••••••••",
                                  }),
                                ],
                              }),
                              s.jsxs("div", {
                                className: "flex items-center gap-2",
                                children: [
                                  s.jsx("button", {
                                    onClick: () => I(`${S.id}-${Z.name}`),
                                    className:
                                      "w-7 h-7 rounded-lg bg-white flex items-center justify-center text-gray-500",
                                    "aria-label": A.has(`${S.id}-${Z.name}`)
                                      ? "Şifreyi gizle"
                                      : "Şifreyi göster",
                                    children: A.has(`${S.id}-${Z.name}`)
                                      ? s.jsx(Wa, { size: 15 })
                                      : s.jsx(Qa, { size: 15 }),
                                  }),
                                  s.jsx("button", {
                                    onClick: () =>
                                      V(`${Z.name}-password`, Z.password),
                                    className:
                                      "text-[10px] font-bold text-[#1B4DD8]",
                                    children:
                                      L === `${Z.name}-password`
                                        ? "Kopyalandı"
                                        : "Kopyala",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      Z.name,
                    ),
                  ),
                }),
              ],
            }),
            s.jsxs("div", {
              className:
                "bg-amber-50 rounded-2xl p-4 border border-amber-100",
              children: [
                s.jsx("div", {
                  className: "font-bold text-amber-900 text-sm mb-1.5",
                  children: "Proje Nasıl Çalışıyor?",
                }),
                s.jsx("div", {
                  className: "text-xs text-amber-800 leading-relaxed",
                  children: S.notes,
                }),
              ],
            }),
          ],
        }),
      ],
    });
  return s.jsxs("div", {
    className: "flex-1 overflow-y-auto",
    style: { fontFamily: "'Inter', sans-serif" },
    children: [
      s.jsx(kr, { title: "Projeler", onBack: x, onAdd: Te }),
      s.jsx("div", {
        className: "px-5 mb-3",
        children: s.jsxs("span", {
          className: "text-xs text-gray-500 font-medium",
          children: [projects.length, " proje"],
        }),
      }),
      s.jsx("div", {
        className: "px-5 space-y-3 pb-4",
        children: projects.map((S) =>
          s.jsxs(
            "div",
            {
              className: "relative rounded-2xl overflow-hidden shadow-sm border border-gray-100",
              onPointerDown: (item) => {
                if (item.target.closest(".kasa-project-actions, .kasa-project-link")) return;
                projectStartX.current = item.clientX;
                projectDidSwipe.current = !1;
              },
              onPointerUp: (item) => {
                if (item.target.closest(".kasa-project-actions, .kasa-project-link")) return;
                const delta = item.clientX - projectStartX.current;
                projectDidSwipe.current = Math.abs(delta) > 12;
                delta < -35 ? setOpenProject(S.id) : delta > 35 && setOpenProject(null);
              },
              onDragStart: (item) => item.preventDefault(),
              children: [
                s.jsxs("div", { className: "kasa-project-actions absolute inset-y-0 right-0 flex", style: { width: "116px", zIndex: 0 }, onPointerDown: (event) => event.stopPropagation(), onPointerUp: (event) => event.stopPropagation(), onClick: (event) => event.stopPropagation(), children: [
                  s.jsx("button", { type: "button", onClick: () => editProject(S), className: "flex-1 text-white text-[10px] font-bold", style: { background: "#315A86" }, children: "Düzenle" }),
                  s.jsx("button", { type: "button", onClick: async () => { if (!(await kasaConfirm("Projeyi Sil", `“${S.name}” projesi kalıcı olarak silinsin mi?`))) return; deleteProject(S.id, S.name); setOpenProject(null); }, className: "flex-1 text-white text-[10px] font-bold", style: { background: "#B94A48" }, children: "Sil" }),
                ] }),
                s.jsxs("div", {
                  role: "button",
                  tabIndex: 0,
                  onClick: () => {
                    if (projectDidSwipe.current) {
                      projectDidSwipe.current = !1;
                      return;
                    }
                    openProject === S.id ? setOpenProject(null) : h(S);
                  },
                  onKeyDown: (event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      h(S);
                    }
                  },
                  className: "kasa-swipe-hint relative w-full bg-white p-4 text-left active:scale-[0.98] transition-transform",
                  style: { zIndex: 1, transform: openProject === S.id ? "translateX(-116px)" : "translateX(0)", transition: "transform 320ms cubic-bezier(.22,.8,.3,1)", touchAction: "pan-y", userSelect: "none", cursor: "grab" },
                  children: [
                s.jsxs("div", {
                  className: "flex items-start justify-between mb-3",
                  children: [
                    s.jsxs("div", {
                      className: "flex-1 min-w-0 mr-2",
                      children: [
                        s.jsx("div", {
                          className:
                            "font-semibold text-[#1A1A2E] text-sm leading-snug",
                          children: S.name,
                        }),
                        s.jsx("div", {
                          className:
                            "text-gray-500 text-xs mt-0.5 line-clamp-1",
                          children: S.desc,
                        }),
                      ],
                    }),
                    s.jsx("span", {
                      className:
                        "flex-shrink-0 w-7 h-7 bg-green-50 rounded-full flex items-center justify-center text-green-700",
                      children: s.jsx(wr, { size: 14 }),
                    }),
                  ],
                }),
                s.jsx("a", {
                  href: S.url,
                  target: "_blank",
                  rel: "noreferrer",
                  onClick: (event) => event.stopPropagation(),
                  onPointerDown: (event) => event.stopPropagation(),
                  onPointerUp: (event) => event.stopPropagation(),
                  className:
                    "kasa-project-link block text-[11px] text-[#1B4DD8] bg-blue-50 rounded-xl px-3 py-2 mb-3 truncate underline decoration-blue-200 underline-offset-2",
                  children: S.url.replace("https://", ""),
                }),
                s.jsx("div", {
                  className: "flex items-center gap-1.5 flex-wrap mb-3",
                  children: S.services.map((h) =>
                    s.jsx(
                      "span",
                      {
                        className:
                          "px-2 py-0.5 bg-gray-100 rounded-lg text-[10px] font-semibold text-gray-600",
                        children: h.name,
                      },
                      h.name,
                    ),
                  ),
                }),
                s.jsxs("div", {
                  className:
                    "flex items-center justify-between pt-2.5 border-t border-gray-50",
                  children: [
                    s.jsxs("span", {
                      className: "text-[10px] text-gray-400",
                      children: [
                        "Güncellendi: ",
                        s.jsx("span", {
                          className: "font-medium text-gray-500",
                          children: S.updated,
                        }),
                      ],
                    }),
                    s.jsx("span", {
                      className: "text-[10px] font-semibold text-green-700",
                      children: `${S.services.length} bağlı hesap`,
                    }),
                  ],
                }),
                  ],
                }),
              ],
            },
            S.id,
          ),
        ),
      }),
    ],
  });
}
function Gd({
  onBack: x,
  onAdd: T,
  extraRecords: G = [],
  overrides: we = [],
  deletedIds: Ke = [],
  onUpdate: re,
  onDelete: fe,
}) {
  const [S, h] = Qe.useState(null),
    [L, F] = Qe.useState(null),
    [A, Z] = Qe.useState(null),
    [I, V] = Qe.useState({}),
    [Re, Pe] = Qe.useState(!1),
    ee = Qe.useRef(0),
    noteDidSwipe = Qe.useRef(!1),
    ce = {
      Kişisel: "#d97706",
      Güvenlik: "#7c3aed",
      İş: "#1B4DD8",
      Fikir: "#16a34a",
      Gizli: "#E05A3A",
    },
    Te = [...G]
      .filter((Q) => !Ke.includes(Q.id))
      .map((Q) => we.find((Be) => Be.id === Q.id) || Q)
      .sort((Q, Be) => Number(Be.pinned) - Number(Q.pinned)),
    De = (Q) => {
      (Z(Q), V({ title: Q.title, content: Q.content, category: Q.category }));
    },
    Ie = () => {
      if (!A) return;
      const Q = I.category || "Kişisel";
      (re({ ...A, ...I, category: Q, accent: ce[Q] }), Z(null), F(null));
    };
  Qe.useEffect(() => {
    const Q = setTimeout(() => Pe(!0), 250),
      Be = setTimeout(() => Pe(!1), 1050);
    return () => (clearTimeout(Q), clearTimeout(Be));
  }, []);
  return s.jsxs("div", {
    className: "relative flex-1 overflow-y-auto",
    style: { fontFamily: "'Inter', sans-serif" },
    children: [
      s.jsx(kr, { title: "Güvenli Notlar", onBack: x, onAdd: T }),
      s.jsxs("div", {
        className: "px-5 mb-3 flex items-center justify-between",
        children: [
          s.jsxs("span", {
            className: "text-xs text-gray-500 font-medium",
            children: [Te.length, " not"],
          }),
          s.jsxs("span", {
            className: "text-xs text-gray-400",
            children: [
              "📌 ",
              Te.filter((Q) => Q.pinned).length,
              " sabitlenmiş",
            ],
          }),
        ],
      }),
      s.jsx("div", {
        className: "px-5 space-y-3 pb-4",
        children: Te.map((Q, noteIndex) =>
          s.jsxs(
            "div",
            {
              className:
                "relative rounded-2xl overflow-hidden shadow-sm border border-gray-100",
              onPointerDown: (Be) => {
                if (Be.target.closest(".kasa-note-actions")) return;
                ee.current = Be.clientX;
                noteDidSwipe.current = !1;
                Be.currentTarget.setPointerCapture(Be.pointerId);
              },
              onPointerUp: (Be) => {
                if (Be.target.closest(".kasa-note-actions")) return;
                const Ae = Be.clientX - ee.current;
                noteDidSwipe.current = Math.abs(Ae) > 12;
                Ae < -35 ? F(Q.id) : Ae > 35 && F(null);
                Be.currentTarget.hasPointerCapture(Be.pointerId) &&
                  Be.currentTarget.releasePointerCapture(Be.pointerId);
              },
              onPointerCancel: (Be) => {
                Be.currentTarget.hasPointerCapture(Be.pointerId) &&
                  Be.currentTarget.releasePointerCapture(Be.pointerId);
              },
              onDragStart: (Be) => Be.preventDefault(),
              children: [
                s.jsxs("div", {
                  className: "kasa-note-actions absolute inset-y-0 right-0 flex",
                  style: { width: "174px", zIndex: 0, pointerEvents: "auto" },
                  onPointerDown: (event) => event.stopPropagation(),
                  onPointerUp: (event) => event.stopPropagation(),
                  onClick: (event) => event.stopPropagation(),
                  children: [
                    s.jsx("button", {
                      type: "button",
                      onClick: () => (re({ ...Q, pinned: !Q.pinned }), F(null)),
                      className: "flex-1 text-white text-[10px] font-bold",
                      style: { background: "#A97924" },
                      children: Q.pinned ? "Sabiti Kaldır" : "📌 Sabitle",
                    }),
                    s.jsx("button", {
                      type: "button",
                      onClick: () => (De(Q), F(null)),
                      className: "flex-1 text-white text-[10px] font-bold",
                      style: { background: "#315A86" },
                      children: "Düzenle",
                    }),
                    s.jsx("button", {
                      type: "button",
                      onClick: async () => {
                        if (!(await kasaConfirm("Notu Sil", `“${Q.title}” notu kalıcı olarak silinsin mi?`))) return;
                        fe(Q.id, Q.title);
                        F(null);
                      },
                      className: "flex-1 text-white text-[10px] font-bold",
                      style: { background: "#B94A48" },
                      children: "Sil",
                    }),
                  ],
                }),
                s.jsx("button", {
                  onClick: () => {
                    if (noteDidSwipe.current) {
                      noteDidSwipe.current = !1;
                      return;
                    }
                    L === Q.id ? F(null) : h(S === Q.id ? null : Q.id);
                  },
                  className:
                    "relative w-full bg-white text-left transition-transform",
                  style: {
                    position: "relative",
                    zIndex: 1,
                    transform:
                      L === Q.id
                        ? "translateX(-174px)"
                        : Re && noteIndex === 0
                          ? "translateX(-38px)"
                          : "translateX(0)",
                    transition: "transform 320ms cubic-bezier(.22,.8,.3,1)",
                    touchAction: "pan-y",
                    userSelect: "none",
                    cursor: "grab",
                  },
                  children: s.jsxs("div", {
                    className: "flex",
                    children: [
                      s.jsx("div", {
                        className: "w-1 flex-shrink-0 rounded-l-2xl",
                        style: { backgroundColor: Q.accent },
                      }),
                      s.jsxs("div", {
                        className: "flex-1 p-4",
                        children: [
                          s.jsxs("div", {
                            className: "flex items-start justify-between mb-1.5",
                            children: [
                              s.jsxs("div", {
                                className: "flex items-center gap-1.5 min-w-0",
                                children: [
                                  Q.pinned &&
                                    s.jsx("span", {
                                      className: "text-amber-500 text-sm",
                                      children: "📌",
                                    }),
                                  s.jsx("span", {
                                    className:
                                      "font-semibold text-[#1A1A2E] text-sm leading-snug",
                                    children: Q.title,
                                  }),
                                ],
                              }),
                              s.jsx("span", {
                                className:
                                  "ml-2 flex-shrink-0 px-2 py-0.5 rounded-full text-[9px] font-bold text-white",
                                style: { backgroundColor: Q.accent },
                                children: Q.category,
                              }),
                            ],
                          }),
                          s.jsx("p", {
                            className: `text-gray-500 text-xs leading-relaxed ${S === Q.id ? "" : "line-clamp-2"}`,
                            children: Q.content,
                          }),
                          s.jsxs("div", {
                            className: "mt-2 flex items-center justify-between",
                            children: [
                              s.jsx("span", {
                                className: "text-[10px] text-gray-400",
                                children: Q.date,
                              }),
                              s.jsx("span", {
                                className: "text-[10px]",
                                style: { color: Q.accent },
                                children: S === Q.id ? "Kapat ▲" : "Devamı ▼",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            },
            Q.id,
          ),
        ),
      }),
      A &&
        s.jsx("div", {
          className: "absolute inset-0 flex items-end",
          style: { zIndex: 80, background: "rgba(15,23,42,.48)" },
          onClick: () => Z(null),
          children: s.jsxs("div", {
            className: "w-full bg-white rounded-t-3xl p-5 space-y-3",
            onClick: (Q) => Q.stopPropagation(),
            children: [
              s.jsxs("div", {
                className: "flex items-center justify-between",
                children: [
                  s.jsx("div", { className: "font-bold text-lg", children: "Notu Düzenle" }),
                  s.jsx("button", { onClick: () => Z(null), children: "✕" }),
                ],
              }),
              s.jsx("input", {
                value: I.title || "",
                onChange: (Q) => V({ ...I, title: Q.target.value }),
                className: "w-full bg-gray-50 rounded-xl px-3 py-2.5 text-sm outline-none",
              }),
              s.jsx("select", {
                value: I.category || "Kişisel",
                onChange: (Q) => V({ ...I, category: Q.target.value }),
                className: "w-full bg-gray-50 rounded-xl px-3 py-2.5 text-sm outline-none",
                children: Object.keys(ce).map((Q) => s.jsx("option", { value: Q, children: Q }, Q)),
              }),
              s.jsx("textarea", {
                value: I.content || "",
                onChange: (Q) => V({ ...I, content: Q.target.value }),
                rows: 6,
                className: "w-full bg-gray-50 rounded-xl px-3 py-2.5 text-sm outline-none",
              }),
              s.jsx("button", {
                onClick: Ie,
                className: "w-full bg-[#1B4DD8] text-white font-bold rounded-2xl py-3",
                children: "Değişiklikleri Kaydet",
              }),
            ],
          }),
        }),
    ],
  });
}
function dp() {
  return new Promise((x, S) => {
    const h = indexedDB.open("KisiselKasaBelgeler", 1);
    h.onupgradeneeded = () => h.result.createObjectStore("documents", { keyPath: "id" });
    h.onsuccess = () => x(h.result);
    h.onerror = () => S(h.error);
  });
}
async function pp(x = "getAll", S) {
  const h = await dp();
  return new Promise((L, F) => {
    const A = h.transaction("documents", x === "getAll" ? "readonly" : "readwrite"),
      Z = A.objectStore("documents"),
      I = x === "put" ? Z.put(S) : x === "delete" ? Z.delete(S) : Z.getAll();
    I.onsuccess = () => L(I.result);
    I.onerror = () => F(I.error);
  });
}
function Yd({ onBack: x }) {
  const [S, h] = Qe.useState(() => {
      try { return JSON.parse(localStorage.getItem("kasa-belge-kategorileri") || "[]"); } catch { return []; }
    }),
    [L, F] = Qe.useState(null),
    [A, Z] = Qe.useState([]),
    [I, V] = Qe.useState(""),
    [ee, ce] = Qe.useState(null),
    [T, G] = Qe.useState(null),
    [openDocument, setOpenDocument] = Qe.useState(null),
    we = Qe.useRef(null),
    Ke = Qe.useRef(null),
    documentStartX = Qe.useRef(0),
    activity = (action, name) => window.dispatchEvent(new CustomEvent("kasa-activity", { detail: { action, name, category: "Belgeler" } })),
    re = async () => {
      const Q = await pp();
      (Z(Q),
        window.dispatchEvent(
          new CustomEvent("kasa-documents-changed", { detail: Q.length }),
        ));
    },
    fe = (Q) => {
      const Be = [...S, Q];
      (h(Be), localStorage.setItem("kasa-belge-kategorileri", JSON.stringify(Be)), activity("eklendi", Q.name));
    },
    Ie = async (Q) => {
      if (!L) return;
      for (const Be of [...Q.target.files])
        (await pp("put", { id: Date.now() + Math.random(), categoryId: L.id, name: Be.name, type: Be.type, size: Be.size, date: new Date().toLocaleDateString("tr-TR"), note: "", blob: Be }), activity("eklendi", Be.name));
      (Q.target.value = "", await re());
    },
    Re = (Q) => {
      const Be = URL.createObjectURL(Q.blob);
      ce({ ...Q, url: Be });
    },
    Pe = () => { ee && URL.revokeObjectURL(ee.url); ce(null); },
    Q = (Be) => {
      const Ae = document.createElement("a");
      (Ae.href = URL.createObjectURL(Be.blob), Ae.download = Be.name, Ae.click(), setTimeout(() => URL.revokeObjectURL(Ae.href), 1000));
    },
    Be = async (Ae) => {
      const values = await kasaForm("Belge Bilgisini Düzenle", [
        { key: "name", label: "Belge adı", value: Ae.name },
        { key: "note", label: "Belge açıklaması / bilgisi", value: Ae.note || "", area: !0, rows: 4 },
      ]);
      if (!values) return;
      await pp("put", { ...Ae, name: values.name, note: values.note || "" });
      activity("düzenlendi", values.name);
      await re();
    },
    Ae = async (Ve) => { await pp("delete", Ve.id); activity("silindi", Ve.name); await re(); },
    Ve = async (He) => {
      const Ye = He.target.files[0];
      if (Ye && T) { await pp("put", { ...T, name: Ye.name, type: Ye.type, size: Ye.size, date: new Date().toLocaleDateString("tr-TR"), blob: Ye }); activity("düzenlendi", Ye.name); }
      (He.target.value = "", G(null), await re());
    };
  Qe.useEffect(() => { re(); }, []);
  const He = A.filter((Ye) => L && Ye.categoryId === L.id);
  return s.jsxs("div", { className: "relative flex-1 overflow-y-auto", children: [
    s.jsx(kr, { title: L ? L.name : "Belgeler", onBack: L ? () => F(null) : x, onAdd: () => {} }),
    !L && s.jsxs("div", { className: "px-5 pb-5", children: [
      s.jsxs("div", { className: "bg-white rounded-2xl p-3 flex gap-2 mb-4 border border-gray-100", children: [
        s.jsx("input", { value: I, onChange: (Ye) => V(Ye.target.value), placeholder: "Yeni kategori adı...", className: "flex-1 bg-gray-50 rounded-xl px-3 text-sm outline-none" }),
        s.jsx("button", { onClick: () => { if (I.trim()) { fe({ id: Date.now(), name: I.trim(), color: ["#1B4DD8", "#16834C", "#B8872E", "#7c3aed"][S.length % 4] }); V(""); } }, className: "bg-[#1B4DD8] text-white rounded-xl px-3 py-2 text-xs font-bold", children: "Oluştur" }),
      ] }),
      S.length === 0 && s.jsx("div", { className: "text-center bg-white/60 rounded-3xl p-8 text-sm text-gray-500", children: "Henüz kategori yok. İhtiyacın olan ilk kategoriyi yukarıdan oluştur." }),
      s.jsx("div", { className: "grid grid-cols-2 gap-3", children: S.map((Ye) => {
        const Ue = A.filter((it) => it.categoryId === Ye.id).length;
        return s.jsxs("button", { onClick: () => F(Ye), className: "bg-white rounded-2xl p-4 text-left border border-gray-100 shadow-sm", children: [
          s.jsx("div", { className: "w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-3", style: { background: Ye.color + "18" }, children: "📁" }),
          s.jsx("div", { className: "font-bold text-sm text-[#1A1A2E]", children: Ye.name }),
          s.jsx("div", { className: "text-[10px] text-gray-400 mt-1", children: `${Ue} belge` }),
        ] }, Ye.id);
      }) }),
    ] }),
    L && s.jsxs("div", { className: "px-5 pb-5", children: [
      s.jsx("input", { ref: we, type: "file", accept: ".pdf,.jpg,.jpeg,.png", multiple: !0, onChange: Ie, style: { display: "none" } }),
      s.jsx("input", { ref: Ke, type: "file", accept: ".pdf,.jpg,.jpeg,.png", onChange: Ve, style: { display: "none" } }),
      s.jsxs("div", { className: "flex justify-end gap-2 mb-3", children: [
        s.jsx("button", { onClick: async () => { const values = await kasaForm("Kategoriyi Düzenle", [{ key: "name", label: "Kategori adı", value: L.name }]); if (values && values.name.trim()) { const Ue = S.map((it) => it.id === L.id ? { ...it, name: values.name.trim() } : it); h(Ue); F({ ...L, name: values.name.trim() }); localStorage.setItem("kasa-belge-kategorileri", JSON.stringify(Ue)); activity("düzenlendi", values.name.trim()); } }, className: "text-[10px] font-bold text-[#315A86] bg-blue-50 rounded-lg px-3 py-2", children: "Kategoriyi Düzenle" }),
        s.jsx("button", { onClick: async () => { if (await kasaConfirm("Kategoriyi Sil", `“${L.name}” kategorisi ve içindeki bütün belgeler kalıcı olarak silinsin mi?`)) { const deletedName = L.name; for (const Ye of He) await pp("delete", Ye.id); const Ue = S.filter((it) => it.id !== L.id); h(Ue); localStorage.setItem("kasa-belge-kategorileri", JSON.stringify(Ue)); F(null); activity("silindi", deletedName); await re(); } }, className: "text-[10px] font-bold text-red-600 bg-red-50 rounded-lg px-3 py-2", children: "Kategoriyi Sil" }),
      ] }),
      s.jsx("button", { onClick: () => we.current.click(), className: "w-full border-2 border-dashed border-blue-200 bg-blue-50 text-[#1B4DD8] rounded-2xl py-4 text-sm font-bold mb-4", children: "+ PDF veya Görsel Yükle" }),
      He.length === 0 && s.jsx("div", { className: "text-center text-sm text-gray-400 py-8", children: "Bu kategoride henüz belge yok." }),
      s.jsx("div", { className: "space-y-3", children: He.map((Ye) => s.jsxs("div", {
        className: "relative rounded-2xl overflow-hidden border border-gray-100 shadow-sm",
        onPointerDown: (Ue) => (documentStartX.current = Ue.clientX),
        onPointerUp: (Ue) => {
          const delta = Ue.clientX - documentStartX.current;
          delta < -35 ? setOpenDocument(Ye.id) : delta > 35 && setOpenDocument(null);
        },
        children: [
          s.jsxs("div", { className: "absolute inset-y-0 right-0 flex", style: { width: "232px" }, children: [
            s.jsx("button", { onClick: () => { Be(Ye); setOpenDocument(null); }, className: "flex-1 text-white text-[9px] font-bold", style: { background: "#315A86" }, children: "Düzenle" }),
            s.jsx("button", { onClick: () => { G(Ye); Ke.current.click(); setOpenDocument(null); }, className: "flex-1 text-white text-[9px] font-bold", style: { background: "#A97924" }, children: "Değiştir" }),
            s.jsx("button", { onClick: () => { Q(Ye); setOpenDocument(null); }, className: "flex-1 text-white text-[9px] font-bold", style: { background: "#16834C" }, children: "İndir" }),
            s.jsx("button", { onClick: async () => { if (!(await kasaConfirm("Belgeyi Sil", `“${Ye.name}” belgesi kalıcı olarak silinsin mi?`))) return; Ae(Ye); setOpenDocument(null); }, className: "flex-1 text-white text-[9px] font-bold", style: { background: "#B94A48" }, children: "Sil" }),
          ] }),
          s.jsxs("button", {
            onClick: () => openDocument === Ye.id ? setOpenDocument(null) : Re(Ye),
            className: "kasa-swipe-hint relative w-full bg-white p-4 flex items-center gap-3 text-left transition-transform",
            style: { transform: openDocument === Ye.id ? "translateX(-232px)" : "translateX(0)", transition: "transform 320ms cubic-bezier(.22,.8,.3,1)", touchAction: "pan-y" },
            children: [
              s.jsx("div", { className: "w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-2xl", children: Ye.type.includes("pdf") ? "📕" : "🖼️" }),
              s.jsxs("div", { className: "flex-1 min-w-0", children: [s.jsx("div", { className: "font-semibold text-sm truncate", children: Ye.name }), s.jsx("div", { className: "text-[10px] text-gray-400", children: `${(Ye.size / 1024 / 1024).toFixed(2)} MB • ${Ye.date}` }), Ye.note && s.jsx("div", { className: "text-[10px] text-gray-500 truncate mt-1", children: Ye.note })] }),
              s.jsx(wr, { size: 16, className: "text-gray-400" }),
            ],
          }),
        ],
      }, Ye.id)) }),
    ] }),
    ee && s.jsxs("div", { className: "absolute inset-0 bg-white flex flex-col", style: { zIndex: 90 }, children: [
      s.jsxs("div", { className: "flex items-center justify-between p-3 border-b", children: [s.jsx("button", { onClick: Pe, className: "text-sm font-bold", children: "← Kapat" }), s.jsx("span", { className: "text-xs font-semibold truncate mx-2", children: ee.name }), s.jsxs("div", { className: "flex gap-2", children: [s.jsx("button", { onClick: () => window.open(ee.url, "_blank"), className: "text-[10px] font-bold text-[#1B4DD8]", children: "Büyük Aç" }), s.jsx("button", { onClick: () => Q(ee), className: "text-[10px] font-bold text-green-700", children: "İndir" })] })] }),
      ee.type.includes("pdf") ? s.jsx("iframe", { src: ee.url, className: "flex-1 w-full", title: ee.name }) : s.jsx("div", { className: "flex-1 overflow-hidden bg-gray-900 flex items-center justify-center p-3", style: { minHeight: 0 }, children: s.jsx("img", { src: ee.url, alt: ee.name, style: { display: "block", maxWidth: "100%", maxHeight: "100%", width: "auto", height: "auto", objectFit: "contain" } }) }),
    ] }),
  ] });
}
function YdFirebase({ onBack: x, records: S = [], onChange: h }) {
  const [L, F] = Qe.useState(null),
    [A, Z] = Qe.useState(null),
    fileInput = Qe.useRef(null),
    categories = [...new Set(S.map((item) => item.type || "Belge"))],
    visible = L ? S.filter((item) => (item.type || "Belge") === L) : S,
    saveRecords = (next, action, name) => {
      h(next);
      window.dispatchEvent(new CustomEvent("kasa-activity", { detail: { action, name, category: "Belgeler" } }));
    },
    chooseFile = async (event) => {
      const file = event.target.files[0];
      event.target.value = "";
      if (!file) return;
      if (file.size > 350 * 1024) {
        await kasaDialog({ title: "Dosya Çok Büyük", message: "Firebase kasa sınırı nedeniyle belge en fazla 350 KB olabilir.", confirmText: "Tamam", danger: !0 });
        return;
      }
      const values = await kasaForm("Yeni Belge", [
        { key: "name", label: "Belge adı", value: file.name.replace(/\.[^.]+$/, "") },
        { key: "type", label: "Kategori / belge türü", value: L || "Belge" },
        { key: "note", label: "Açıklama", value: "", area: !0, rows: 3 },
      ]);
      if (!values) return;
      const url = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(new Error("Dosya okunamadı"));
        reader.readAsDataURL(file);
      });
      const record = { id: `document-${Date.now()}`, name: values.name || file.name, type: values.type || "Belge", note: values.note || "", fileName: file.name, mimeType: file.type, isImage: file.type.startsWith("image/"), isPdf: file.type === "application/pdf", url };
      saveRecords([...S, record], "eklendi", record.name);
    },
    editDocument = async (record) => {
      const values = await kasaForm("Belgeyi Düzenle", [
        { key: "name", label: "Belge adı", value: record.name },
        { key: "type", label: "Kategori / belge türü", value: record.type || "Belge" },
        { key: "note", label: "Açıklama", value: record.note || "", area: !0, rows: 3 },
      ]);
      if (!values) return;
      saveRecords(S.map((item) => item.id === record.id ? { ...item, ...values } : item), "düzenlendi", values.name);
    },
    deleteDocument = async (record) => {
      if (!(await kasaConfirm("Belgeyi Sil", `“${record.name}” belgesi kalıcı olarak silinsin mi?`))) return;
      saveRecords(S.filter((item) => item.id !== record.id), "silindi", record.name);
    },
    downloadDocument = (record) => {
      const link = document.createElement("a");
      link.href = record.url;
      link.download = record.fileName || record.name;
      link.click();
    };
  return s.jsxs("div", { className: "relative flex-1 overflow-y-auto", children: [
    s.jsx(kr, { title: L || "Belgeler", onBack: L ? () => F(null) : x, onAdd: () => fileInput.current.click() }),
    s.jsx("input", { ref: fileInput, type: "file", accept: ".pdf,.jpg,.jpeg,.png", onChange: chooseFile, style: { display: "none" } }),
    !L && categories.length > 0 && s.jsx("div", { className: "px-5 grid grid-cols-2 gap-3 mb-4", children: categories.map((category) => {
      const count = S.filter((item) => (item.type || "Belge") === category).length;
      return s.jsxs("button", { onClick: () => F(category), className: "bg-white rounded-2xl p-4 text-left border border-gray-100 shadow-sm", children: [
        s.jsx("div", { className: "w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-xl mb-3", children: "📁" }),
        s.jsx("div", { className: "font-bold text-sm text-[#1A1A2E] truncate", children: category }),
        s.jsx("div", { className: "text-[10px] text-gray-400 mt-1", children: `${count} belge` }),
      ] }, category);
    }) }),
    s.jsxs("div", { className: "px-5 pb-5", children: [
      s.jsx("button", { onClick: () => fileInput.current.click(), className: "w-full border-2 border-dashed border-blue-200 bg-blue-50 text-[#1B4DD8] rounded-2xl py-4 text-sm font-bold mb-4", children: "+ PDF veya Görsel Yükle" }),
      visible.length === 0 && s.jsx("div", { className: "text-center bg-white/60 rounded-3xl p-8 text-sm text-gray-500", children: "Henüz belge yok." }),
      s.jsx("div", { className: "space-y-3", children: visible.map((record) => s.jsxs("div", { className: "bg-white rounded-2xl p-4 border border-gray-100 shadow-sm", children: [
        s.jsxs("button", { onClick: () => Z(record), className: "w-full flex items-center gap-3 text-left", children: [
          s.jsx("div", { className: "w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-2xl", children: record.isPdf ? "📕" : "🖼️" }),
          s.jsxs("div", { className: "flex-1 min-w-0", children: [
            s.jsx("div", { className: "font-semibold text-sm truncate", children: record.name }),
            s.jsx("div", { className: "text-[10px] text-gray-400", children: record.fileName || record.type }),
            record.note && s.jsx("div", { className: "text-[10px] text-gray-500 truncate mt-1", children: record.note }),
          ] }),
          s.jsx(wr, { size: 16, className: "text-gray-400" }),
        ] }),
        s.jsxs("div", { className: "flex gap-2 mt-3 pt-3 border-t border-gray-50", children: [
          s.jsx("button", { onClick: () => editDocument(record), className: "flex-1 bg-blue-50 text-[#315A86] rounded-lg py-2 text-[10px] font-bold", children: "Düzenle" }),
          s.jsx("button", { onClick: () => downloadDocument(record), className: "flex-1 bg-green-50 text-green-700 rounded-lg py-2 text-[10px] font-bold", children: "İndir" }),
          s.jsx("button", { onClick: () => deleteDocument(record), className: "bg-red-50 text-red-600 rounded-lg px-3 text-[10px] font-bold", children: "Sil" }),
        ] }),
      ] }, record.id)) }),
    ] }),
    A && s.jsxs("div", { className: "absolute inset-0 bg-white flex flex-col", style: { zIndex: 90 }, children: [
      s.jsxs("div", { className: "flex items-center justify-between p-3 border-b", children: [
        s.jsx("button", { onClick: () => Z(null), className: "text-sm font-bold", children: "← Kapat" }),
        s.jsx("span", { className: "text-xs font-semibold truncate mx-2", children: A.name }),
        s.jsx("button", { onClick: () => downloadDocument(A), className: "text-[10px] font-bold text-green-700", children: "İndir" }),
      ] }),
      A.isPdf ? s.jsx("iframe", { src: A.url, className: "flex-1 w-full", title: A.name }) : s.jsx("div", { className: "flex-1 overflow-hidden bg-gray-900 flex items-center justify-center p-3", children: s.jsx("img", { src: A.url, alt: A.name, style: { maxWidth: "100%", maxHeight: "100%", objectFit: "contain" } }) }),
    ] }),
  ] });
}

function Zd({ initialCategory: x, onClose: S, onSave: h }) {
  const [L, F] = Qe.useState(x || ""),
    [A, Z] = Qe.useState({}),
    I = {
      hesaplar: "Hesap Ekle",
      kartlar: "Kart Ekle",
      projeler: "Proje Ekle",
      notlar: "Güvenli Not Ekle",
      belgeler: "Belge Kaydı Ekle",
    },
    V = (ee, ce) => Z((T) => ({ ...T, [ee]: ce })),
    ee = (ce) =>
      s.jsxs("label", {
        className: "block",
        children: [
          s.jsx("span", {
            className: "block text-[10px] font-bold text-gray-500 mb-1",
            children: ce.label,
          }),
          ce.options
            ? s.jsx("select", {
                value: A[ce.key] || ce.options[0],
                onChange: (T) => V(ce.key, T.target.value),
                className:
                  "w-full bg-gray-50 border border-gray-100 rounded-xl px-3 py-2.5 text-sm outline-none",
                children: ce.options.map((T) =>
                  s.jsx("option", { value: T, children: T }, T),
                ),
              })
            : ce.area
              ? s.jsx("textarea", {
                value: A[ce.key] || "",
                onChange: (T) => V(ce.key, T.target.value),
                placeholder: ce.placeholder || "",
                rows: ce.rows || 3,
                className:
                  "w-full bg-gray-50 border border-gray-100 rounded-xl px-3 py-2.5 text-sm outline-none",
              })
              : s.jsx("input", {
                type: ce.type || "text",
                value: A[ce.key] || "",
                onChange: (T) => V(ce.key, T.target.value),
                placeholder: ce.placeholder || "",
                required: ce.required !== !1,
                className:
                  "w-full bg-gray-50 border border-gray-100 rounded-xl px-3 py-2.5 text-sm outline-none",
              }),
        ],
      }),
    ce = () => {
      const T = Date.now(),
        G = new Date().toLocaleDateString("tr-TR", {
          day: "numeric",
          month: "short",
        });
      let we;
      if (L === "hesaplar")
        we = {
          id: T,
          name: A.name || "Yeni Hesap",
          username: A.username || "",
          password: A.password || "",
          bg: "#1B4DD8",
          emoji: "🔐",
          lastUsed: "Yeni",
          strength: "Güçlü",
          strengthLevel: 3,
        };
      if (L === "kartlar") {
        const cardPalettes = {
            Lacivert: ["#172554", "#2563eb"],
            Yeşil: ["#14532d", "#16834c"],
            Mor: ["#3b1d66", "#7c3aed"],
            Bordo: ["#5f1724", "#a83f55"],
            Siyah: ["#111827", "#374151"],
          },
          paletteNames = Object.keys(cardPalettes),
          selectedPalette = A.cardColor && A.cardColor !== "Rastgele"
            ? A.cardColor
            : paletteNames[Math.floor(Math.random() * paletteNames.length)],
          palette = cardPalettes[selectedPalette] || cardPalettes.Lacivert;
        we = {
          id: T,
          bank: A.bank || "Yeni Kart",
          holder: (A.holder || "KART SAHİBİ").toUpperCase(),
          number: (A.number || "0000000000000000").replace(/\s/g, ""),
          expiry: A.expiry || "--/--",
          type: A.cardType || "Kart",
          cvv: A.cvv || "---",
          c1: palette[0],
          c2: palette[1],
          colorName: selectedPalette,
        };
      }
      if (L === "projeler") {
        const Q = (A.services || "GitHub")
          .split(",")
          .map((T) => T.trim())
          .filter(Boolean)
          .map((T) => ({
            name: T,
            account: A.account || "",
            password: A.password || "",
            url: A.serviceUrl || A.url || "#",
          }));
        we = {
          id: T,
          name: A.name || "Yeni Proje",
          url: A.url || "https://",
          desc: A.desc || "Proje açıklaması eklenmedi.",
          services: Q,
          notes: A.notes || "Çalışma mantığı henüz eklenmedi.",
          updated: "Bugün",
        };
      }
      if (L === "notlar")
        we = (() => {
          const Q = A.category || "Kişisel",
            Be = {
              Kişisel: "#d97706",
              Güvenlik: "#7c3aed",
              İş: "#1B4DD8",
              Fikir: "#16a34a",
              Gizli: "#E05A3A",
            };
          return {
          id: T,
          title: A.title || "Yeni Not",
          content: A.content || "",
          date: G,
          category: Q,
          accent: Be[Q],
          pinned: !1,
          };
        })();
      if (L === "belgeler")
        we = {
          id: T,
          name: A.name || "Yeni Belge",
          type: A.docType || "Belge",
          size: "Yerel kayıt",
          date: G,
          emoji: "📄",
          color: "#1B4DD8",
          notes: A.notes || "",
        };
      we && (h(L, we), S());
    },
    T = {
      hesaplar: [
        { key: "name", label: "Hesap / Site adı", placeholder: "Örn. GitHub" },
        { key: "username", label: "E-posta / Kullanıcı adı", placeholder: "mail@example.com" },
        { key: "password", label: "Şifre", type: "password", placeholder: "Şifreniz" },
      ],
      kartlar: [
        { key: "bank", label: "Banka / Kart adı", placeholder: "Örn. Ziraat Bankası" },
        { key: "cardColor", label: "Kart rengi", options: ["Rastgele", "Lacivert", "Yeşil", "Mor", "Bordo", "Siyah"] },
        { key: "holder", label: "Kart sahibi", placeholder: "Ad Soyad" },
        { key: "number", label: "Kart numarası", placeholder: "0000 0000 0000 0000" },
        { key: "expiry", label: "Son kullanma", placeholder: "AA/YY" },
        { key: "cvv", label: "CVV", type: "password", placeholder: "***" },
      ],
      projeler: [
        { key: "name", label: "Proje adı", placeholder: "Örn. SkorX" },
        { key: "url", label: "Canlı proje adresi", placeholder: "https://..." },
        { key: "desc", label: "Kısa açıklama", area: !0, rows: 2, placeholder: "Proje ne işe yarıyor?" },
        { key: "services", label: "Bağlı servisler", placeholder: "GitHub, Vercel, Firebase" },
        { key: "account", label: "Bağlı hesap e-postası", placeholder: "mail@example.com" },
        { key: "password", label: "Bağlı hesap şifresi", type: "password", placeholder: "Şifre" },
        { key: "notes", label: "Proje nasıl çalışıyor?", area: !0, rows: 3, placeholder: "Kurulum, yayınlama ve bağlantı mantığı..." },
      ],
      notlar: [
        { key: "title", label: "Not başlığı", placeholder: "Başlık" },
        {
          key: "category",
          label: "Kategori ve standart renk",
          options: ["Kişisel", "Güvenlik", "İş", "Fikir", "Gizli"],
        },
        { key: "content", label: "Not içeriği", area: !0, rows: 6, placeholder: "Notunuzu yazın..." },
      ],
      belgeler: [
        { key: "name", label: "Belge adı", placeholder: "Örn. Araç Ruhsatı" },
        { key: "docType", label: "Belge türü", placeholder: "Kimlik, Ruhsat, Sigorta..." },
        { key: "notes", label: "Açıklama", area: !0, rows: 4, placeholder: "Belge hakkında notlar..." },
      ],
    };
  return s.jsx("div", {
    className: "absolute inset-0 flex items-end",
    style: { zIndex: 100, background: "rgba(15, 23, 42, 0.48)" },
    onClick: S,
    children: s.jsxs("div", {
      className: "w-full bg-white rounded-t-3xl p-5 overflow-y-auto",
      style: { maxHeight: "82%" },
      onClick: (G) => G.stopPropagation(),
      children: [
        s.jsxs("div", {
          className: "flex items-center justify-between mb-4",
          children: [
            s.jsx("h3", {
              className: "font-bold text-[#1A1A2E] text-lg",
              children: L ? I[L] : "Yeni Kayıt",
            }),
            s.jsx("button", {
              onClick: S,
              className: "w-8 h-8 rounded-full bg-gray-100 text-gray-500",
              children: "×",
            }),
          ],
        }),
        !L
          ? s.jsx("div", {
              className: "grid grid-cols-2 gap-3 pb-2",
              children: [
                ["hesaplar", "🔐", "Hesap"],
                ["kartlar", "💳", "Kart"],
                ["projeler", "📁", "Proje"],
                ["notlar", "📝", "Güvenli Not"],
              ].map((G) =>
                s.jsxs(
                  "button",
                  {
                    onClick: () => F(G[0]),
                    className:
                      "bg-gray-50 border border-gray-100 rounded-2xl p-4 text-left active:scale-[0.97] transition-transform",
                    children: [
                      s.jsx("div", { className: "text-2xl mb-2", children: G[1] }),
                      s.jsx("div", { className: "font-bold text-sm text-[#1A1A2E]", children: G[2] }),
                    ],
                  },
                  G[0],
                ),
              ),
            })
          : s.jsxs("form", {
              onSubmit: (G) => (G.preventDefault(), ce()),
              className: "space-y-3",
              children: [
                T[L].map((G) => s.jsx(Qe.Fragment, { children: ee(G) }, G.key)),
                s.jsx("button", {
                  type: "submit",
                  className:
                    "w-full bg-[#1B4DD8] text-white font-bold rounded-2xl py-3.5 mt-2",
                  children: "Kaydı Ekle",
                }),
              ],
            }),
      ],
    }),
  });
}
function ep({ onNavigate: x, records: S }) {
  const h = [
    ["hesaplar", "🔐", "Hesaplar", (S.hesaplar || []).length - (S.deletedAccounts || []).length, "#1B4DD8"],
    ["kartlar", "💳", "Kartlar", (S.kartlar || []).length - (S.deletedCards || []).length, "#D9532B"],
    ["projeler", "📁", "Projeler", (S.projeler || []).length - (S.deletedProjects || []).length, "#16834C"],
    ["notlar", "📝", "Güvenli Notlar", (S.notlar || []).length - (S.deletedNotes || []).length, "#B8872E"],
    ["belgeler", "📄", "Belgeler", S.documentCount || 0, "#64748B"],
  ];
  return s.jsxs("div", {
    className: "flex-1 overflow-y-auto px-5 pb-5",
    children: [
      s.jsx("h2", { className: "font-bold text-xl text-[#1A1A2E] py-4", children: "Kasam" }),
      s.jsx("p", { className: "text-xs text-gray-500 mb-4", children: "Kayıtlarını kategoriye göre görüntüle ve yönet." }),
      s.jsx("div", {
        className: "space-y-3",
        children: h.map((L) =>
          s.jsxs("button", {
            onClick: () => x(L[0]),
            className: "w-full bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-3 text-left",
            children: [
              s.jsx("div", { className: "w-12 h-12 rounded-2xl flex items-center justify-center text-2xl", style: { background: L[4] + "18" }, children: L[1] }),
              s.jsxs("div", { className: "flex-1", children: [
                s.jsx("div", { className: "font-bold text-sm text-[#1A1A2E]", children: L[2] }),
                s.jsx("div", { className: "text-[10px] text-gray-400", children: `${L[3]} kayıt` }),
              ] }),
              s.jsx(wr, { size: 17, style: { color: L[4] } }),
            ],
          }, L[0]),
        ),
      }),
    ],
  });
}
function tp({ onNavigate: x, records: S }) {
  const [h, L] = Qe.useState(""),
    accountSearchRecords = [...(S.hesaplar || [])]
      .filter((A) => !(S.deletedAccounts || []).includes(A.id))
      .map((A) => (S.accountOverrides || []).find((Z) => Z.id === A.id) || A),
    cardSearchRecords = [...(S.kartlar || [])]
      .filter((A) => !(S.deletedCards || []).includes(A.id))
      .map((A) => (S.cardOverrides || []).find((Z) => Z.id === A.id) || A),
    projectSearchRecords = [...(S.projeler || [])]
      .filter((A) => !(S.deletedProjects || []).includes(A.id))
      .map((A) => (S.projectOverrides || []).find((Z) => Z.id === A.id) || A),
    noteSearchRecords = [...(S.notlar || [])]
      .filter((A) => !(S.deletedNotes || []).includes(A.id))
      .map((A) => (S.noteOverrides || []).find((Z) => Z.id === A.id) || A),
    F = [
      ...accountSearchRecords.map((A) => ({ category: "hesaplar", type: "Hesap", name: A.name, detail: A.username })),
      ...cardSearchRecords.map((A) => ({ category: "kartlar", type: "Kart", name: A.bank, detail: A.holder })),
      ...projectSearchRecords.map((A) => ({ category: "projeler", type: "Proje", name: A.name, detail: A.url })),
      ...noteSearchRecords.map((A) => ({ category: "notlar", type: "Not", name: A.title, detail: A.category })),
      ...(S.belgeler || []).map((A) => ({ category: "belgeler", type: "Belge", name: A.name, detail: A.type })),
    ].filter((A) => !h || `${A.name} ${A.detail} ${A.type}`.toLocaleLowerCase("tr").includes(h.toLocaleLowerCase("tr")));
  return s.jsxs("div", {
    className: "flex-1 overflow-y-auto px-5 pb-5",
    children: [
      s.jsx("h2", { className: "font-bold text-xl text-[#1A1A2E] py-4", children: "Ara" }),
      s.jsxs("div", { className: "flex items-center gap-2 bg-white rounded-2xl px-4 py-3 shadow-sm mb-4", children: [
        s.jsx(Ya, { size: 17, className: "text-gray-400" }),
        s.jsx("input", { value: h, onChange: (A) => L(A.target.value), placeholder: "Tüm kasada ara...", className: "flex-1 bg-transparent outline-none text-sm" }),
      ] }),
      s.jsx("div", { className: "space-y-2", children: F.slice(0, 30).map((A, Z) =>
        s.jsxs("button", { onClick: () => x(A.category), className: "w-full bg-white rounded-xl px-4 py-3 flex items-center text-left border border-gray-100", children: [
          s.jsxs("div", { className: "flex-1 min-w-0", children: [
            s.jsx("div", { className: "font-semibold text-sm text-[#1A1A2E] truncate", children: A.name }),
            s.jsx("div", { className: "text-[10px] text-gray-400 truncate", children: A.detail }),
          ] }),
          s.jsx("span", { className: "text-[9px] font-bold text-[#1B4DD8] bg-blue-50 rounded-full px-2 py-1", children: A.type }),
        ] }, `${A.category}-${Z}`),
      ) }),
    ],
  });
}
function np({ activities: x = [], onClear: S }) {
  const h = {
      eklendi: ["+", "#16834C", "#EAF7F0"],
      düzenlendi: ["✎", "#315A86", "#EDF4FB"],
      silindi: ["−", "#B94A48", "#FBEFEE"],
      sabitlendi: ["★", "#A97924", "#FBF5E8"],
    },
    L = new Date().toDateString(),
    F = x.filter((A) => new Date(A.time).toDateString() === L),
    A = x.filter((Z) => new Date(Z.time).toDateString() !== L),
    Z = (I, V) =>
      I.length
        ? s.jsxs("section", {
            className: "mb-5",
            children: [
              s.jsx("div", { className: "text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2", children: V }),
              s.jsx("div", {
                className: "space-y-2",
                children: I.map((ee) => {
                  const ce = h[ee.action] || h.düzenlendi;
                  return s.jsxs("div", {
                    className: "bg-white rounded-2xl p-3.5 border border-gray-100 shadow-sm flex items-center gap-3",
                    children: [
                      s.jsx("div", { className: "w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold flex-shrink-0", style: { color: ce[1], background: ce[2] }, children: ce[0] }),
                      s.jsxs("div", { className: "flex-1 min-w-0", children: [
                        s.jsx("div", { className: "font-semibold text-sm text-[#1A1A2E] truncate", children: ee.name }),
                        s.jsxs("div", { className: "text-[10px] text-gray-400 mt-0.5", children: [ee.category, " • ", ee.action] }),
                      ] }),
                      s.jsx("span", { className: "text-[9px] text-gray-400 flex-shrink-0", children: new Date(ee.time).toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" }) }),
                    ],
                  }, ee.id);
                }),
              }),
            ],
          })
        : null;
  return s.jsxs("div", { className: "flex-1 overflow-y-auto px-5 pb-5", children: [
    s.jsxs("div", { className: "flex items-center justify-between py-4", children: [
      s.jsx("h2", { className: "font-bold text-xl text-[#1A1A2E]", children: "Geçmiş" }),
      x.length > 0 && s.jsx("button", { onClick: S, className: "text-[10px] font-bold text-[#B94A48] bg-red-50 rounded-xl px-3 py-2", children: "Temizle" }),
    ] }),
    x.length === 0 && s.jsxs("div", { className: "bg-white/75 rounded-3xl p-8 text-center border border-white", children: [
      s.jsx("div", { className: "w-14 h-14 rounded-2xl bg-blue-50 text-[#315A86] mx-auto flex items-center justify-center mb-3", children: s.jsx(KasaHistoryIcon, { size: 26 }) }),
      s.jsx("div", { className: "font-bold text-sm text-[#1A1A2E]", children: "Henüz işlem yok" }),
      s.jsx("p", { className: "text-xs text-gray-400 mt-1 leading-relaxed", children: "Eklediğin, düzenlediğin ve sildiğin kayıtlar burada görünecek." }),
    ] }),
    Z(F, "Bugün"),
    Z(A, "Daha Önce"),
  ] });
}
function rp({ records: x, onExport: S, onImport: h, onLock: lockVault, onRotateRecovery: rotateRecovery }) {
  const L = Qe.useRef(null),
    profileUser = window.kasaCurrentUser || {},
    F = (x.hesaplar || []).length + (x.kartlar || []).length +
      (x.projeler || []).length + (x.notlar || []).length +
      (x.documentCount || 0) - (x.deletedAccounts || []).length -
      (x.deletedCards || []).length - (x.deletedProjects || []).length -
      (x.deletedNotes || []).length,
    A = (Z) => {
      const I = Z.target.files[0];
      if (!I) return;
      const V = new FileReader();
      V.onload = () => {
        try { h(String(V.result || "")); }
        catch { kasaDialog({ title: "Dosya Okunamadı", message: "Seçilen yedek dosyası geçerli değil.", confirmText: "Tamam", danger: !0 }); }
      };
      V.readAsText(I);
      Z.target.value = "";
    };
  return s.jsxs("div", { className: "flex-1 overflow-y-auto px-5 pb-5", children: [
    s.jsx("h2", { className: "font-bold text-xl text-[#1A1A2E] py-4", children: "Profil" }),
    s.jsxs("div", { className: "relative overflow-hidden rounded-3xl p-5 text-white shadow-lg", style: { background: "linear-gradient(135deg, #244F78, #1B4DD8)" }, children: [
      s.jsx("div", { className: "absolute -right-8 -top-10 w-36 h-36 rounded-full", style: { background: "rgba(255,255,255,.10)" } }),
      s.jsxs("div", { className: "relative flex items-center gap-4", children: [
        s.jsx("div", { className: "w-16 h-16 rounded-2xl border flex items-center justify-center", style: { background: "rgba(255,255,255,.18)", borderColor: "rgba(255,255,255,.20)" }, children: s.jsx(Za, { size: 30 }) }),
        s.jsxs("div", { children: [
          s.jsx("div", { className: "font-bold text-xl", children: profileUser.displayName || "Kasa Sahibi" }),
          s.jsx("div", { className: "text-blue-100 text-xs mt-1", children: profileUser.email || "Firebase kullanıcısı" }),
        ] }),
      ] }),
      s.jsxs("div", { className: "relative grid grid-cols-2 gap-2 mt-5", children: [
        s.jsxs("div", { className: "rounded-2xl p-3", style: { background: "rgba(255,255,255,.12)" }, children: [s.jsx("div", { className: "text-2xl font-bold", children: F }), s.jsx("div", { className: "text-[10px] text-blue-100", children: "Toplam kayıt" })] }),
        s.jsxs("div", { className: "rounded-2xl p-3", style: { background: "rgba(255,255,255,.12)" }, children: [s.jsx("div", { className: "text-sm font-bold mt-1", children: "Korunuyor" }), s.jsx("div", { className: "text-[10px] text-blue-100 mt-1", children: "Kasa durumu" })] }),
      ] }),
    ] }),
    s.jsx("div", { className: "text-[10px] font-bold text-gray-400 uppercase tracking-wider mt-5 mb-2", children: "Güvenlik" }),
    s.jsxs("div", { className: "bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden", children: [
      s.jsxs("div", { className: "flex items-center gap-3 p-4 border-b border-gray-50", children: [s.jsx("span", { className: "w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center", children: "🔐" }), s.jsxs("div", { className: "flex-1", children: [s.jsx("div", { className: "font-semibold text-sm", children: "AES-256 Şifreleme" }), s.jsx("div", { className: "text-[10px] text-gray-400", children: "Kasa verilerin korunuyor" })] }), s.jsx("span", { className: "text-[9px] font-bold text-green-700 bg-green-50 rounded-full px-2 py-1", children: "Aktif" })] }),
      s.jsxs("div", { className: "flex items-center gap-3 p-4", children: [s.jsx("span", { className: "w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center", children: "☁️" }), s.jsxs("div", { className: "flex-1", children: [s.jsx("div", { className: "font-semibold text-sm", children: "Firebase Bağlantısı" }), s.jsx("div", { className: "text-[10px] text-gray-400", children: "Senkronizasyon altyapısı hazır" })] }), s.jsx("span", { className: "text-[9px] font-bold text-[#315A86] bg-blue-50 rounded-full px-2 py-1", children: "Hazır" })] }),
    ] }),
    s.jsxs("div", { className: "grid grid-cols-2 gap-3 mt-3", children: [
      s.jsx("button", { onClick: rotateRecovery, className: "bg-amber-50 text-amber-800 rounded-2xl p-3 text-[10px] font-bold border border-amber-100", children: "Kurtarma Anahtarını Yenile" }),
      s.jsx("button", { onClick: lockVault, className: "bg-red-50 text-red-700 rounded-2xl p-3 text-[10px] font-bold border border-red-100", children: "Kasayı Kilitle" }),
    ] }),
    s.jsx("div", { className: "text-[10px] font-bold text-gray-400 uppercase tracking-wider mt-5 mb-2", children: "Verilerim" }),
    s.jsx("input", { ref: L, type: "file", accept: ".json,application/json", onChange: A, style: { display: "none" } }),
    s.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
      s.jsxs("button", { onClick: S, className: "bg-white rounded-2xl p-4 text-left border border-gray-100 shadow-sm", children: [s.jsx("div", { className: "text-xl mb-2", children: "⬇️" }), s.jsx("div", { className: "font-bold text-xs", children: "Yedek Dışa Aktar" }), s.jsx("div", { className: "text-[9px] text-gray-400 mt-1", children: "JSON olarak indir" })] }),
      s.jsxs("button", { onClick: () => L.current.click(), className: "bg-white rounded-2xl p-4 text-left border border-gray-100 shadow-sm", children: [s.jsx("div", { className: "text-xl mb-2", children: "⬆️" }), s.jsx("div", { className: "font-bold text-xs", children: "Yedek İçe Aktar" }), s.jsx("div", { className: "text-[9px] text-gray-400 mt-1", children: "Kasayı geri yükle" })] }),
    ] }),
    s.jsxs("div", { className: "mt-5 text-center text-[9px] text-gray-400", children: ["Kişisel Kasa V3", s.jsx("span", { className: "mx-1", children: "•" }), "Güvenli dijital yaşam"] }),
  ] });
}
function Xd() {
  const [x, S] = Qe.useState("home"),
    [h, L] = Qe.useState("anasayfa"),
    [F, A] = Qe.useState(!1),
    [Oe, Ne] = Qe.useState(0),
    [firebaseSyncState, setFirebaseSyncState] = Qe.useState("idle"),
    [Z, I] = Qe.useState(() => {
      try {
        const V = localStorage.getItem("kisisel-kasa-v3-local-records");
        return V
          ? JSON.parse(V)
          : { hesaplar: [], kartlar: [], projeler: [], notlar: [], belgeler: [] };
      } catch {
        return { hesaplar: [], kartlar: [], projeler: [], notlar: [], belgeler: [] };
      }
    }),
    [activities, setActivities] = Qe.useState(() => {
      try { return JSON.parse(localStorage.getItem("kisisel-kasa-v3-activities") || "[]"); }
      catch { return []; }
    }),
    addActivity = (action, name, category) => {
      setActivities((current) => {
        const next = [{ id: Date.now() + Math.random(), action, name, category, time: Date.now() }, ...current].slice(0, 100);
        try { localStorage.setItem("kisisel-kasa-v3-activities", JSON.stringify(next)); } catch {}
        return next;
      });
    },
    V = (ee, ce) => {
      const categoryNames = { hesaplar: "Hesaplar", kartlar: "Kartlar", projeler: "Projeler", notlar: "Güvenli Notlar", belgeler: "Belgeler" };
      addActivity("eklendi", ce.name || ce.bank || ce.title || "Yeni kayıt", categoryNames[ee] || "Kasa");
      I((T) => {
        const G = { ...T, [ee]: [...(T[ee] || []), ce] };
        try {
          localStorage.setItem("kisisel-kasa-v3-local-records", JSON.stringify(G));
        } catch {}
        return G;
      });
    },
    J = (ee) => {
      addActivity("düzenlendi", ee.title || "Güvenli not", "Güvenli Notlar");
      I((ce) => {
        const T = (ce.notlar || []).some((G) => G.id === ee.id),
          G = T
            ? {
                ...ce,
                notlar: (ce.notlar || []).map((we) =>
                  we.id === ee.id ? ee : we,
                ),
              }
            : {
                ...ce,
                noteOverrides: [
                  ...(ce.noteOverrides || []).filter((we) => we.id !== ee.id),
                  ee,
                ],
              };
        try {
          localStorage.setItem("kisisel-kasa-v3-local-records", JSON.stringify(G));
        } catch {}
        return G;
      });
    },
    q = (ee, activityName = "Güvenli not") => {
      addActivity("silindi", activityName, "Güvenli Notlar");
      I((ce) => {
        const T = (ce.notlar || []).some((G) => G.id === ee),
          G = T
            ? { ...ce, notlar: (ce.notlar || []).filter((we) => we.id !== ee) }
            : {
                ...ce,
                deletedNotes: [...new Set([...(ce.deletedNotes || []), ee])],
                noteOverrides: (ce.noteOverrides || []).filter((we) => we.id !== ee),
              };
        try {
          localStorage.setItem("kisisel-kasa-v3-local-records", JSON.stringify(G));
        } catch {}
        return G;
      });
    },
    updateVaultRecord = (category, record, overridesKey) => {
      I((current) => {
        const isLocal = (current[category] || []).some((item) => item.id === record.id),
          next = isLocal
            ? {
                ...current,
                [category]: (current[category] || []).map((item) =>
                  item.id === record.id ? record : item,
                ),
              }
            : {
                ...current,
                [overridesKey]: [
                  ...(current[overridesKey] || []).filter((item) => item.id !== record.id),
                  record,
                ],
              };
        try {
          localStorage.setItem("kisisel-kasa-v3-local-records", JSON.stringify(next));
        } catch {}
        return next;
      });
    },
    deleteVaultRecord = (category, id, overridesKey, deletedKey) => {
      I((current) => {
        const isLocal = (current[category] || []).some((item) => item.id === id),
          next = isLocal
            ? {
                ...current,
                [category]: (current[category] || []).filter((item) => item.id !== id),
              }
            : {
                ...current,
                [deletedKey]: [...new Set([...(current[deletedKey] || []), id])],
                [overridesKey]: (current[overridesKey] || []).filter((item) => item.id !== id),
              };
        try {
          localStorage.setItem("kisisel-kasa-v3-local-records", JSON.stringify(next));
        } catch {}
        return next;
      });
    },
    exportVault = () => {
      document.dispatchEvent(new CustomEvent("vault-backup-request"));
      addActivity("eklendi", "Kasa yedeği oluşturuldu", "Yedekleme");
    },
    importVault = async (backupText) => {
      if (!(await kasaDialog({ title: "Yedeği Geri Yükle", message: "Mevcut yerel kayıtların seçilen yedekle değiştirilecek. Devam edilsin mi?", confirmText: "Geri Yükle", danger: !0 }))) return;
      document.dispatchEvent(new CustomEvent("vault-import-request", { detail: { text: backupText } }));
    },
    clearActivities = async () => {
      if (!(await kasaDialog({ title: "Geçmişi Temizle", message: "Bütün işlem geçmişi temizlensin mi? Kasa kayıtların silinmez.", confirmText: "Geçmişi Temizle", danger: !0 }))) return;
      setActivities([]);
      localStorage.setItem("kisisel-kasa-v3-activities", "[]");
    },
    syncFirebase = () => {
      setFirebaseSyncState("syncing");
      document.dispatchEvent(new CustomEvent("vault-sync-request", { detail: { automatic: false } }));
    },
    ee = (ce) => A(ce),
    ce = (T) => {
      (S(T), L(T === "home" ? "anasayfa" : "kasa"));
    },
    T = () => ce("home"),
    Gg = (T) => {
      const G = {
        anasayfa: "home",
        kasa: "vault",
        ara: "search",
        gecmis: "history",
        profil: "profile",
      };
      (L(T), S(G[T] || "home"));
    };
  Qe.useEffect(() => {
    let G = !0;
    pp().then((we) => G && Ne(we.length)).catch(() => {});
    const T = (we) => Ne(Number(we.detail) || 0);
    const activityListener = (we) => {
      const detail = we.detail || {};
      addActivity(detail.action || "düzenlendi", detail.name || "Belge", detail.category || "Belgeler");
    };
    const recordsListener = (we) => {
      if (we.detail) {
        I(we.detail);
        Ne((we.detail.belgeler || []).length);
      }
    };
    let syncResetTimer;
    const syncStartedListener = () => setFirebaseSyncState("syncing");
    const syncCompleteListener = () => {
      setFirebaseSyncState("done");
      clearTimeout(syncResetTimer);
      syncResetTimer = setTimeout(() => setFirebaseSyncState("idle"), 2200);
    };
    const syncFailedListener = () => {
      setFirebaseSyncState("error");
      clearTimeout(syncResetTimer);
      syncResetTimer = setTimeout(() => setFirebaseSyncState("idle"), 3000);
    };
    window.addEventListener("kasa-documents-changed", T);
    window.addEventListener("kasa-activity", activityListener);
    window.addEventListener("kasa-records-loaded", recordsListener);
    window.addEventListener("kasa-firebase-sync-started", syncStartedListener);
    window.addEventListener("kasa-firebase-sync-complete", syncCompleteListener);
    window.addEventListener("kasa-firebase-sync-failed", syncFailedListener);
    return () => {
      G = !1;
      window.removeEventListener("kasa-documents-changed", T);
      window.removeEventListener("kasa-activity", activityListener);
      window.removeEventListener("kasa-records-loaded", recordsListener);
      window.removeEventListener("kasa-firebase-sync-started", syncStartedListener);
      window.removeEventListener("kasa-firebase-sync-complete", syncCompleteListener);
      window.removeEventListener("kasa-firebase-sync-failed", syncFailedListener);
      clearTimeout(syncResetTimer);
    };
  }, []);
  return s.jsx("div", {
    className: "kasa-stage w-screen flex items-center justify-center",
    style: {
      minHeight: "100dvh",
      background: "linear-gradient(160deg, #D8D2C8 0%, #C8C2B8 100%)",
      fontFamily: "'Inter', sans-serif",
    },
    children: s.jsxs("div", {
      className: "kasa-phone-shell relative flex flex-col overflow-hidden shadow-2xl",
      style: {
        width: "min(100vw, 390px)",
        height: "min(100dvh, 844px)",
        borderRadius: "min(44px, 5vw)",
        background: "#F0EAE0",
      },
      children: [
        s.jsx($d, {}),
        s.jsxs("div", {
          className: "flex-1 flex flex-col overflow-hidden",
          children: [
            x === "home" &&
              s.jsx(Hd, {
                onNavigate: ce,
                onAdd: () => ee("choose"),
                onSync: syncFirebase,
                syncState: firebaseSyncState,
                counts: {
                  hesaplar: (Z.hesaplar || []).length - (Z.deletedAccounts || []).length,
                  kartlar: (Z.kartlar || []).length - (Z.deletedCards || []).length,
                  projeler: (Z.projeler || []).length - (Z.deletedProjects || []).length,
                  notlar:
                    (Z.notlar || []).length - (Z.deletedNotes || []).length,
                  belgeler: Oe,
                },
              }),
            x === "hesaplar" &&
              s.jsx(Wd, {
                onBack: T,
                onAdd: () => ee("hesaplar"),
                extraRecords: Z.hesaplar || [],
                overrides: Z.accountOverrides || [],
                deletedIds: Z.deletedAccounts || [],
                onUpdate: (record) => { updateVaultRecord("hesaplar", record, "accountOverrides"); addActivity("düzenlendi", record.name, "Hesaplar"); },
                onDelete: (id, name) => { deleteVaultRecord("hesaplar", id, "accountOverrides", "deletedAccounts"); addActivity("silindi", name || "Hesap", "Hesaplar"); },
              }),
            x === "kartlar" &&
              s.jsx(Qd, {
                onBack: T,
                onAdd: () => ee("kartlar"),
                extraRecords: Z.kartlar || [],
                overrides: Z.cardOverrides || [],
                deletedIds: Z.deletedCards || [],
                onUpdate: (record) => { updateVaultRecord("kartlar", record, "cardOverrides"); addActivity("düzenlendi", record.bank, "Kartlar"); },
                onDelete: (id, name) => { deleteVaultRecord("kartlar", id, "cardOverrides", "deletedCards"); addActivity("silindi", name || "Kart", "Kartlar"); },
              }),
            x === "projeler" &&
              s.jsx(Kd, {
                onBack: T,
                onAdd: () => ee("projeler"),
                extraRecords: Z.projeler || [],
                overrides: Z.projectOverrides || [],
                deletedIds: Z.deletedProjects || [],
                onUpdate: (record) => { updateVaultRecord("projeler", record, "projectOverrides"); addActivity("düzenlendi", record.name, "Projeler"); },
                onDelete: (id, name) => { deleteVaultRecord("projeler", id, "projectOverrides", "deletedProjects"); addActivity("silindi", name || "Proje", "Projeler"); },
              }),
            x === "notlar" &&
              s.jsx(Gd, {
                onBack: T,
                onAdd: () => ee("notlar"),
                extraRecords: Z.notlar || [],
                overrides: Z.noteOverrides || [],
                deletedIds: Z.deletedNotes || [],
                onUpdate: J,
                onDelete: q,
              }),
            x === "belgeler" &&
              s.jsx(YdFirebase, {
                onBack: T,
                records: Z.belgeler || [],
                onChange: (records) => {
                  I((current) => {
                    const next = { ...current, belgeler: records };
                    localStorage.setItem("kisisel-kasa-v3-local-records", JSON.stringify(next));
                    return next;
                  });
                  Ne(records.length);
                },
              }),
            x === "vault" &&
              s.jsx(ep, {
                onNavigate: ce,
                records: { ...Z, documentCount: Oe },
              }),
            x === "search" && s.jsx(tp, { onNavigate: ce, records: Z }),
            x === "history" && s.jsx(np, { activities, onClear: clearActivities }),
            x === "profile" && s.jsx(rp, {
              records: { ...Z, documentCount: Oe },
              onExport: exportVault,
              onImport: importVault,
              onLock: () => document.dispatchEvent(new CustomEvent("vault-lock-request")),
              onRotateRecovery: async () => {
                if (await kasaDialog({ title: "Kurtarma Anahtarını Yenile", message: "Eski kurtarma anahtarın hemen geçersiz olacak. Yeni anahtar oluşturulsun mu?", confirmText: "Yeni Anahtar Oluştur", danger: !0 }))
                  document.dispatchEvent(new CustomEvent("recovery-rotate-request"));
              },
            }),
          ],
        }),
        s.jsx(Vd, { active: h, onSelect: Gg }),
        F &&
          s.jsx(Zd, {
            initialCategory: F === "choose" ? "" : F,
            onClose: () => A(!1),
            onSave: V,
          }),
      ],
    }),
  });
}
nd.createRoot(document.getElementById("root")).render(s.jsx(Xd, {}));
