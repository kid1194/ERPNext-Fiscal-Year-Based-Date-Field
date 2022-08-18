import {
    respectFiscalYear,
    updateDatePicker,
    getDateTime
} from './utils/utils.js';

frappe.ui.form.ControlDatetime = frappe.ui.form.ControlDatetime.extend({
    init: function(opts) {
        respectFiscalYear(this);
        this._super(opts);
    },
    set_value: function(value, force_set_value=false) {
        value = getDateTime(this, value, true);
        return this._super(value, force_set_value);
    },
    set_input: function(value) {
        value = getDateTime(this, value);
        this._super(value);
    },
    set_datepicker: function() {
        this._super();
        updateDatePicker(this);
    },
    get_start_date: function() {
        this.value = this.value == null ? undefined : this.value;
        let value = frappe.datetime.convert_to_user_tz(this.value);
        return getDateTime(this, this.value, false, true);
    },
    get_now_date: function() {
        return getDateTime(this, null, false, true);
    }
});
