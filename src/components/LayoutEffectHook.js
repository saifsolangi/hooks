import React, { useEffect, useLayoutEffect } from 'react'

export default function LayoutEffectHook() {
    useEffect(() => {
        console.log("useEffect")
    }, [])

    useLayoutEffect(() => {
        console.log("use Layout Effect")
    }, [])

    return (
        <div>
            use layout effect
        </div>
    )
}
