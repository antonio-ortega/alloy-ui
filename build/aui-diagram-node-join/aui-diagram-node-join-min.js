YUI.add("aui-diagram-node-join",function(e,t){var n=e.Component.create({NAME:"diagram-node",ATTRS:{height:{value:60},type:{value:"join"},width:{value:60}},EXTENDS:e.DiagramNodeState,prototype:{hotPoints:e.DiagramNode.DIAMOND_POINTS,renderShapeBoundary:e.DiagramNodeCondition.prototype.renderShapeBoundary,_valueShapeBoundary:e.DiagramNode.prototype._valueShapeBoundary}});e.DiagramNodeJoin=n},"3.1.0-deprecated.33",{requires:["aui-diagram-node-state"]});
