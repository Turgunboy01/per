import React from "react";
import { BsArrowDown } from "react-icons/bs";
import { RiGlobalLine } from "react-icons/ri";

const Header = ({ clickMoon }) => {
  return (
    <div
      className={` fixed  flex  z-40  ${
        !clickMoon ? "bg-white" : "bg-[#29292b]"
      } w-full border-b justify-between `}
    >
      <div className="flex-[.2]">
        <img
          className="py-5 pl-5"
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTM2IiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTM2IDMwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfNjQ3OF80ODYpIj4KPHBhdGggZD0iTTI2LjgxNTYgMTcuOTAyNUMyNi44NDU1IDE4LjkyNDkgMjcuMDMxMiAxOS44NTI3IDI3LjMzNzEgMjAuNzQ5OUMyOC4yNDI4IDIzLjQwNzMgMjkuODg3OCAyNS40MDggMzIuNTU2NiAyNi40NDU0QzM0LjM4MTYgMjcuMTU0NyAzNi4yNTY0IDI3LjIwNzQgMzguMTQwNCAyNi43MDY1QzQwLjE0ODIgMjYuMTcyOSA0MS43OTMyIDI1LjA5ODUgNDIuOTM5NCAyMy4zMzQ3QzQzLjE1NzggMjIuOTk4OSA0My4zMDUxIDIyLjYxODMgNDMuNTA3OSAyMi4yNzExQzQzLjU2ODMgMjIuMTY3OSA0My43MDUgMjIuMDQyIDQzLjgwODEgMjIuMDQwNUM0NC44Mzk4IDIyLjAyNDkgNDUuODcxNCAyMi4wMzM0IDQ2LjkwMjQgMjIuMDM3QzQ2LjkzNTggMjIuMDM3IDQ2Ljk2OTMgMjIuMDU3NiA0Ny4wNTYxIDIyLjA4NTRDNDYuOTcyMSAyMi4zNjI5IDQ2LjkwMSAyMi42NDQ2IDQ2LjgwMjggMjIuOTE1QzQ1LjU3MjYgMjYuMjkzOCA0My4xMjU4IDI4LjM3NDkgMzkuNzM5MSAyOS4zNTY4QzM2Ljg0NDEgMzAuMTk1NyAzMy45MzMzIDMwLjE3MzYgMzEuMDgzMSAyOS4wOTkyQzI4LjA0NzkgMjcuOTU0NSAyNS44OCAyNS44NjI3IDI0LjU1OCAyMi45MTM1QzIzLjQwNzYgMjAuMzQ3MiAyMy4xMzI5IDE3LjY1NTYgMjMuNTQyIDE0Ljg4M0MyMy45NjI1IDEyLjAzNjMgMjUuMTM1OCA5LjU2NTk4IDI3LjIyOSA3LjU2OTU0QzI4LjgxOTEgNi4wNTI2NCAzMC43MDk2IDUuMDc3MTkgMzIuODU5IDQuNjM2NzdDMzUuOTA3IDQuMDEyMDkgMzguODYxOCA0LjI5ODExIDQxLjYyMzggNS43ODI5OUM0NC45NjY0IDcuNTc5NSA0Ni45NTcyIDEwLjM5ODQgNDcuNjM1OSAxNC4xMjUyQzQ3Ljg0NjUgMTUuMjgwNyA0Ny44OTE0IDE2LjQ1NjggNDcuNzczMyAxNy42MzM2QzQ3Ljc1NCAxNy44MjcxIDQ3LjY4NzkgMTcuOTEwMyA0Ny40OTE1IDE3LjkwNDdDNDcuMjMxMSAxNy44OTYxIDQ2Ljk3IDE3LjkwMzIgNDYuNzA4OSAxNy45MDMyQzQwLjIyMjIgMTcuOTAzMiAzMy43MzU1IDE3LjkwMzIgMjcuMjQ4OSAxNy45MDMySDI2LjgxNDlMMjYuODE1NiAxNy45MDI1Wk00NC4zNTc0IDE1LjE0MjZDNDMuOTA0MiAxMC41OTA1IDM5Ljg3MTQgNi44OTkzMSAzNC45ODM1IDcuMjY0MzFDMzAuMDYgNy42MzE0NCAyNy4zNTkyIDExLjc0MzkgMjYuOTQ4NiAxNS4xNDI2SDQ0LjM1NzRaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMTAzLjE3OCAzMEMxMDAuNTQxIDI5LjkxMDQgOTguMDk5OCAyOS4yNjkzIDk1Ljk0MDQgMjcuNzM3NUM5My41MDc4IDI2LjAxMjEgOTEuOTkzOCAyMy42NDg1IDkxLjMwMTUgMjAuNzY3QzkwLjU0MzggMTcuNjEyMiA5MC42OTE3IDE0LjQ5NDUgOTIuMDA4NyAxMS41MDk4QzkzLjY3MDggNy43NDEwMyA5Ni41NzY1IDUuNDU4NTYgMTAwLjYyMiA0LjY3Mzc5QzEwMy41MTEgNC4xMTMxNCAxMDYuMzE1IDQuNDIwNSAxMDguOTU2IDUuNzUxN0MxMTIuMDg1IDcuMzI4MzYgMTE0LjA3MyA5Ljg3OTc3IDExNS4wMDMgMTMuMjI4OEMxMTUuODgyIDE2LjM5NDIgMTE1Ljc2NiAxOS41NTI1IDExNC40OTMgMjIuNTk2MkMxMTIuOTIyIDI2LjM1MjIgMTEwLjEwNiAyOC42OTk0IDEwNi4xMjUgMjkuNTg1MkMxMDUuMTYgMjkuODAwMSAxMDQuMTYyIDI5Ljg2NTUgMTAzLjE3OSAzMEgxMDMuMTc4Wk0xMTIuMSAxNy4xNzExQzExMi4xMDggMTUuNzE5NyAxMTEuODQ5IDE0LjMyMjMgMTExLjI5OSAxMi45NzY5QzEwOS43NTcgOS4yMDQ1NiAxMDYuMTUgNy4wMjEgMTAyLjExOCA3LjUzMDQyQzk4LjUwNDYgNy45ODcyIDk2LjE1MzIgMTAuMDQ4NCA5NC45MDI0IDEzLjQwNDVDOTQuMDgzNCAxNS42MDA5IDk0LjA0MjkgMTcuODYxMyA5NC42MzkxIDIwLjExNTNDOTUuMTgxMyAyMi4xNjQ0IDk2LjI0MjggMjMuOTA3NSA5Ny45NjY3IDI1LjE4NjFDMTAwLjA3OCAyNi43NTIxIDEwMi40NTQgMjcuMTk5NiAxMDUuMDA2IDI2LjcwMDhDMTA3LjAxIDI2LjMwODggMTA4LjY1MSAyNS4yNzI5IDEwOS45MjUgMjMuNjc3N0MxMTEuNDQ1IDIxLjc3NzMgMTEyLjA4NyAxOS41Nzc0IDExMi4xIDE3LjE3MTFaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMTIwLjU5MiA0Ljg4NDUyVjcuNzI1NUMxMjAuNjgxIDcuNjY1NzMgMTIwLjcyNSA3LjY1MDc5IDEyMC43NDggNy42MTk0OUMxMjIuNjA1IDUuMTIwMDIgMTI1LjE1OCA0LjIwMTQ5IDEyOC4xNzggNC4zNzM2N0MxMjkuODExIDQuNDY2ODcgMTMxLjMxNCA0Ljk2MjA3IDEzMi42MjcgNS45NjI0MkMxMzQuMTIxIDcuMTAwODEgMTM1LjA0OCA4LjYyNTUzIDEzNS40NTggMTAuNDMyQzEzNS42ODkgMTEuNDUyMyAxMzUuODM3IDEyLjUxNDUgMTM1Ljg0NSAxMy41NTlDMTM1Ljg4NCAxOC42OTMxIDEzNS44NjQgMjMuODI3MiAxMzUuODYzIDI4Ljk2MjFDMTM1Ljg2MyAyOS4wODk0IDEzNS44NSAyOS4yMTY4IDEzNS44NDEgMjkuMzY2MkMxMzUuNzExIDI5LjM3NDcgMTM1LjYwNyAyOS4zODc1IDEzNS41MDMgMjkuMzg3NUMxMzQuNjM4IDI5LjM4OSAxMzMuNzcyIDI5LjM3NTQgMTMyLjkwNyAyOS4zOTU0QzEzMi42MTEgMjkuNDAyNSAxMzIuNTQ3IDI5LjI5NDMgMTMyLjU1MSAyOS4wMjY4QzEzMi41NjQgMjguMTk3MiAxMzIuNTU2IDI3LjM2NjkgMTMyLjU1NiAyNi41MzY2QzEzMi41NTYgMjIuMzI3NCAxMzIuNTU2IDE4LjExNzUgMTMyLjU1NiAxMy45MDg0QzEzMi41NTYgMTIuNTg5MiAxMzIuMzQ2IDExLjMxNDMgMTMxLjczMyAxMC4xMjgyQzEzMC42MTYgNy45NjUyNyAxMjguNTQxIDcuMDUzODUgMTI2LjI4MyA3LjIxMzIyQzEyMy4xOTcgNy40MzA5NCAxMjEuMTY3IDkuNjk3NzUgMTIwLjczMSAxMi41ODA3QzEyMC42MzggMTMuMTk5IDEyMC41OTUgMTMuODMwMSAxMjAuNTk0IDE0LjQ1NjJDMTIwLjU4MyAxOS4yNzAxIDEyMC41ODggMjQuMDg0OCAxMjAuNTg4IDI4Ljg5ODdWMjkuMzg5QzEyMC40MiAyOS4zODkgMTIwLjMwNSAyOS4zODkgMTIwLjE5IDI5LjM4OUMxMTkuNTM4IDI5LjM4OSAxMTguODg2IDI5LjM4OSAxMTguMjM0IDI5LjM4OUMxMTcuNTk5IDI5LjM4OSAxMTcuMjgxIDI5LjA3NjYgMTE3LjI4MSAyOC40NTI2QzExNy4yODEgMjAuNzU3MiAxMTcuMjgxIDEzLjA2MTcgMTE3LjI4MiA1LjM2NjJDMTE3LjI4MiA1LjA0NTMxIDExNy40NDIgNC44ODUyMyAxMTcuNzYzIDQuODg1MjNDMTE4LjY4NiA0Ljg4NTIzIDExOS42MDkgNC44ODUyMyAxMjAuNTkzIDQuODg1MjNMMTIwLjU5MiA0Ljg4NDUyWiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTY4LjAwMTQgMjkuMzc0OEg2NC43NDQyQzY0LjczNTcgMjkuMjE1NCA2NC43MjE0IDI5LjA2NjcgNjQuNzIxNCAyOC45MThDNjQuNzIgMjMuOTM3NiA2NC43MzE0IDE4Ljk1NzEgNjQuNzEzNiAxMy45NzZDNjQuNzA3OSAxMi40NTU1IDY0LjQ2NDYgMTAuOTczNSA2My42MDg3IDkuNjY1MDhDNjIuMzc0MiA3Ljc3ODkyIDYwLjU2OTkgNy4wNjUyOSA1OC4zODkyIDcuMjIxODJDNTUuMjQ0NCA3LjQ0NzM2IDUzLjI1MjkgOS43ODg4OCA1Mi44NDk1IDEyLjcyMzFDNTIuNzcwNSAxMy4yOTU4IDUyLjczOTIgMTMuODc5OSA1Mi43Mzg1IDE0LjQ1ODRDNTIuNzI5MyAxOS4yOTY1IDUyLjczIDI0LjEzNDcgNTIuNzM4NSAyOC45NzI4QzUyLjczODUgMjkuMjg1MSA1Mi42NzQ1IDI5LjQwNzUgNTIuMzMwOCAyOS4zOTY4QzUxLjUwMTkgMjkuMzcwNSA1MC42NzA5IDI5LjM2OTggNDkuODQxMyAyOS4zOTY4QzQ5LjQ5NDggMjkuNDA4MiA0OS40MzUxIDI5LjI3OTQgNDkuNDM1MSAyOC45NzE0QzQ5LjQ0MjIgMjMuMTYwNiA0OS40NCAxNy4zNDk5IDQ5LjQ0IDExLjUzOTFDNDkuNDQgOS40NTIzNCA0OS40NDY0IDcuMzY0ODMgNDkuNDMzNiA1LjI3ODAzQzQ5LjQzMTUgNC45NjcxIDQ5LjUxMTIgNC44NjgyMSA0OS44MjkyIDQuODc2MDNDNTAuNjgyMyA0Ljg5NzM4IDUxLjUzNjggNC44OTI0IDUyLjM4OTkgNC44Nzc0NkM1Mi42NTAzIDQuODczMTkgNTIuNzQzNSA0Ljk0NTA1IDUyLjczODUgNS4yMTYxM0M1Mi43MjM2IDUuOTk4NzcgNTIuNzM0MiA2Ljc4MTQxIDUyLjczNzEgNy41NjQwNEM1Mi43MzcxIDcuNjA4MTYgNTIuNzU0MiA3LjY1MjI3IDUyLjc3NTUgNy43NTQwMUM1Mi45NDQ4IDcuNTM1NTkgNTMuMDc1OCA3LjM0OTE3IDUzLjIyMzcgNy4xNzc3MUM1NS4wODY0IDUuMDIwNDcgNTcuNDg5OCA0LjIwNzk0IDYwLjI3MzIgNC4zNjQ0N0M2MS43MDQ3IDQuNDQ0ODcgNjMuMDUzIDQuODI3NjUgNjQuMjYzOSA1LjYwODE2QzY1Ljk5OTMgNi43MjczMyA2Ny4wNTMgOC4zNDE3IDY3LjU4OCAxMC4zMTMyQzY3Ljg5NzUgMTEuNDUzMSA2OC4wMDUgMTIuNjE3MSA2OC4wMDM1IDEzLjc5NjdDNjcuOTk3OCAxOC44NjA0IDY4LjAwMTQgMjMuOTI0MSA2OC4wMDE0IDI4Ljk4N1YyOS4zNzM0VjI5LjM3NDhaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMjUuMjcwNyA0LjkwNzAzQzI1LjA3MjkgNS40MTcxNyAyNC44OTAxIDUuODk5NTYgMjQuNjk5NCA2LjM3OTgxQzIyLjMzMDEgMTIuMzU1NiAxOS45NjAyIDE4LjMzMDcgMTcuNTkwOSAyNC4zMDU4QzE2Ljk1NDEgMjUuOTExNyAxNi4zMTM4IDI3LjUxNjggMTUuNjg3NyAyOS4xMjY5QzE1LjYwODcgMjkuMzI5NyAxNS41MDg0IDI5LjM5MyAxNS4yOTkyIDI5LjM5MjNDMTMuNTIwNSAyOS4zODU5IDExLjc0MTcgMjkuMzg1MiA5Ljk2MyAyOS4zOTQ0QzkuNzMzMTkgMjkuMzk1OCA5LjYzMzU4IDI5LjMxMDQgOS41NTI0NyAyOS4xMDQxQzcuMTQ5MDYgMjMuMDE1MiA0LjczOTk1IDE2LjkyODQgMi4zMzAxMyAxMC44NDIzQzEuNjEwODEgOS4wMjU4NSAwLjg4NTgwNiA3LjIxMjI2IDAuMTY1MDY2IDUuMzk2NTNDMC4xMDUzMDEgNS4yNDU3IDAuMDU5MDUzNyA1LjA4OTE3IDAgNC45MTU1N0MwLjEwMjQ1NSA0LjkwMjA1IDAuMTcwNzU4IDQuODg1NjggMC4yMzk3NzIgNC44ODU2OEMxLjE2NDcxIDQuODgzNTUgMi4wODk2NSA0Ljg3NTAxIDMuMDE0NTkgNC44OTQ5M0MzLjEzOTgxIDQuODk3NzggMy4zMzMzMyA1LjAxNzMxIDMuMzc2NzMgNS4xMjkwMUM0Ljg5MDc5IDkuMDIzNzEgNi4zODk5IDEyLjkyNDEgNy44OTE4NSAxNi44MjMxQzkuMDg3ODcgMTkuOTI2NiAxMC4yODYgMjMuMDI5NCAxMS40NzYzIDI2LjEzNTFDMTEuNTYxNyAyNi4zNTg1IDExLjY3OTEgMjYuNDQzOCAxMS45MjEgMjYuNDMzOUMxMi4zOTQ5IDI2LjQxNDcgMTIuODcwMiAyNi40MTI1IDEzLjM0MzMgMjYuNDMzOUMxMy41ODg4IDI2LjQ0NTMgMTMuNjk0MSAyNi4zNTcgMTMuNzc5NCAyNi4xMzM2QzE0Ljk2OTEgMjMuMDI4IDE2LjE2NzkgMTkuOTI1MiAxNy4zNjQ2IDE2LjgyMjRDMTguODU0NSAxMi45NTc1IDIwLjM0NjUgOS4wOTI3MyAyMS44Mjc4IDUuMjI0MzVDMjEuOTIzMiA0Ljk3NTMzIDIyLjAzNjMgNC44NzI4OCAyMi4zMTAyIDQuODc3ODZDMjMuMTg3NSA0Ljg5NDIyIDI0LjA2NTUgNC44ODM1NSAyNC45NDI3IDQuODg0OTdDMjUuMDM1OSA0Ljg4NDk3IDI1LjEyODQgNC44OTcwNyAyNS4yNzE0IDQuOTA3MDNIMjUuMjcwN1oiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik03My4zMTggMC4wMDE0MjI5OEM3My4zMTggMC4xODY0MTEgNzMuMzE4IDAuMzE0NDc5IDczLjMxOCAwLjQ0MjU0N0M3My4zMTggMS42OTk3NSA3My4zMTIzIDIuOTU2OTUgNzMuMzIwOCA0LjIxNDE2QzczLjMyNTggNC45NDY5OSA3My4xNzcxIDQuODgxNTQgNzQuMDA4OCA0Ljg4Mjk2Qzc1Ljc4NzUgNC44ODY1MiA3Ny41NjYzIDQuODg0MzggNzkuMzQ1IDQuODg0MzhDNzkuNDgzNyA0Ljg4NDM4IDc5LjYyMjUgNC44ODQzOCA3OS43ODU0IDQuODg0MzhDNzkuNzk1NCA1LjA0NDQ3IDc5LjgwODIgNS4xNjA0NCA3OS44MDgyIDUuMjc2NDFDNzkuODA5NiA2IDc5Ljc5NjggNi43MjM1OSA3OS44MTM5IDcuNDQ2NDZDNzkuODIwMyA3LjcyNjc5IDc5LjczMzUgNy44MTUwMSA3OS40NTEgNy44MTI4OEM3Ny43NTU1IDcuODAyMjEgNzYuMDU5MyA3LjgwNzkgNzQuMzYzOCA3LjgwODYxQzc0LjEyNjkgNy44MDg2MSA3My44ODg2IDcuODIzNTUgNzMuNjUyMyA3LjgwNTA1QzczLjM4MzQgNy43ODM3MSA3My4zMDg3IDcuODg3NTggNzMuMzEyMyA4LjE1MTU1QzczLjMyNTggOS4zMTM0MSA3My4zMTg3IDEwLjQ3NiA3My4zMTg3IDExLjYzODZDNzMuMzE4NyAxNS41NDExIDczLjMxNTggMTkuNDQyOSA3My4zMjI5IDIzLjM0NDdDNzMuMzIyOSAyMy43MjE4IDczLjMzNzkgMjQuMTEwMyA3My40MjYxIDI0LjQ3MzlDNzMuNzExNCAyNS42NDkyIDc0LjU4MyAyNi4zNTc5IDc1LjgzOTUgMjYuNDA1NkM3Ni45NjQzIDI2LjQ0ODIgNzguMDkyMSAyNi40MzgzIDc5LjIxODMgMjYuNDIxMkM3OS41NzIgMjYuNDE1NSA3OS42NjQ0IDI2LjUzMzYgNzkuNjU0NSAyNi44NjhDNzkuNjMzOSAyNy41Nzg4IDc5LjYzNzQgMjguMjkxNyA3OS42NTM4IDI5LjAwMjVDNzkuNjYwMiAyOS4yODY0IDc5LjU5MTIgMjkuMzk4OCA3OS4yODEgMjkuMzk0NUM3Ny45NDEyIDI5LjM3NDYgNzYuNjAwOCAyOS40MDMxIDc1LjI2MSAyOS4zNjc1Qzc0LjM1NTMgMjkuMzQzMyA3My40NzMxIDI5LjE0NDggNzIuNjU1NiAyOC43MzcxQzcxLjE2NzggMjcuOTk2NCA3MC4zNzQ1IDI2Ljc0OTIgNzAuMTI5OCAyNS4xMzkxQzcwLjA0NzkgMjQuNjAyNiA3MC4wMjA5IDI0LjA1MzQgNzAuMDIwOSAyMy41MDk4QzcwLjAxMzggMTUuODM1NiA3MC4wMTU5IDguMTYyMjIgNzAuMDE1OSAwLjQ4ODA4M0M3MC4wMTU5IDAuMTYyOTMxIDcwLjE3MzkgMC4wMDA3MTE0OTEgNzAuNDg5OCAwQzcxLjQxMjYgMCA3Mi4zMzU0IDAgNzMuMzE4IDBWMC4wMDE0MjI5OFoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik04OS4xMTU3IDI5LjM3Mkg4NS44Mzg2Qzg1LjgzODYgMjkuMjA2OSA4NS44Mzg2IDI5LjA1NjEgODUuODM4NiAyOC45MDUzQzg1LjgzOTMgMjEuOTgyNSA4NS44Mzg2IDE1LjA1OSA4NS44NDc4IDguMTM2MTVDODUuODQ3OCA3Ljg0OTQyIDg1Ljc0NCA3LjgwNDU5IDg1LjQ5ODUgNy44MDYwMkM4NC4zMjUzIDcuODE0NTYgODMuMTUxMyA3Ljc5OTYxIDgxLjk3ODggNy44MTY2OUM4MS42NjY0IDcuODIwOTYgODEuNTY2OCA3LjcyOTg5IDgxLjU3NDYgNy40MTYxMkM4MS41OTM5IDYuNTkwMDggODEuNTgxIDUuNzYyNjIgODEuNTgxIDQuOTA3NDFDODEuNzM2OSA0Ljg5ODE2IDgxLjg1MTQgNC44ODYwNiA4MS45NjYgNC44ODYwNkM4NC4yMTc4IDQuODg1MzUgODYuNDY5NyA0Ljg5MTc1IDg4LjcyMTYgNC44Nzg5NUM4OS4wNDMyIDQuODc2ODEgODkuMTQwNiA0Ljk2MDA2IDg5LjE0MDYgNS4yOTIzMkM4OS4xMzE0IDEzLjE5OTEgODkuMTMyOCAyMS4xMDU5IDg5LjEzMjEgMjkuMDEzNEM4OS4xMzIxIDI5LjExOCA4OS4xMjI4IDI5LjIyMjYgODkuMTE1IDI5LjM3MjdMODkuMTE1NyAyOS4zNzJaIiBmaWxsPSJibGFjayIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzY0NzhfNDg2Ij4KPHJlY3Qgd2lkdGg9IjEzNS44NjgiIGhlaWdodD0iMzAiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg=="
          alt=""
        />
      </div>
      <div className="flex-[.597]">
        <div className="flex justify-between gap-5">
          <div className="flex">
            <div
              className={`w-[160px] flex weDo p-6 border-l items-center ${
                clickMoon ? "text-[#fff]" : "text-[#000]"
              }`}
            >
              What we do <BsArrowDown />
              <div className=" fixed w-screen top-[70px]  justify-end left-0 h-screen backdrop-blur-lg hoverDrop1 flex ">
                <div
                  className={` flex-[.6] justify-start  text-left ${
                    !clickMoon ? "bg-white" : "bg-[#29292b]"
                  }`}
                >
                  <div className="">
                    <div className="grid grid-cols-3 gap-10 border-b p-6  pr-[50px]">
                      <h3 className="p-2 font-semibold">Services</h3>
                      <div className="">
                        <h3
                          className={` underline m-2 font-semibold cursor-pointer hover:text-[#8873e4] ${
                            clickMoon ? "text-[#fff]" : "text-[#000]"
                          }`}
                        >
                          Software devolopment
                        </h3>
                        <h3
                          className={` underline m-2 font-semibold cursor-pointer hover:text-[#8873e4] ${
                            clickMoon ? "text-[#fff]" : "text-[#000]"
                          }`}
                        >
                          Web devolopment
                        </h3>
                      </div>
                      <div className="">
                        <h3
                          className={` underline m-2 font-semibold cursor-pointer hover:text-[#8873e4] ${
                            clickMoon ? "text-[#fff]" : "text-[#000]"
                          }`}
                        >
                          Mobile app devolopment
                        </h3>
                        <h3
                          className={` underline m-2 font-semibold cursor-pointer hover:text-[#8873e4] ${
                            clickMoon ? "text-[#fff]" : "text-[#000]"
                          }`}
                        >
                          IT services for startups
                        </h3>
                      </div>
                    </div>{" "}
                    <div className="grid grid-cols-3 gap-10 border-b p-6  pr-[50px]">
                      <h3 className="p-2 font-semibold">Industries</h3>
                      <div className="">
                        <h3
                          className={` underline m-2 font-semibold cursor-pointer hover:text-[#8873e4] ${
                            clickMoon ? "text-[#fff]" : "text-[#000]"
                          }`}
                        >
                          Fintech
                        </h3>
                        <h3
                          className={` underline m-2 font-semibold cursor-pointer hover:text-[#8873e4] ${
                            clickMoon ? "text-[#fff]" : "text-[#000]"
                          }`}
                        >
                          Healthtech
                        </h3>{" "}
                        <h3
                          className={` underline m-2 font-semibold cursor-pointer hover:text-[#8873e4] ${
                            clickMoon ? "text-[#fff]" : "text-[#000]"
                          }`}
                        >
                          Edtech
                        </h3>
                        <h3
                          className={` underline m-2 font-semibold cursor-pointer hover:text-[#8873e4] ${
                            clickMoon ? "text-[#fff]" : "text-[#000]"
                          }`}
                        >
                          Gamedev
                        </h3>
                      </div>
                      <div className="">
                        <h3
                          className={` underline m-2 font-semibold cursor-pointer hover:text-[#8873e4] ${
                            clickMoon ? "text-[#fff]" : "text-[#000]"
                          }`}
                        >
                          Real estate
                        </h3>
                        <h3
                          className={` underline m-2 font-semibold cursor-pointer hover:text-[#8873e4] ${
                            clickMoon ? "text-[#fff]" : "text-[#000]"
                          }`}
                        >
                          Ecommerce
                        </h3>
                        <h3
                          className={` underline m-2 font-semibold cursor-pointer hover:text-[#8873e4] ${
                            clickMoon ? "text-[#fff]" : "text-[#000]"
                          }`}
                        >
                          Marketiing/adtech
                        </h3>
                      </div>
                    </div>{" "}
                    <div className="grid grid-cols-3 gap-10 border-b p-6  pr-[50px] ">
                      <h3 className="p-2 font-semibold">Services</h3>
                      <div className="">
                        <h3
                          className={` underline m-2 font-semibold cursor-pointer hover:text-[#8873e4] ${
                            clickMoon ? "text-[#fff]" : "text-[#000]"
                          }`}
                        >
                          Expertise
                        </h3>
                        <h3
                          className={` underline m-2 font-semibold cursor-pointer hover:text-[#8873e4] ${
                            clickMoon ? "text-[#fff]" : "text-[#000]"
                          }`}
                        >
                          Cloud
                        </h3>
                        <h3
                          className={` underline m-2 font-semibold cursor-pointer hover:text-[#8873e4] ${
                            clickMoon ? "text-[#fff]" : "text-[#000]"
                          }`}
                        >
                          Blockchain
                        </h3>
                        <h3
                          className={` underline m-2 font-semibold cursor-pointer hover:text-[#8873e4] ${
                            clickMoon ? "text-[#fff]" : "text-[#000]"
                          }`}
                        >
                          Salesforce
                        </h3>
                      </div>
                      <div className="">
                        <h3
                          className={` underline m-2 font-semibold cursor-pointer hover:text-[#8873e4] ${
                            clickMoon ? "text-[#fff]" : "text-[#000]"
                          }`}
                        >
                          Internet things
                        </h3>
                        <h3
                          className={` underline m-2 font-semibold cursor-pointer hover:text-[#8873e4] ${
                            clickMoon ? "text-[#fff]" : "text-[#000]"
                          }`}
                        >
                          AI
                        </h3>
                        <h3 className="m-2 underline font-semibold cursor-pointer hover:text-[#8873e4]">
                          Big data
                        </h3>
                        <h3 className="m-2 font-semibold underline cursor-pointer">
                          Cybersecurity
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className={`w-[160px] hover:bg-[red] font-semibold ${
                clickMoon ? "text-[#fff]" : "text-[#000]"
              }`}
            >
              Portfolio
            </button>
            <button
              className={`w-[160px] hover:bg-[red] font-semibold font-semibold ${
                clickMoon ? "text-[#fff]" : "text-[#000]"
              }`}
            >
              Insights
            </button>
            <div
              className={`w-[160px] flex weDo p-6 items-center font-semibold ${
                clickMoon ? "text-[#fff]" : "text-[#000]"
              }`}
            >
              About us <BsArrowDown />
              <div className=" fixed w-screen top-[70px]  justify-end left-0 h-screen backdrop-blur-lg hoverDrop1  flex ">
                <div
                  className={` flex-[.6] justify-start  text-left ${
                    !clickMoon ? "bg-white" : "bg-[#29292b]"
                  } `}
                >
                  <div className="">
                    <div className="grid grid-cols-3 gap-5 border-b p-6  pr-[50px]">
                      <h3 className="p-2 font-semibold">Company</h3>
                      <div className="">
                        <div className="h-[170px]">
                          <h3 className=" underline m-2 cursor-pointer font-semibold hover:text-[#8873e4]">
                            Who we are
                          </h3>
                          <p className="text-[17px] font-semibold mb-8 pl-2">
                            Impact on clients, communities,and our people
                          </p>
                        </div>
                        <div className="">
                          <h3 className=" underline m-2 cursor-pointer font-semibold hover:text-[#8873e4]">
                            How we work
                          </h3>
                          <p className="text-[17px] font-semibold  pl-2">
                            Discover our formula for your success
                          </p>
                        </div>
                      </div>
                      <div className="">
                        <div className="h-[170px]">
                          <h3 className=" underline m-2 cursor-pointer font-semibold hover:text-[#8873e4]">
                            Careers
                          </h3>
                          <p className="text-[17px] font-semibold mb-8 pl-2">
                            Boost your career,boost global innovation
                          </p>
                        </div>
                        <div className="">
                          <h3 className=" underline m-2 cursor-pointer font-semibold hover:text-[#8873e4]">
                            Partnerships
                          </h3>
                          <p className="text-[17px] font-semibold  pl-2">
                            We team up with the top tech to deliver top-tier
                            results
                          </p>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="grid grid-cols-3 gap-5 border-b p-6  pr-[50px]">
                      <h3 className="p-2 font-semibold">Delivery models</h3>
                      <div className="">
                        <h3 className="m-2 underline cursor-pointer font-semibold hover:text-[#8873e4]">
                          IT staff augmentation
                        </h3>
                        <h3 className="m-2 underline cursor-pointer font-semibold hover:text-[#8873e4]">
                          Dedicated devolopment teams
                        </h3>{" "}
                      </div>
                      <div className="">
                        <h3 className="m-2 underline cursor-pointer font-semibold hover:text-[#8873e4]">
                          Software project outsourcing
                        </h3>
                      </div>
                    </div>{" "}
                    <div className="grid grid-cols-3 gap-5 border-b p-6  pr-[50px] ">
                      <h3 className="p-2 font-semibold">Discover more</h3>
                      <div className="">
                        <h3 className="m-2 underline cursor-pointer font-semibold hover:text-[#8873e4]">
                          Newsroom
                        </h3>
                      </div>
                      <div className="">
                        <h3 className="m-2 underline cursor-pointer font-semibold hover:text-[#8873e4]">
                          Media kit
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <button
              className={`p-6 hover:bg-[red] font-semibold  ${
                clickMoon ? "text-[#fff]" : "text-[#000]"
              } `}
            >
              Contact us
            </button>
            <div
              className={`p-6 px-10 globus  relative font-semibold  ${
                clickMoon ? "text-[#fff]" : "text-[#000]"
              } `}
            >
              <RiGlobalLine />
              <div className="absolute border top-[70px] right-0 bg-[#fff] w-[200px] p-5 flex flex-col gap-2 justify-start items-start">
                <button>US & WorldWide</button>
                <button>UK</button>
                <button>DACH</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
