import { forwardRef } from "react"

const Cursor = forwardRef(function Cursor(props, ref) {
    return (
        <div className="cursor" ref={ref}>

        </div>
    )
});

export default Cursor;