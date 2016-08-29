function EditableFieldController($scope, $element, $attrs) {
    var ctrl = this;
    ctrl.editMode = false;

    ctrl.handleModeChange = function() {
        if(ctrl.editMode) {
            ctrl.onUpdate
        }
    }
}
