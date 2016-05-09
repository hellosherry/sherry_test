/**
 * Created by Administrator on 2016/5/5.
 */
(function () {

    var us = function () {
        //判斷是否是數組還是對象
        function contentType(list) {
            if (list.constructor == Array) {
                return true;
            }
            else {
                return false;
            }
        };
        //map和each循環函數
        function pushArray(list, iteratee, index) {
            var a = [];
            for (var i = 0; i < list.length; i++) {
                iteratee(list[i], i, list);
                if (index == 0) {
                    a.push(list[i]);
                }
                else {
                    a.push(iteratee(list[i], i, list));
                }
            }
            return a;
        }

        return {
            /*集合函数 (数组 或对象)*/
            each: function (list, iteratee, context) {
                var b = {};
                if (contentType(list)) {
                    return pushArray(list, iteratee, 0);
                }
                else {
                    for (var p in list) {
                        iteratee(list[p], p, list);
                        b[p] = list[p];
                    }
                    return b;
                }

            },
            map: function (list, iteratee, context) {
                var b = [];
                if (contentType(list)) {
                    return pushArray(list, iteratee, 1);
                }
                else {
                    for (var p in list) {
                        iteratee(list[p], p, list);
                        b.push(iteratee(list[p], p, list));
                    }
                    return b;
                }
            },
            reduce: function (list, iteratee, memo, context) {
                if (list.constructor == Array) {
                    for (var i = 0; i < list.length; i++) {
                        if (memo) {
                            memo = iteratee(memo, list[i]);
                        }
                        else {
                            memo = iteratee(0, list[i]);
                        }
                    }
                    return memo;
                }
                //if(list.constructor == Object){
                //    for(var p in list){
                //        iteratee(list[p],p,list);
                //        b.push(iteratee(list[p],p,list));
                //    }
                //    return b;
                //}

            },
            find: function (list, predicate, context) {
                if (list.constructor != Array || !list) {
                    return undefined;
                }
                else if (!predicate) {
                    return list[0];
                } else {
                    for (var i = 0; i < list.length; i++) {
                        if (predicate(list[i])) {
                            var a = list[i];
                            break;
                        }
                    }
                    return a;
                }
            },
            filter: function (list, predicate) {
                if (list.constructor != Array || !list) {
                    return undefined;
                }
                else if (!predicate) {
                    return list;
                } else {
                    var a = [];
                    for (var i = 0; i < list.length; i++) {
                        if (predicate(list[i])) {
                            a.push(list[i]);
                        }
                    }
                    return a;
                }
            },

            reject: function (list, predicate) {
                if (list.constructor != Array || !list) {
                    return undefined;
                }
                else if (!predicate) {
                    return [];
                } else {
                    var a = [];
                    for (var i = 0; i < list.length; i++) {
                        if (!predicate(list[i])) {
                            a.push(list[i]);
                        }
                    }
                    return a;
                }
            },
            every: function (list, predicate) {
                var a = 0;
                if (!list && !predicate) {
                    return true;
                }
                if (!list && typeof (predicate) != "function") {
                    return true;
                }
                if (!predicate && typeof (list) == "function") {
                    return false;
                }
                if (!predicate && typeof (list) == "object") {
                    return true;
                }
                if (list && predicate) {
                    for (var i = 0; i < list.length; i++) {
                        if (!predicate(list[i])) {
                            a = 1;
                            break;
                        }
                    }
                    if (a == 1) {
                        return false;
                    }
                    else return true;
                }

            },
            contains: function (list, value) {
                if (!value) {
                    return false;
                }
                else {
                    if (list.indexOf(value) == -1) {
                        return false;
                    }
                    else return true;


                }
            },
            /*数组函数（Array Functions）*/
            first: function () {

            },
            /*与函数有关的函数（Function (uh, ahem) Functions）*/
            bind: function () {

            }
        }
    }


    window._ = new us();
})()