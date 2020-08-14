import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import BarChartIcon from '@material-ui/icons/BarChart'
import Link from '@material-ui/core/Link'
import SearchIcon from '@material-ui/icons/Search'
import VpnKeyIcon from '@material-ui/icons/VpnKey'
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom'
import '../../index.css'
function get_cookie(name) {
  return document.cookie.split(';').some((c) => {
    return c.trim().startsWith(name + '=')
  })
}
function deleteAllCookies() {
  var cookies = document.cookie.split(';')

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i]
    var eqPos = cookie.indexOf('=')
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT'
  }
}
function delete_cookie(name, path) {
  var domain = window.location.hostname
  if (get_cookie(name)) {
    document.cookie =
      name +
      '=' +
      (path ? ';path=' + path : '') +
      (domain ? ';domain=' + domain : '') +
      ';expires=Thu, 01 Jan 1970 00:00:01 GMT'
  }
}
function eraseCookieFromAllPaths(name) {
  // This function will attempt to remove a cookie from all paths.
  var pathBits = window.location.pathname.split('/')
  var pathCurrent = ' path='

  // do a simple pathless delete first.
  document.cookie = name + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT;'

  for (var i = 0; i < pathBits.length; i++) {
    pathCurrent += (pathCurrent.substr(-1) != '/' ? '/' : '') + pathBits[i]
    document.cookie =
      name + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT;' + pathCurrent + ';'
  }
}
function del() {
  var pathBits = window.location.pathname.split('/')
  var pathCurrent = ' path='
  document.cookie.split(';').forEach(function (c) {
    document.cookie = c
      .replace(/^ +/, '')
      .replace(
        /=.*/,
        '=;expires=' +
          new Date().toUTCString() +
          ';domain=.' +
          window.location.host.split('.').slice(-2).join('.') +
          ';' +
          pathCurrent +
          ';',
      )
  })
}
const onSubmit = () => {
  deleteAllCookies()
  del()
  eraseCookieFromAllPaths('token')
  eraseCookieFromAllPaths('uid')
  delete_cookie('token', '/aptitude-test')
  delete_cookie('uid', '/aptitude-test')
}
export const mainListItems = (
  <div className="font">
    <Link href={`${process.env.PUBLIC_URL}/admin/dash`} color="textPrimary">
      <ListItem button>
        <ListItemIcon>
          <SearchIcon />
        </ListItemIcon>
        <ListItemText primary={<h4>ค้นหารายชื่อ</h4>} />
      </ListItem>
    </Link>
    <Link href={`${process.env.PUBLIC_URL}/admin/reset`} color="textPrimary">
      <ListItem button>
        <ListItemIcon>
          <VpnKeyIcon />
        </ListItemIcon>
        <ListItemText primary={<h4>เปลี่ยนรหัสผ่าน</h4>} />
      </ListItem>
    </Link>
    <Link href={`${process.env.PUBLIC_URL}/admin/report`} color="textPrimary">
      <ListItem button>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary={<h4>สถิติทำแบบประเมิน</h4>} />
      </ListItem>
    </Link>
    <Link
      onClick={onSubmit}
      href={`${process.env.PUBLIC_URL}/admin`}
      color="textPrimary"
    >
      <ListItem button>
        <ListItemIcon>
          <MeetingRoomIcon />
        </ListItemIcon>
        <ListItemText primary={<h4>ลงชื่อออก</h4>} />
      </ListItem>
    </Link>
  </div>
)
