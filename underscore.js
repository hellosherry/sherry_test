/**
 * Created by Administrator on 2016/5/5.
 */
(function () {

  var us = function () {
    //�Д��Ƿ��ǔ��M߀�ǌ���
    function contentType (list) {
      if (list.constructor == Array) {
        return true;
      }
      else {
        return false;
      }
    };
    //map��eachѭ�h����
    function pushArray (list, iteratee, index) {
      var a = [];
      for (var i = 0; i < list.length; i++) {
        iteratee(list[ i ], i, list);
        if (index == 0) {
          a.push(list[ i ]);
        }
        else {
          a.push(iteratee(list[ i ], i, list));
        }
      }
      return a;
    }

    return {
      /*���Ϻ��� (���� �����)*/
      each: function (list, iteratee, context) {
        var b = {};
        if (contentType(list)) {
          return pushArray(list, iteratee, 0);
        }
        else {
          for (var p in list) {
            iteratee(list[ p ], p, list);
            b[ p ] = list[ p ];
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
            iteratee(list[ p ], p, list);
            b.push(iteratee(list[ p ], p, list));
          }
          return b;
        }
      },
      reduce: function (list, iteratee, memo, context) {
        if (list.constructor == Array) {
          for (var i = 0; i < list.length; i++) {
            if (memo) {
              memo = iteratee(memo, list[ i ]);
            }
            else {
              memo = iteratee(0, list[ i ]);
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
          return list[ 0 ];
        } else {
          for (var i = 0; i < list.length; i++) {
            if (predicate(list[ i ])) {
              var a = list[ i ];
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
            if (predicate(list[ i ])) {
              a.push(list[ i ]);
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
            if (!predicate(list[ i ])) {
              a.push(list[ i ]);
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
            if (!predicate(list[ i ])) {
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
      /*���麯����Array Functions��*/
      first: function (array, n) {
        if (!n && n != 0) {
          return array[ 0 ];
        }
        else {
          return array.slice(0, n);
        }
      },
      initial: function (array, n) {
        if (!n) {
          return array[ array.length - 1 ];
        }
        else {
          if (array.length - n > 0) {
            return array.slice(0, array.length - n);
          }
          else return [];
        }
      },
      last:function (array,n){
        if(!n){
          return array[ array.length - 1 ];
        }
        if(n==0||n>=array.length){
          return array;
        }
        else{
          return array.slice(array.length-n,array.length);
        }

      },
      rest:function (array,n){
        var newArray = [];
        array.forEach(function (item,index){
          newArray.push(item);
        })
        if(!n){
          return newArray.splice(1);
        }
        else{
          return newArray.splice(n);
        }
      },
      compact:function (array){
       var newArray = [];
        array.forEach(function (item,index){
          if(item != false && item != undefined && item != null && item != NaN && item != ''){
             newArray.push(item);
          }
        })
        return newArray;
      },
      flatten:function (array){
       //����д
      },
      without:function (array){

      },
      /*�뺯���йصĺ�����Function (uh, ahem) Functions��*/
      bind: function () {

      }
    }
  }

  window._ = new us();
})()