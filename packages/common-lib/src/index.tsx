import * as React from 'react'
import styles from './styles.module.css'

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

import AppBar from './components/layout/AppBar'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Layout from './components/layout/Layout'
import SearchLayout from './components/SearchLayout'
import IconByName from './components/IconByName'
import Widget from './components/Widget'
import Collapsible from './components/Collapsible'
import Menu, { SubMenu } from './components/Menu'
import DEFAULT_THEME from './components/theme'
import initializeI18n from './services/i18n'
import AppShell from './components/AppShell'
import ProgressBar from './components/ProgressBar'
import Tab from './components/Tab'
import Loading from './components/Loading'
import FilterButton from './components/FilterButton'
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  Heading1
} from './components/layout/HeaderTags/index'

import * as teacherRegistryService from './services/teacherRegistryService'
import * as classRegistryService from './services/classRegistryService'
import * as attendanceRegistryService from './services/attendanceRegistryService'
import * as studentRegistryService from './services/studentRegistryService'
import * as worksheetRegistryService from './services/worksheetRegistryService'

export {
  AppBar,
  Header,
  Footer,
  Layout,
  SearchLayout,
  IconByName,
  FilterButton,
  Widget,
  Collapsible,
  Menu,
  SubMenu,
  DEFAULT_THEME,
  initializeI18n,
  AppShell,
  ProgressBar,
  Tab,
  Loading,
  H1,
  H2,
  H3,
  H4,
  H5,
  Heading1,
  teacherRegistryService,
  classRegistryService,
  attendanceRegistryService,
  studentRegistryService,
  worksheetRegistryService
}

export * from './services/Auth'
export * from './services/RestClient'
export * from './services/EventBus'
export * from './components/helper'
export * from './services/Telemetry'
export * from './components/calender'
