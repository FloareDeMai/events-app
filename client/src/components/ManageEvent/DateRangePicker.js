import React from "react";
import { DatePicker, Space } from "antd";
import moment from "moment";

function DateRangePicker(props) {
    const { RangePicker } = DatePicker;
    const dateFormat = "DD-MM-YYYY";
    console.log(props)
    return (
        <Space direction="vertical" size={12}>
            <RangePicker
                format={dateFormat}
                className="rounded-full"
                disabledDate={(current) => {
                    return moment().add(-1, "days") >= current;
                }}
                onChange={props.handleDates}
            />
        </Space>
    )

}

export default DateRangePicker;