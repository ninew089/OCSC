import React from "react";
import MaterialTable from "material-table";
import { forwardRef } from "react";

import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import "../../index.css";

export default function MaterialTableDemo(props) {
  const { date } = props;
  const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
      <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => (
      <ArrowDownward {...props} ref={ref} />
    )),
    ThirdStateCheck: forwardRef((props, ref) => (
      <Remove {...props} ref={ref} />
    )),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  };
  const [state] = React.useState({
    columns: [
      { title: "ลำดับ", field: "id", type: "numeric" },
      { title: "testId", field: "testId" },
      { title: "IP Address", field: "ipAddr" },
      { title: "บัตรประชาชน", field: "citzId" },
      { title: "คำนำหน้าชื่อ", field: "tit" },
      { title: "ชื่อ", field: "fname" },
      { title: "นามสกุล", field: "lname" },
      { title: "เพศ", field: "gndr", type: "gender" },
      { title: "อายุ(ปี)", field: "age", type: "numeric" },
      { title: "ระดับการศึกษา", field: "eduId" },
      { title: "สาขาวิชา", field: "brId" },
      { title: "ป-ด-ว เวลา", field: "testDate" },
      { title: "คำตอบ", field: "ans" },
      { title: "d1x1", field: "d1x1", type: "numeric" },
      { title: "d1x2", field: "d1x2", type: "numeric" },
      { title: "d1x3", field: "d1x3", type: "numeric" },
      { title: "d1x4", field: "d1x4", type: "numeric" },
      { title: "d1x5", field: "d1x5", type: "numeric" },
      { title: "d1x6", field: "d1x6", type: "numeric" },
      { title: "d1x7", field: "d1x7", type: "numeric" },
      { title: "d1x8", field: "d1x8", type: "numeric" },
      { title: "d1x9", field: "d1x9", type: "numeric" },
      { title: "d2x1", field: "d2x1", type: "numeric" },
      { title: "d2x2", field: "d2x2", type: "numeric" },
      { title: "d2x3", field: "d2x3", type: "numeric" },
      { title: "d2x4", field: "d2x4", type: "numeric" },
      { title: "d2x5", field: "d2x5", type: "numeric" },
      { title: "d2x6", field: "d2x6", type: "numeric" },
      { title: "d2x7", field: "d2x7", type: "numeric" },
      { title: "d2x8", field: "d2x8", type: "numeric" },
      { title: "d2x9", field: "d2x9", type: "numeric" },

      { title: "d1r1", field: "d1r1", type: "numeric" },
      { title: "d1r2", field: "d1r2", type: "numeric" },
      { title: "d1r3", field: "d1r3", type: "numeric" },
      { title: "d1r4", field: "d1r4", type: "numeric" },
      { title: "d1r5", field: "d1r5", type: "numeric" },
      { title: "d1r6", field: "d1r6", type: "numeric" },
      { title: "d1r7", field: "d1r7", type: "numeric" },
      { title: "d1r8", field: "d1r8", type: "numeric" },
      { title: "d1r9", field: "d1r9", type: "numeric" },
      { title: "d1r10", field: "d1r10", type: "numeric" },
      { title: "d1r11", field: "d1r11", type: "numeric" },
      { title: "d1r12", field: "d1r12", type: "numeric" },
      { title: "d1r13", field: "d1r13", type: "numeric" },
      { title: "d1r14", field: "d1r14", type: "numeric" },
      { title: "d1r15", field: "d1r15", type: "numeric" },
      { title: "d1r16", field: "d1r16", type: "numeric" },
      { title: "d1r17", field: "d1r17", type: "numeric" },
      { title: "d1r18", field: "d1r18", type: "numeric" },
      { title: "d2r1", field: "d2r1", type: "numeric" },
      { title: "d2r2", field: "d2r2", type: "numeric" },
      { title: "d2r3", field: "d2r3", type: "numeric" },
      { title: "d2r4", field: "d2r4", type: "numeric" },
      { title: "d2r5", field: "d2r5", type: "numeric" },
      { title: "d2r6", field: "d2r6", type: "numeric" },
      { title: "d2r7", field: "d2r7", type: "numeric" },
      { title: "d2r8", field: "d2r8", type: "numeric" },
      { title: "d2r9", field: "d2r9", type: "numeric" },
      { title: "d2r10", field: "d2r10", type: "numeric" },
      { title: "d2r11", field: "d2r11", type: "numeric" },
      { title: "d2r12", field: "d2r12", type: "numeric" },
      { title: "d2r13", field: "d2r13", type: "numeric" },
      { title: "d2r14", field: "d2r14", type: "numeric" },
      { title: "d2r15", field: "d2r15", type: "numeric" },
      { title: "d2r16", field: "d2r16", type: "numeric" },
      { title: "d2r17", field: "d2r17", type: "numeric" },
      { title: "d2r18", field: "d2r18", type: "numeric" },
      { title: "avg1", field: "avg1", type: "numeric" },
      { title: "avg2", field: "avg2", type: "numeric" },
      { title: "avg3", field: "avg3", type: "numeric" },
      { title: "avg4", field: "avg4", type: "numeric" },
      { title: "avg5", field: "avg5", type: "numeric" },
      { title: "avg6", field: "avg6", type: "numeric" },
      { title: "avg7", field: "avg7", type: "numeric" },
      { title: "avg8", field: "avg8", type: "numeric" },
      { title: "avg9", field: "avg9", type: "numeric" },
      { title: "avg10", field: "avg10", type: "numeric" },
      { title: "avg11", field: "avg11", type: "numeric" },
      { title: "avg12", field: "avg12", type: "numeric" },
      { title: "avg13", field: "avg13", type: "numeric" },
      { title: "avg14", field: "avg14", type: "numeric" },
      { title: "avg15", field: "avg15", type: "numeric" },
      { title: "avg16", field: "avg16", type: "numeric" },
      { title: "avg17", field: "avg17", type: "numeric" },
      { title: "avg18", field: "avg18", type: "numeric" },

      {
        /* title: 'file', field: 'file', render: rowData => <file/> */
      },
    ],
  });

  return (
    <div>
      <MaterialTable
        icons={tableIcons}
        title={<h2>รายชื่อผู้ทำแบบประเมิน</h2>}
        columns={state.columns}
        data={date.datas}
        options={{
          exportButton: true,
          exportFileName: "รายชื่อผู้ทำแบบประเมิน",
          filtering: true,
          paging: false,
          headerStyle: {
            fontFamily: "Prompt",
          },
          rowStyle: {
            fontFamily: "Prompt",
          },
          searchFieldStyle: {
            fontFamily: "Prompt",
          },
          cellStyle: {
            fontFamily: "Prompt",
          },
        }}
        localization={{
          toolbar: {
            searchPlaceholder: "ค้นหา",
          },
        }}
      />
    </div>
  );
}
