import styles from '../styles/components/Header.module.css'

export default function Header(params) {
    const setMobileNavOpen = params.setMobileNavOpen

    return (
        <div className={styles.Header}>
            <div
                className={`${styles.MobileNavIcon} ${
                    params.mobileNavOpen ? styles.SlideOut : ''
                }`}
                onClick={(e) => {
                    setMobileNavOpen(true)
                }}
            >
                <div className={styles.line1}></div>
                <div className={styles.line2}></div>
                <div className={styles.line3}></div>
            </div>
            <img
                src={`data:image/svg+xml;base64, CiAgICAgICAgPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIzMjM0LjgzMDU2NzcwOTQ4MSIgCiAgICAgICAgaGVpZ2h0PSIxNTYxLjYyMzI3NTI2ODA0NzgiIHZpZXdCb3g9IjAgMCAzMjM0LjgzMDU2NzcwOTQ4MSAxNTYxLjYyMzI3NTI2ODA0NzgiPgoJCQk8cmVjdCBmaWxsPSIjMTIyZDQyIiB3aWR0aD0iMzIzNC44MzA1Njc3MDk0ODEiIGhlaWdodD0iMTU2MS42MjMyNzUyNjgwNDc4Ii8+CgkJCTxnIHRyYW5zZm9ybT0ic2NhbGUoMTEuNzQxNTI4Mzg1NDc0MDQzKSB0cmFuc2xhdGUoMTAsIDEwKSI+CgkJCQk8ZGVmcyBpZD0iU3ZnanNEZWZzMTA0MiI+PC9kZWZzPjxnIGlkPSJTdmdqc0cxMDQzIiBmZWF0dXJlS2V5PSJzbG9nYW5GZWF0dXJlLTAiIHRyYW5zZm9ybT0ibWF0cml4KDEuMjI0NDg5NzMyMzY2NTYyOSwwLDAsMS4yMjQ0ODk3MzIzNjY1NjI5LDQwLjAwMDAwMDE0NTk3MDU1LDg4LjMxNDI4NzE4MjMzMjQpIiBmaWxsPSIjM2RkMmNjIj48cGF0aCBkPSJNNC43IDEwLjYyIGwwIDEuODggbC0yLjgyIDAgbDAgNy40NiBsLTEuODggMCBsMCAtMTQuMjQgbDQuNjYgMCBsMCAxLjkgbC0yLjc4IDAgbDAgMyBsMi44MiAwIHogTTcuNiA1LjY4IGwwIDE0LjI0IGwtMS45IDAgbDAgLTE0LjI0IGwxLjkgMCB6IE0xMy4yMzk5OTk5OTk5OTk5OTggMTYuNzIgbDAuMDggLTExLjA4IGwxLjkyIDAgbC0wLjEyIDE0LjQ0IGwtMi45OCAwIGwtMS42MiAtMTEuMTggbDAgMTEuMTggbC0xLjkyIDAgbDAgLTE0LjQ0IGwzLjEgMCB6IE0xOC43NDAwMDAwMDAwMDAwMDIgMjAuMDIgbC0yLjUgMCBsMCAtMTQuMjYgbDIuNSAwIGMxLjcgMCAzLjA2IDEuMzggMy4wNiAzLjA4IGwwIDguMSBjMCAwLjgyIC0wLjMyIDEuNiAtMC45IDIuMTggcy0xLjM0IDAuOSAtMi4xNiAwLjkgeiBNMTguMTQgNy42OCBsMCAxMC40MiBsMC42IDAgYzAuMyAwIDAuNiAtMC4xMiAwLjgyIC0wLjM0IHMwLjM0IC0wLjUgMC4zNCAtMC44MiBsMCAtOC4xIGMwIC0wLjY0IC0wLjUyIC0xLjE2IC0xLjE2IC0xLjE2IGwtMC42IDAgeiBNMzMuODggNS43MjAwMDAwMDAwMDAwMDEgbC0yLjY4IDguNjggbDAgNS42IGwtMS45NCAwIGwwIC01LjYyIGwtMi40NiAtOC42NiBsMiAwIGwxLjQ2IDUuMTQgbDEuNiAtNS4xNCBsMi4wMiAwIHogTTM3LjU4MDAwMDAwMDAwMDAwNSAyMC4wMiBjLTEuNSAwIC0yLjcgLTEuMjIgLTIuNyAtMi43IGwwIC04Ljk4IGMwIC0xLjQ4IDEuMiAtMi42OCAyLjcgLTIuNjggYzEuNDggMCAyLjY4IDEuMiAyLjY4IDIuNjggbDAgOC45OCBjMCAxLjQ4IC0xLjIgMi43IC0yLjY4IDIuNyB6IE0zNy41ODAwMDAwMDAwMDAwMDUgNy41NjAwMDAwMDAwMDAwMDA1IGMtMC40NCAwIC0wLjc4IDAuMzYgLTAuNzggMC43OCBsMCA4Ljk4IGMwIDAuNDQgMC4zNCAwLjc4IDAuNzggMC43OCBjMC40MiAwIDAuNzggLTAuMzQgMC43OCAtMC43OCBsMCAtOC45OCBjMCAtMC40MiAtMC4zNiAtMC43OCAtMC43OCAtMC43OCB6IE00NC4yIDIwLjA0IGMtMS42MiAwIC0yLjk0IC0xLjMyIC0yLjk0IC0yLjk0IGwwIC0xMS4zNiBsMS45IDAgbDAgMTEuMzYgYzAgMC41OCAwLjQ2IDEuMDYgMS4wNCAxLjA2IHMxLjA0IC0wLjQ4IDEuMDQgLTEuMDYgbDAgLTExLjM2IGwxLjkgMCBsMCAxMS4zNiBjMCAxLjYyIC0xLjMyIDIuOTQgLTIuOTQgMi45NCB6IE01My42MjAwMDAwMDAwMDAwMDUgMjAuMDQgbC0yLjA0IDAgbC0xLjEgLTMuMDIgbC0wLjQ0IDAgbDAgMy4wMiBsLTEuOSAwIGwwIC0xNC4zMiBsMi45OCAwIGMxLjMyIDAgMi4zOCAxLjA2IDIuMzggMi4zOCBsMCA2LjU0IGMwIDAuODYgLTAuNDQgMS42IC0xLjEyIDIuMDIgeiBNNTAuMDQwMDAwMDAwMDAwMDA2IDcuNjE5OTk5OTk5OTk5OTk5IGwwIDcuNSBsMS4wOCAwIGMwLjI2IDAgMC40OCAtMC4yMiAwLjQ4IC0wLjQ4IGwwIC02LjU0IGMwIC0wLjI2IC0wLjIyIC0wLjQ4IC0wLjQ4IC0wLjQ4IGwtMS4wOCAwIHogTTYyLjIyMDAwMDAwMDAwMDAwNiA1LjcyMDAwMDAwMDAwMDAwMSBsMS45IDAgbDAgMTQuMjYgbC0xLjkgMCBsMCAtNy41NCBsLTEuNyAwIGwwIDcuNTQgbC0xLjkgMCBsMCAtMTQuMjYgbDEuOSAwIGwwIDQuODQgbDEuNyAwIGwwIC00Ljg0IHogTTY3LjgyMDAwMDAwMDAwMDAxIDIwLjAyIGMtMS41IDAgLTIuNyAtMS4yMiAtMi43IC0yLjcgbDAgLTguOTggYzAgLTEuNDggMS4yIC0yLjY4IDIuNyAtMi42OCBjMS40OCAwIDIuNjggMS4yIDIuNjggMi42OCBsMCA4Ljk4IGMwIDEuNDggLTEuMiAyLjcgLTIuNjggMi43IHogTTY3LjgyMDAwMDAwMDAwMDAxIDcuNTYwMDAwMDAwMDAwMDAwNSBjLTAuNDQgMCAtMC43OCAwLjM2IC0wLjc4IDAuNzggbDAgOC45OCBjMCAwLjQ0IDAuMzQgMC43OCAwLjc4IDAuNzggYzAuNDIgMCAwLjc4IC0wLjM0IDAuNzggLTAuNzggbDAgLTguOTggYzAgLTAuNDIgLTAuMzYgLTAuNzggLTAuNzggLTAuNzggeiBNNzcuMyA1LjY4IGwzLjM0IDAgbDAgMTQuMjggbC0xLjg4IDAgbDAgLTExLjMgbC0xLjc4IDExLjM0IGwtMC43NCAwIGwtMC4xOCAtMC4wNCBsLTAuMTYgMC4wNCBsLTAuNzQgMCBsLTEuNzYgLTExLjM0IGwwIDExLjMgbC0xLjkgMCBsMCAtMTQuMjggbDMuMzYgMCBsMS4yMiA4LjA4IHogTTg2LjMgMTIuNDYgbC0yLjc2IDAgbDAgNS42NCBsMi43OCAwIGwwIDEuOSBsLTQuNjggMCBsMCAtMTQuMjggbDQuNjggMCBsMCAxLjkgbC0yLjc4IDAgbDAgMi45NCBsMi43NiAwIGwwIDEuOSB6IE05My4yMiAxNyBsMCAyLjk4IGwtMS45IDAgbDAgLTE0LjI2IGwyLjk2IDAgYzEuMzIgMCAyLjM4IDEuMDggMi4zOCAyLjQgbDAgNi41IGMwIDEuMzIgLTEuMDYgMi4zOCAtMi4zOCAyLjM4IGwtMS4wNiAwIHogTTkzLjIyIDcuNjE5OTk5OTk5OTk5OTk5IGwwIDcuNDggbDEuMDYgMCBjMC4yOCAwIDAuNDggLTAuMiAwLjQ4IC0wLjQ4IGwwIC02LjUgYzAgLTAuMjggLTAuMiAtMC41IC0wLjQ4IC0wLjUgbC0xLjA2IDAgeiBNMTAyLjI0MDAwMDAwMDAwMDAxIDIwIGwtMC43MiAtNC45NCBsLTIuMDIgMCBsLTAuNjYgNC45NCBsLTEuOTIgMCBsMi4xNiAtMTQuMyBsMi41OCAwIGwyLjUgMTQuMyBsLTEuOTIgMCB6IE05OS43NiAxMy4xNiBsMS40OCAwIGwtMC43NiAtNS4yIHogTTEwNy40Mzk5OTk5OTk5OTk5OCAyMC4xNiBsLTAuNDQgMCBjLTEuNCAwIC0yLjUyIC0xLjEyIC0yLjUyIC0yLjUyIGwwIC05LjY0IGMwIC0xLjQgMS4xMiAtMi41NCAyLjUyIC0yLjU0IGwwLjQ0IDAgYzEuNCAwIDIuNTIgMS4xNCAyLjUyIDIuNTQgbDAgMS4wMiBsLTEuOTYgMCBsMCAtMS4wMiBjMCAtMC4zNCAtMC4yNCAtMC41OCAtMC41NiAtMC41OCBsLTAuNDQgMCBjLTAuMyAwIC0wLjU4IDAuMjQgLTAuNTggMC41OCBsMCA5LjY0IGMwIDAuMyAwLjI4IDAuNTggMC41OCAwLjU4IGwwLjQ0IDAgYzAuMzIgMCAwLjU2IC0wLjI4IDAuNTYgLTAuNTggbDAgLTUuMiBsLTEuMTIgMCBsMCAtMS45NCBsMy4wOCAwIGwwIDcuMTQgYzAgMS40IC0xLjEyIDIuNTIgLTIuNTIgMi41MiB6IE0xMTUuNjE5OTk5OTk5OTk5OTkgMTIuNDYgbC0yLjc2IDAgbDAgNS42NCBsMi43OCAwIGwwIDEuOSBsLTQuNjggMCBsMCAtMTQuMjggbDQuNjggMCBsMCAxLjkgbC0yLjc4IDAgbDAgMi45NCBsMi43NiAwIGwwIDEuOSB6IE0xMjQuMjM5OTk5OTk5OTk5OTggNS43MjAwMDAwMDAwMDAwMDEgbDEuOSAwIGwwIDE0LjI2IGwtMS45IDAgbDAgLTcuNTQgbC0xLjcgMCBsMCA3LjU0IGwtMS45IDAgbDAgLTE0LjI2IGwxLjkgMCBsMCA0Ljg0IGwxLjcgMCBsMCAtNC44NCB6IE0xMzEuNzk5OTk5OTk5OTk5OTggMTIuNDYgbC0yLjc2IDAgbDAgNS42NCBsMi43OCAwIGwwIDEuOSBsLTQuNjggMCBsMCAtMTQuMjggbDQuNjggMCBsMCAxLjkgbC0yLjc4IDAgbDAgMi45NCBsMi43NiAwIGwwIDEuOSB6IE0xMzguMjk5OTk5OTk5OTk5OTggMjAuMDQgbC0yLjA0IDAgbC0xLjEgLTMuMDIgbC0wLjQ0IDAgbDAgMy4wMiBsLTEuOSAwIGwwIC0xNC4zMiBsMi45OCAwIGMxLjMyIDAgMi4zOCAxLjA2IDIuMzggMi4zOCBsMCA2LjU0IGMwIDAuODYgLTAuNDQgMS42IC0xLjEyIDIuMDIgeiBNMTM0LjcyIDcuNjE5OTk5OTk5OTk5OTk5IGwwIDcuNSBsMS4wOCAwIGMwLjI2IDAgMC40OCAtMC4yMiAwLjQ4IC0wLjQ4IGwwIC02LjU0IGMwIC0wLjI2IC0wLjIyIC0wLjQ4IC0wLjQ4IC0wLjQ4IGwtMS4wOCAwIHogTTE0My45NTk5OTk5OTk5OTk5OCAxMi40NiBsLTIuNzYgMCBsMCA1LjY0IGwyLjc4IDAgbDAgMS45IGwtNC42OCAwIGwwIC0xNC4yOCBsNC42OCAwIGwwIDEuOSBsLTIuNzggMCBsMCAyLjk0IGwyLjc2IDAgbDAgMS45IHoiPjwvcGF0aD48L2c+PGcgaWQ9IlN2Z2pzRzEwNDQiIGZlYXR1cmVLZXk9Im5hbWVMZWZ0RmVhdHVyZS0wIiB0cmFuc2Zvcm09Im1hdHJpeCgyLjkzMDgwMDU4ODI1MDEzNywwLDAsMi45MzA4MDA1ODgyNTAxMzcsMCwtNS41ODgzMzA4ODIyOTEwOTYpIiBmaWxsPSIjM2RkMmNjIj48cGF0aCBkPSJNMi42OCAxOS45NiBjLTEuNDggMCAtMi42OCAtMS4yIC0yLjY4IC0yLjY4IGwwIC04Ljg4IGMwIC0xLjQ4IDEuMiAtMi42OCAyLjY4IC0yLjY4IHMyLjY4IDEuMiAyLjY4IDIuNjggbDAgMC44IGwtMS45IDAgbDAgLTAuOCBjMCAtMC40MiAtMC4zNiAtMC43OCAtMC43OCAtMC43OCBzLTAuNzggMC4zNiAtMC43OCAwLjc4IGwwIDguODggYzAgMC40MiAwLjM2IDAuNzggMC43OCAwLjc4IHMwLjc4IC0wLjM2IDAuNzggLTAuNzggbDAgLTEuMjggbDEuOSAwIGwwIDEuMjggYzAgMS40OCAtMS4yIDIuNjggLTIuNjggMi42OCB6IE0xMC42OTQ1IDIwIGMtMS41NiAwIC0yLjg0IC0xLjI2IC0yLjg0IC0yLjg0IGwwIC0xLjQ2IGwxLjkgMCBsMCAxLjQ2IGMwIDAuNTIgMC40MiAwLjk0IDAuOTQgMC45NCBzMC45MiAtMC40MiAwLjkyIC0wLjk0IGwwIC0xMS41IGwxLjkyIDAgbDAgMTEuNSBjMCAxLjU4IC0xLjI4IDIuODQgLTIuODQgMi44NCB6IE0yMi45NDg5OTk5OTk5OTk5OTggNS42OCBsMCAxLjkyIGwtMi4zOCAwIGwwIDEyLjQyIGwtMS45MiAwIGwwIC0xMi40MiBsLTIuNjIgMCBsMCAtMS45MiBsNi45MiAwIHoiPjwvcGF0aD48L2c+PGcgaWQ9IlN2Z2pzRzEwNDUiIGZlYXR1cmVLZXk9ImlubGluZVN5bWJvbEZlYXR1cmUtMCIgdHJhbnNmb3JtPSJtYXRyaXgoMC43MzYzNjQ2NTc4MjExODA3LDAsMCwwLjczNjM2NDY1NzgyMTE4MDcsODIuNTgxODY5Mjg2NjE1OTQsLTQuNDE4MTg3OTQ2OTI3MDg0KSIgZmlsbD0iIzNkZDJjYyI+PGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLC05NTIuMzYyMTgpIj48cGF0aCBzdHlsZT0idGV4dC1pbmRlbnQ6MDt0ZXh0LXRyYW5zZm9ybTpub25lO2RpcmVjdGlvbjpsdHI7YmxvY2stcHJvZ3Jlc3Npb246dGI7YmFzZWxpbmUtc2hpZnQ6YmFzZWxpbmU7Y29sb3I6O2VuYWJsZS1iYWNrZ3JvdW5kOmFjY3VtdWxhdGU7IiBkPSJtIDEzLjU0MDc4OSwxMDEzLjE2OCBjIC00LjE2MTI2MDQsMCAtNy41NDA4NjY1LDMuMzkyMiAtNy41NDA4NjY1LDcuNTY5MyAwLDQuMTc3MSAzLjM3OTYwNjEsNy42MDUgNy41NDA4NjY1LDcuNjA1IDAuODEzNTQzLDAgMS42MTM5NzYsLTAuMTM2MSAyLjM4MzIyOCwtMC4zOTI4IDEyLjI4MTEwMiwxOC44OTk3IDM2LjY0OTg0MiwyMy4yNjA4IDU0LjQ5MzIyNywxMy4wMzIgMC41MjEyMjEsLTAuMjk5MSAwLjcyNDYwNywtMS4wNDc1IDAuNDI2NjE0LC0xLjU3MSAtMC4yOTc5OTIsLTAuNTIzNCAtMS4wNDM1MDMsLTAuNzI3NSAtMS41NjUwNzgsLTAuNDI4NCAtMTYuNzcyOTUzLDkuNjE1MyAtMzkuNjcxMjIsNS42MjkyIC01MS4zMjcyODIsLTEyLjEwMzcgMS44OTQyNTEsLTEuMzgxMiAzLjEzMDE1NywtMy42MTk1IDMuMTMwMTU3LC02LjE0MTEgMCwtNC4xNzcxIC0zLjM3OTI1MiwtNy41NjkzIC03LjU0MDg2NiwtNy41NjkzIHoiIGZpbGw9IiMzZGQyY2MiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9Im5vbmUiIG1hcmtlcj0ibm9uZSIgdmlzaWJpbGl0eT0idmlzaWJsZSIgZGlzcGxheT0iaW5saW5lIiBvdmVyZmxvdz0idmlzaWJsZSI+PC9wYXRoPjxwYXRoIHN0eWxlPSJ0ZXh0LWluZGVudDowO3RleHQtdHJhbnNmb3JtOm5vbmU7ZGlyZWN0aW9uOmx0cjtibG9jay1wcm9ncmVzc2lvbjp0YjtiYXNlbGluZS1zaGlmdDpiYXNlbGluZTtjb2xvcjo7ZW5hYmxlLWJhY2tncm91bmQ6YWNjdW11bGF0ZTsiIGQ9Im0gNzAuNDE3MjQ0LDk3MC41NzI5OSBjIC0wLjk1MTAyMywwLjEyMTMyIC0xLjIzNzMyMywxLjY5MDI2IC0wLjM5MTE4MSwyLjE0MjI1IDEzLjQyOTg0Miw4LjIxODk5IDIwLjkyODU0MywyNC4zMDE4MiAxNy42NDI0OCw0MC41NTk4NiAtMC4zOTI5NTMsLTAuMDY3IC0wLjgwMTg1LC0wLjEwNyAtMS4yMDkzMzEsLTAuMTA3IC00LjE2MTI1OSwwIC03LjU0MDg2NiwzLjM5MjIgLTcuNTQwODY2LDcuNTY5MiAwLDQuMTc3MSAzLjM3OTYwNyw3LjYwNSA3LjU0MDg2Niw3LjYwNSA0LjE2MTI2LDAgNy41NDA4NjYsLTMuNDI3OSA3LjU0MDg2NiwtNy42MDUgMCwtMi45NTE2IC0xLjY4Njk2OCwtNS41MSAtNC4xNjE2MTQsLTYuNzQ4IDMuNjA3NDQxLC0xNy4yOTEwNyAtNC4zMzEzMzgsLTM0LjQ4MTg4IC0xOC42Mzg1MDMsLTQzLjIzNzczIC0wLjE4OTkyMSwtMC4xMjEyMiAtMC40MTU5ODQsLTAuMTg0MjMgLTAuNjQwNjMsLTAuMTc4NTIgLTAuMDQ3ODQsLTAuMDAzIC0wLjA5NDI1LC0wLjAwMyAtMC4xNDIwODcsMCB6IiBmaWxsPSIjM2RkMmNjIiBmaWxsLW9wYWNpdHk9IjEiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSJub25lIiBtYXJrZXI9Im5vbmUiIHZpc2liaWxpdHk9InZpc2libGUiIGRpc3BsYXk9ImlubGluZSIgb3ZlcmZsb3c9InZpc2libGUiPjwvcGF0aD48cGF0aCBzdHlsZT0idGV4dC1pbmRlbnQ6MDt0ZXh0LXRyYW5zZm9ybTpub25lO2RpcmVjdGlvbjpsdHI7YmxvY2stcHJvZ3Jlc3Npb246dGI7YmFzZWxpbmUtc2hpZnQ6YmFzZWxpbmU7Y29sb3I6O2VuYWJsZS1iYWNrZ3JvdW5kOmFjY3VtdWxhdGU7IiBkPSJtIDUwLjAwMDAwMSw5NTguMzYyMTggYyAtNC4wMTI0NDEsMCAtNy4yNzQ0MSwzLjE2OTg3IC03LjUwNTA3OSw3LjE0MDgzIC0xNy4xOTcwODYsMy4xOTM2MiAtMjkuNzI3NjM3LDE2Ljg1MjY2IC0zMi41ODIxMjU0LDMzLjA2MjAxIGEgMS4xMzgzNTE1LDEuMTQyNjQ2MyAwIDEgMCAyLjI0MDc4NzQsMC4zOTI3NSBjIDIuNjgxMjIxLC0xNS4yMjQ4NiAxNC4zODgzMDcsLTI4LjA3MDg0IDMwLjUxODg1OCwtMzEuMTY5NyAwLjgyNjY1MywzLjI4NTM5IDMuODAyNjc3LDUuNzEyNjYgNy4zMjc1NTksNS43MTI2NiA0LjE2MTI1OSwwIDcuNTQwODY2LC0zLjM5MjE5IDcuNTQwODY2LC03LjU2OTI4IDAsLTQuMTc3MDggLTMuMzc5NjA3LC03LjU2OTI3IC03LjU0MDg2NiwtNy41NjkyNyB6IiBmaWxsPSIjM2RkMmNjIiBmaWxsLW9wYWNpdHk9IjEiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSJub25lIiBtYXJrZXI9Im5vbmUiIHZpc2liaWxpdHk9InZpc2libGUiIGRpc3BsYXk9ImlubGluZSIgb3ZlcmZsb3c9InZpc2libGUiPjwvcGF0aD48L2c+PC9nPjxnIGlkPSJTdmdqc0cxMDQ2IiBmZWF0dXJlS2V5PSJuYW1lUmlnaHRGZWF0dXJlLTAiIHRyYW5zZm9ybT0ibWF0cml4KDIuODc3MDk1MDQ4MTU2NDc3NywwLDAsMi44NzcwOTUwNDgxNTY0Nzc3LDE1Ni4xOTE4MDA3OTY5NDM4OCwtNC40Nzg3NzQ0MzIxNTA5MDEpIiBmaWxsPSIjM2RkMmNjIj48cGF0aCBkPSJNNy45OTQ1IDIwLjAyIGwtMi41IDAgbDAgLTE0LjI2IGwyLjUgMCBjMS43IDAgMy4wNiAxLjM4IDMuMDYgMy4wOCBsMCA4LjEgYzAgMC44MiAtMC4zMiAxLjYgLTAuOSAyLjE4IHMtMS4zNCAwLjkgLTIuMTYgMC45IHogTTcuMzk0NTAwMDAwMDAwMDAxIDcuNjggbDAgMTAuNDIgbDAuNiAwIGMwLjMgMCAwLjYgLTAuMTIgMC44MiAtMC4zNCBzMC4zNCAtMC41IDAuMzQgLTAuODIgbDAgLTguMSBjMCAtMC42NCAtMC41MiAtMS4xNiAtMS4xNiAtMS4xNiBsLTAuNiAwIHogTTE4LjIwOTAwMDAwMDAwMDAwMyAxMi40NiBsLTIuNzYgMCBsMCA1LjY0IGwyLjc4IDAgbDAgMS45IGwtNC42OCAwIGwwIC0xNC4yOCBsNC42OCAwIGwwIDEuOSBsLTIuNzggMCBsMCAyLjk0IGwyLjc2IDAgbDAgMS45IHogTTI0LjcwMzUwMDAwMDAwMDAwMiAyMCBsLTEuOTggMCBsLTIgLTE0LjI4IGwxLjkyIDAgbDEuMDQgNy4zNiBsMC45NiAtNy4zNiBsMS45MiAwIHogTTMxLjc5ODAwMDAwMDAwMDAwMiAyMC4xMiBjLTEuNTIgMCAtMi43NCAtMS4yNCAtMi43NCAtMi43NCBsMCAtMi4xOCBsMS45NCAwIGwwIDIuMTggYzAgMC40NCAwLjM2IDAuOCAwLjggMC44IHMwLjc4IC0wLjM2IDAuNzggLTAuOCBsMCAtMS45IGwtMy41MiAtNC44NiBsMCAtMi40OCBjMCAtMS41MiAxLjIyIC0yLjc2IDIuNzQgLTIuNzYgYzEuNSAwIDIuNzIgMS4yNCAyLjcyIDIuNzYgbDAgMi4xNiBsLTEuOTQgMCBsMCAtMi4xNiBjMCAtMC40NiAtMC4zNCAtMC44IC0wLjc4IC0wLjggcy0wLjggMC4zNCAtMC44IDAuOCBsMCAxLjgyIGwzLjUyIDQuODYgbDAgMi41NiBjMCAxLjUgLTEuMjIgMi43NCAtMi43MiAyLjc0IHoiPjwvcGF0aD48L2c+CgkJCTwvZz4KCQk8L3N2Zz4KCQ==`}
                alt="logo"
            />
        </div>
    )
}
