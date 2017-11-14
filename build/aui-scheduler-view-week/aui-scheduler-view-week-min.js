YUI.add("aui-scheduler-view-week",function(e,t){var n=e.Lang,r=n.isFunction,i=e.DataType.DateMath,s=i.WEEK_LENGTH,o=e.Component.create({NAME:"scheduler-view-week",ATTRS:{bodyContent:{value:""},days:{value:7},headerViewConfig:{value:{displayDaysInterval:s}},name:{value:"week"},navigationDateFormatter:{valueFn:function(){return this._valueNavigationDateFormatter},validator:r}},EXTENDS:e.SchedulerDayView,prototype:{getAdjustedViewDate:function(e){var t=this,n=t.get("scheduler"),r=n.get("firstDayOfWeek");return i.toMidnight(i.getFirstDayOfWeek(e,r))},getNextDate:function(){var e=this,t=e.get("scheduler"),n=i.safeClearTime(t.get("viewDate"));return i.toLastHour(i.add(n,i.WEEK,1))},getPrevDate:function(){var e=this,t=e.get("scheduler"),n=t.get("viewDate");return i.toMidnight(i.subtract(n,i.WEEK,1))},getToday:function(){var e=this,t=o.superclass.getToday.apply(this,arguments);return e._firstDayOfWeek(t)},_firstDayOfWeek:function(e){var t=this,n=t.get("scheduler"),r=n.get("firstDayOfWeek");return i.getFirstDayOfWeek(e,r)},_valueNavigationDateFormatter:function(t){var n=this,r=n.get("scheduler"),s=r.get("locale"),o=n._firstDayOfWeek(t),u=e.DataType.Date.format(o,{format:"%B %d",locale:s}),a=i.add(o,i.DAY,n.get("days")-1),f=e.DataType.Date.format(a,{format:(i.isMonthOverlapWeek(o)?"%B %d":"%d")+", %Y",locale:s});return[u,"&mdash;",f].join(" ")}}});e.SchedulerWeekView=o},"3.1.0-deprecated.33",{requires:["aui-scheduler-view-day"],skinnable:!0});
