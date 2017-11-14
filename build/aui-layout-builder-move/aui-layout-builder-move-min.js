YUI.add("aui-layout-builder-move",function(e,t){function m(){}var n=e.getClassName("layout","builder","moving"),r=e.getClassName("layout","builder","move","cancel"),i=e.getClassName("layout","builder","move","col","target"),s=e.getClassName("layout","builder","move","cut","button"),o=e.getClassName("layout","builder","move","cut","row","button"),u=e.getClassName("layout","builder","move","cut","col","button"),a=e.getClassName("layout","builder","move","row","target"),f=e.getClassName("layout","builder","move","target"),l=e.getClassName("layout","builder","move","target","label"),c=e.getClassName("layout","row","container","row"),h=".col",p=".layout-row",d='<div class="'+s+'" tabindex="0"></div>',v='<div class="'+f+'"><span class="'+l+'">{pasteHere}<span></div>';m.prototype={_colToBeMoved:null,_rowToBeMoved:null,initializer:function(){this._eventHandles.push(this.after("enableMoveColsChange",e.bind(this._afterEnableMoveColsChange,this)),this.after("enableMoveRowsChange",e.bind(this._afterEnableMoveRowsChange,this)),this.after("layout-row:colsChange",e.bind(this._afterMoveColsChange,this)),this.after("layout-row:movableChange",e.bind(this._afterMoveMovableChange,this)),this.after("layout:rowsChange",e.bind(this._afterMoveRowsChange,this)),this.after("layout:isColumnModeChange",e.bind(this._afterMoveIsColumnModeChange,this)),this.after("layoutChange",e.bind(this._afterMoveLayoutChange,this)),this.after("moveStart",e.bind(this._addMovingClass,this)),this.after("moveEnd",e.bind(this._afterMoveEnd,this)),e.one("doc").on("key",this._onEscKey,"esc",this)),this._uiSetEnableMoveRows(this.get("enableMoveRows")),this._uiSetEnableMoveCols(this.get("enableMoveCols"))},destructor:function(){this._unbindMoveColEvents(),this._unbindMoveRowEvents()},cancelMove:function(){this.fire("moveEnd")},_addColMoveButton:function(t,n){var r=e.Node.create(d);r.setData("node-row",n),r.setData("node-col",t),r.addClass(u),t.append(r)},_addColMoveTarget:function(t,n){var r=e.Node.create(e.Lang.sub(v,{pasteHere:this.get("strings").pasteHere}));r.setData("col-index",n),r.addClass(i),t.get("node").append(r)},_addMovingClass:function(){this._layoutContainer.addClass(n)},_afterEnableMoveColsChange:function(){this._resetMoveUI()},_afterEnableMoveRowsChange:function(){this._resetMoveUI()},_afterMoveMovableChange:function(e){var t=e.target.get("node");e.newVal?this._insertCutButtonOnRow(t.one(p)):this._removeCutButtonFromRow(t)},_afterMoveColsChange:function(){this._resetMoveUI()},_afterMoveIsColumnModeChange:function(e){var t=this,n=this._layoutContainer.all(p);e.newVal?n.each(function(e){t._hasAnythingMovable(e)&&t._insertCutButtonOnCols(e)}):this.get("removeColMoveButtons")()},_afterMoveLayoutChange:function(){this._resetMoveUI()},_afterMoveRowsChange:function(){this._resetMoveUI()},_appendMoveButtonToRows:function(){var e=this,t=this._layoutContainer.all(p);t.each(function(t){e._hasAnythingMovable(t)&&e._insertCutButtonOnRow(t)})},_appendMoveButtonToCols:function(){var e=this,t=this._layoutContainer.all(p);t.each(function(t){e._hasAnythingMovable(t)&&e._insertCutButtonOnCols(t)})},_bindMoveColEvents:function(){var t="."+s+"."+u,n="."+f+"."+i;this._moveColEventHandles=[this._layoutContainer.delegate("click",e.bind(this._onMouseClickOnMoveCutButton,this),t),this._layoutContainer.delegate("key",e.bind(this._onKeyPressOnMoveCutButton,this),"press:13",t),this._layoutContainer.delegate("click",e.bind(this._onMouseClickOnMoveTarget,this),n),this._layoutContainer.delegate("key",e.bind(this._onKeyPressOnMoveTarget,this),"press:13",n)]},_bindMoveRowEvents:function(){var t="."+s+"."+o,n="."+f+"."+a;this._moveRowEventHandles=[this._layoutContainer.delegate("click",e.bind(this._onMouseClickOnMoveCutButton,this),t),this._layoutContainer.delegate("key",e.bind(this._onKeyPressOnMoveCutButton,this),"press:13",t),this._layoutContainer.delegate("click",e.bind(this._onMouseClickOnMoveTarget,this),n),this._layoutContainer.delegate("key",e.bind(this._onKeyPressOnMoveTarget,this),"press:13",n)]},_chooseColMoveTarget:function(t,n){var r=this,i=this.get("layout").get("rows");this._colToBeMoved=n,e.Array.forEach(i,function(t){e.Array.forEach(t.get("cols"),function(e,t){e!==r._colToBeMoved&&r.get("addColMoveTarget")(e,t)})})},_clickColMoveTarget:function(e){var t=e.ancestor(p).getData("layout-row");this._resetMoveUI(),t.moveColContent(e.getData("col-index"),this._colToBeMoved)},_clickOnCutButton:function(e){var t=this._rowToBeMoved=e.getData("layout-row");this._removeAllCutButton(e);if(e.hasClass(r)){this.cancelMove();return}e.toggleClass(r),e.hasClass(o)?this.get("chooseRowMoveTarget")():(t=e.getData("node-col").getData("layout-col"),this.get("chooseColMoveTarget")(e,e.getData("node-col").getData("layout-col"))),this.fire("moveStart",{moveElement:t})},_createRowTargetArea:function(){this._createRowTargetAreaInOneDirection("before"),this._createRowTargetAreaInOneDirection("after")},_createRowTargetAreaInOneDirection:function(t){var n,r=e.Array.indexOf(this.get("layout").get("rows"),this._rowToBeMoved),i,s=t==="before"?"previous":"next",o;n=this._rowToBeMoved.get("node")[s]("."+c);while(n){i=n.one(p),t==="before"?r-=1:r+=1;if(!i.getData("layout-row").get("movable"))break;o=e.Node.create(e.Lang.sub(v,{pasteHere:this.get("strings").pasteHere})),o.addClass(a),o.setData("row-index",r),n.insert(o,t),n=n[s]("."+c)}},_hasAnythingMovable:function(e){var t,n,r=e.getData("layout-row");if(r.get("movable"))return!0;n=r.get("cols");for(t=0;t<n.length;t++)if(n[t].get("movableContent"))return!0;return!1},_insertCutButtonOnCols:function(e){var t=this,n,r,i=this._layoutContainer.all(p);n=e.all(h);if(!this.get("layout").get("isColumnMode"))return;if(n.size()===1&&i.size()===1)return;n.each(function(n){r=n.getData("layout-col"),r.get("movableContent")&&t.get("addColMoveButton")(n,e)})},_insertCutButtonOnRow:function(t){var n=e.Node.create(d),r=t.getData("layout-row"),i=this._layoutContainer.all(p);if(i.size()===1)return;if(!r.get("movable"))return;n.addClass(o),n.setData("node-row"
,t),n.setData("layout-row",r),this._layoutContainer.insertBefore(n,t)},_moveToTarget:function(e){var t=this.get("layout"),n=e.currentTarget;n.hasClass(i)?this.get("clickColMoveTarget")(n):t.moveRow(n.getData("row-index"),this._rowToBeMoved),this.fire("moveEnd",e)},_onEscKey:function(){this.cancelMove()},_onKeyPressOnMoveCutButton:function(e){e.preventDefault(),this._clickOnCutButton(e.currentTarget)},_onMouseClickOnMoveCutButton:function(e){e.stopPropagation(),this._clickOnCutButton(e.currentTarget)},_onKeyPressOnMoveTarget:function(e){this._moveToTarget(e)},_onMouseClickOnMoveTarget:function(e){this._moveToTarget(e)},_removeAllCutButton:function(e){var t=this._layoutContainer.all("."+o);this.get("removeColMoveButtons")(e),t.each(function(t){t!==e&&t.remove()})},_removeColMoveButtons:function(e){var t=this._layoutContainer.all("."+u);t.each(function(t){t!==e&&t.remove()})},_removeColMoveTargets:function(){this._layoutContainer.all("."+i).remove()},_removeCutButtonFromRow:function(e){e.one("."+o).remove()},_afterMoveEnd:function(){this._removeMovingClass(),this._resetMoveUI()},_removeMovingClass:function(){this._layoutContainer.removeClass(n)},_removeTargetArea:function(){this._layoutContainer.all("."+a).remove(),this.get("removeColMoveTargets")()},_resetMoveUI:function(){this._removeAllCutButton(),this._removeTargetArea(),this._unbindMoveColEvents(),this._unbindMoveRowEvents(),this._uiSetEnableMoveCols(this.get("enableMoveCols")),this._uiSetEnableMoveRows(this.get("enableMoveRows"))},_uiSetEnableMoveCols:function(e){e?(this._appendMoveButtonToCols(),this._bindMoveColEvents()):this._unbindMoveColEvents()},_uiSetEnableMoveRows:function(e){e?(this._appendMoveButtonToRows(),this._bindMoveRowEvents()):this._unbindMoveRowEvents()},_unbindMoveColEvents:function(){this._moveColEventHandles&&(new e.EventHandle(this._moveColEventHandles)).detach()},_unbindMoveRowEvents:function(){this._moveRowEventHandles&&(new e.EventHandle(this._moveRowEventHandles)).detach()}},m.ATTRS={addColMoveButton:{validator:e.Lang.isFunction,valueFn:function(){return e.bind(this._addColMoveButton,this)}},addColMoveTarget:{validator:e.Lang.isFunction,valueFn:function(){return e.bind(this._addColMoveTarget,this)}},chooseColMoveTarget:{validator:e.Lang.isFunction,valueFn:function(){return e.bind(this._chooseColMoveTarget,this)}},chooseRowMoveTarget:{validator:e.Lang.isFunction,valueFn:function(){return e.bind(this._createRowTargetArea,this)}},clickColMoveTarget:{validator:e.Lang.isFunction,valueFn:function(){return e.bind(this._clickColMoveTarget,this)}},enableMoveCols:{validator:e.Lang.isBoolean,value:!0},enableMoveRows:{validator:e.Lang.isBoolean,value:!0},removeColMoveButtons:{validator:e.Lang.isFunction,valueFn:function(){return e.bind(this._removeColMoveButtons,this)}},removeColMoveTargets:{validator:e.Lang.isFunction,valueFn:function(){return e.bind(this._removeColMoveTargets,this)}}},e.LayoutBuilderMove=m},"3.1.0-deprecated.33",{requires:["aui-node-base","base-build"],skinnable:!0});
