import React from 'react'
import MaterialTable from 'material-table'
import { forwardRef } from 'react'

import AddBox from '@material-ui/icons/AddBox'
import ArrowDownward from '@material-ui/icons/ArrowDownward'
import Check from '@material-ui/icons/Check'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'
import Clear from '@material-ui/icons/Clear'
import DeleteOutline from '@material-ui/icons/DeleteOutline'
import Edit from '@material-ui/icons/Edit'
import FilterList from '@material-ui/icons/FilterList'
import FirstPage from '@material-ui/icons/FirstPage'
import LastPage from '@material-ui/icons/LastPage'
import Remove from '@material-ui/icons/Remove'
import SaveAlt from '@material-ui/icons/SaveAlt'
import Search from '@material-ui/icons/Search'
import ViewColumn from '@material-ui/icons/ViewColumn'
import '../../index.css'

export default function MaterialTableDemo(props) {
  const { date } = props
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
  }
  setTimeout(() => { // Wait until page load.
    new MutationObserver((mutations, observer) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((addedNode) => {
          if (addedNode.nodeType === Node.ELEMENT_NODE) {
            const element = addedNode;
            if (element.classList.contains('MuiPopover-root')) {
              Array.from(
                element.getElementsByClassName('MuiMenuItem-root'),
              ).forEach((menuItem) => {
                if (menuItem.textContent === 'Export as PDF') {
                  menuItem.remove();
                }
              });
            }
          }
        });
      });
    }).observe(document.body, {childList: true});
  }, 0);
  const [state] = React.useState({
    columns: [
      { title: 'ลำดับ', field: 'id', type: 'numeric' },
      { title: 'testId', field: 'testId' },
      { title: 'IP Address', field: 'ipAddr' },
      { title: 'บัตรประชาชน', field: 'citzId' },
      { title: 'คำนำหน้าชื่อ', field: 'tit' },
      { title: 'ชื่อ', field: 'fname' },
      { title: 'นามสกุล', field: 'lname' },
      { title: 'เพศ', field: 'gndr', type: 'gender' },
      { title: 'อายุ(ปี)', field: 'age', type: 'numeric' },
      { title: 'ระดับการศึกษา', field: 'eduId' },
      { title: 'สาขาวิชา', field: 'brId' },
      { title: 'ป-ด-ว เวลา', field: 'testDate' },
      { title: 'p1_no1', field: 'ch1_no1' },
      { title: 'p1_no2', field: 'ch1_no2' },
      { title: 'p1_no3', field: 'ch1_no3' },
      { title: 'p1_no4', field: 'ch1_no4' },
      { title: 'p1_no5', field: 'ch1_no5' },
      { title: 'p1_no6', field: 'ch1_no6' },
      { title: 'p1_no7', field: 'ch1_no7' },
      { title: 'p1_no8', field: 'ch1_no8' },
      { title: 'p1_no9', field: 'ch1_no9' },
      { title: 'p1_no10', field: 'ch1_no10' },
      { title: 'p1_no11', field: 'ch1_no11' },
      { title: 'p1_no12', field: 'ch1_no12' },
      { title: 'p1_no13', field: 'ch1_no13' },
      { title: 'p1_no14', field: 'ch1_no14' },
      { title: 'p1_no15', field: 'ch1_no15' },
      { title: 'p1_no16', field: 'ch1_no16' },
      { title: 'p1_no17', field: 'ch1_no17' },
      { title: 'p1_no18', field: 'ch1_no18' },
      { title: 'p1_no19', field: 'ch1_no19' },
      { title: 'p1_no20', field: 'ch1_no20' },
      { title: 'p1_no21', field: 'ch1_no21' },
      { title: 'p1_no22', field: 'ch1_no22' },
      { title: 'p1_no23', field: 'ch1_no23' },
      { title: 'p1_no24', field: 'ch1_no24' },
      { title: 'p1_no25', field: 'ch1_no25' },
      { title: 'p1_no26', field: 'ch1_no26' },
      { title: 'p1_no27', field: 'ch1_no27' },
      { title: 'p1_no28', field: 'ch1_no28' },
      { title: 'p1_no29', field: 'ch1_no29' },
      { title: 'p1_no30', field: 'ch1_no30' },
      { title: 'p1_no31', field: 'ch1_no31' },
      { title: 'p1_no32', field: 'ch1_no32' },
      { title: 'p1_no33', field: 'ch1_no33' },
      { title: 'p1_no34', field: 'ch1_no34' },
      { title: 'p1_no35', field: 'ch1_no35' },
      { title: 'p1_no36', field: 'ch1_no36' },
      { title: 'p1_no37', field: 'ch1_no37' },
      { title: 'p1_no38', field: 'ch1_no38' },
      { title: 'p1_no39', field: 'ch1_no39' },
      { title: 'p1_no40', field: 'ch1_no40' },
      { title: 'p1_no41', field: 'ch1_no41' },
      { title: 'p2_no1', field: 'ch2_no1' },
      { title: 'p2_no2', field: 'ch2_no2' },
      { title: 'p2_no3', field: 'ch2_no3' },
      { title: 'p2_no4', field: 'ch2_no4' },
      { title: 'p2_no5', field: 'ch2_no5' },
      { title: 'p2_no6', field: 'ch2_no6' },
      { title: 'p2_no7', field: 'ch2_no7' },
      { title: 'p2_no8', field: 'ch2_no8' },
      { title: 'p2_no9', field: 'ch2_no9' },
      { title: 'p2_no10', field: 'ch2_no10' },
      { title: 'p2_no11', field: 'ch2_no11' },
      { title: 'p2_no12', field: 'ch2_no12' },
      { title: 'p2_no13', field: 'ch2_no13' },
      { title: 'p2_no14', field: 'ch2_no14' },
      { title: 'p2_no15', field: 'ch2_no15' },
      { title: 'p2_no16', field: 'ch2_no16' },
      { title: 'p2_no17', field: 'ch2_no17' },
      { title: 'p2_no18', field: 'ch2_no18' },
      { title: 'p2_no19', field: 'ch2_no19' },
      { title: 'p2_no20', field: 'ch2_no20' },
      { title: 'p2_no21', field: 'ch2_no21' },
      { title: 'p2_no22', field: 'ch2_no22' },
      { title: 'p2_no23', field: 'ch2_no23' },
      { title: 'p2_no24', field: 'ch2_no24' },
      { title: 'p2_no25', field: 'ch2_no25' },
      { title: 'p2_no26', field: 'ch2_no26' },
      { title: 'p2_no27', field: 'ch2_no27' },
      { title: 'p2_no28', field: 'ch2_no28' },
      { title: 'p2_no29', field: 'ch2_no29' },
      { title: 'p2_no30', field: 'ch2_no30' },
      { title: 'p2_no31', field: 'ch2_no31' },
      { title: 'p2_no32', field: 'ch2_no32' },
      { title: 'p2_no33', field: 'ch2_no33' },
      { title: 'p2_no34', field: 'ch2_no34' },
      { title: 'p2_no35', field: 'ch2_no35' },
      { title: 'p2_no36', field: 'ch2_no36' },
      { title: 'p2_no37', field: 'ch2_no37' },
      { title: 'p2_no38', field: 'ch2_no38' },
      { title: 'p2_no39', field: 'ch2_no39' },
      { title: 'p2_no40', field: 'ch2_no40' },
      { title: 'p2_no41', field: 'ch2_no41' },
      { title: 'p2_no42', field: 'ch2_no42' },
      { title: 'p2_no43', field: 'ch2_no43' },
      { title: 'p2_no44', field: 'ch2_no44' },
      { title: 'p2_no45', field: 'ch2_no45' },
      { title: 'p2_no46', field: 'ch2_no46' },
    
      { title: 'd1x1', field: 'd1x1', type: 'numeric' },
      { title: 'd1x2', field: 'd1x2', type: 'numeric' },
      { title: 'd1x3', field: 'd1x3', type: 'numeric' },
      { title: 'd1x4', field: 'd1x4', type: 'numeric' },
      { title: 'd1x5', field: 'd1x5', type: 'numeric' },
      { title: 'd1x6', field: 'd1x6', type: 'numeric' },
      { title: 'd1x7', field: 'd1x7', type: 'numeric' },
      { title: 'd1x8', field: 'd1x8', type: 'numeric' },
      { title: 'd1x9', field: 'd1x9', type: 'numeric' },
      { title: 'd2x1', field: 'd2x1', type: 'numeric' },
      { title: 'd2x2', field: 'd2x2', type: 'numeric' },
      { title: 'd2x3', field: 'd2x3', type: 'numeric' },
      { title: 'd2x4', field: 'd2x4', type: 'numeric' },
      { title: 'd2x5', field: 'd2x5', type: 'numeric' },
      { title: 'd2x6', field: 'd2x6', type: 'numeric' },
      { title: 'd2x7', field: 'd2x7', type: 'numeric' },
      { title: 'd2x8', field: 'd2x8', type: 'numeric' },
      { title: 'd2x9', field: 'd2x9', type: 'numeric' },

      { title: 'd1r1', field: 'd1r1', type: 'numeric' },
      { title: 'd1r2', field: 'd1r2', type: 'numeric' },
      { title: 'd1r3', field: 'd1r3', type: 'numeric' },
      { title: 'd1r4', field: 'd1r4', type: 'numeric' },
      { title: 'd1r5', field: 'd1r5', type: 'numeric' },
      { title: 'd1r6', field: 'd1r6', type: 'numeric' },
      { title: 'd1r7', field: 'd1r7', type: 'numeric' },
      { title: 'd1r8', field: 'd1r8', type: 'numeric' },
      { title: 'd1r9', field: 'd1r9', type: 'numeric' },
      { title: 'd1r10', field: 'd1r10', type: 'numeric' },
      { title: 'd1r11', field: 'd1r11', type: 'numeric' },
      { title: 'd1r12', field: 'd1r12', type: 'numeric' },
      { title: 'd1r13', field: 'd1r13', type: 'numeric' },
      { title: 'd1r14', field: 'd1r14', type: 'numeric' },
      { title: 'd1r15', field: 'd1r15', type: 'numeric' },
      { title: 'd1r16', field: 'd1r16', type: 'numeric' },
      { title: 'd1r17', field: 'd1r17', type: 'numeric' },
      { title: 'd1r18', field: 'd1r18', type: 'numeric' },
      { title: 'd2r1', field: 'd2r1', type: 'numeric' },
      { title: 'd2r2', field: 'd2r2', type: 'numeric' },
      { title: 'd2r3', field: 'd2r3', type: 'numeric' },
      { title: 'd2r4', field: 'd2r4', type: 'numeric' },
      { title: 'd2r5', field: 'd2r5', type: 'numeric' },
      { title: 'd2r6', field: 'd2r6', type: 'numeric' },
      { title: 'd2r7', field: 'd2r7', type: 'numeric' },
      { title: 'd2r8', field: 'd2r8', type: 'numeric' },
      { title: 'd2r9', field: 'd2r9', type: 'numeric' },
      { title: 'd2r10', field: 'd2r10', type: 'numeric' },
      { title: 'd2r11', field: 'd2r11', type: 'numeric' },
      { title: 'd2r12', field: 'd2r12', type: 'numeric' },
      { title: 'd2r13', field: 'd2r13', type: 'numeric' },
      { title: 'd2r14', field: 'd2r14', type: 'numeric' },
      { title: 'd2r15', field: 'd2r15', type: 'numeric' },
      { title: 'd2r16', field: 'd2r16', type: 'numeric' },
      { title: 'd2r17', field: 'd2r17', type: 'numeric' },
      { title: 'd2r18', field: 'd2r18', type: 'numeric' },
      { title: 'avg1', field: 'avg1', type: 'numeric' },
      { title: 'avg2', field: 'avg2', type: 'numeric' },
      { title: 'avg3', field: 'avg3', type: 'numeric' },
      { title: 'avg4', field: 'avg4', type: 'numeric' },
      { title: 'avg5', field: 'avg5', type: 'numeric' },
      { title: 'avg6', field: 'avg6', type: 'numeric' },
      { title: 'avg7', field: 'avg7', type: 'numeric' },
      { title: 'avg8', field: 'avg8', type: 'numeric' },
      { title: 'avg9', field: 'avg9', type: 'numeric' },
      { title: 'avg10', field: 'avg10', type: 'numeric' },
      { title: 'avg11', field: 'avg11', type: 'numeric' },
      { title: 'avg12', field: 'avg12', type: 'numeric' },
      { title: 'avg13', field: 'avg13', type: 'numeric' },
      { title: 'avg14', field: 'avg14', type: 'numeric' },
      { title: 'avg15', field: 'avg15', type: 'numeric' },
      { title: 'avg16', field: 'avg16', type: 'numeric' },
      { title: 'avg17', field: 'avg17', type: 'numeric' },
      { title: 'avg18', field: 'avg18', type: 'numeric' },

      {
        /* title: 'file', field: 'file', render: rowData => <file/> */
      },
    ],
  })

  return (
    <div>
      <MaterialTable
        icons={tableIcons}
        title={<h2>รายชื่อผู้ทำแบบประเมิน</h2>}
        columns={state.columns}
        data={date.datas}
        options={{
          exportButton: true,
          exportFileName: 'รายชื่อผู้ทำแบบประเมิน',
          filtering: true,
          paging: false,
          headerStyle: {
            fontFamily: 'Prompt',
          },
          rowStyle: {
            fontFamily: 'Prompt',
          },
          searchFieldStyle: {
            fontFamily: 'Prompt',
          },
          cellStyle: {
            fontFamily: 'Prompt',
          },
        }}
        localization={{
          toolbar: {
            searchPlaceholder: 'ค้นหา',
          },
        }}
      />
    </div>
  )
}
