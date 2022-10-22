import React from "react"
import { useCycle } from "framer-motion"
import { createStore } from "https://framer.com/m/framer/store.js@^1.0.0"

const useStore = createStore({
    variant: "Active",
})

export function withSharedVariantState(Component) {
    return (props) => {
        // Uses the Variant set on the shared store
        const [store] = useStore()

        return <Component {...props} variant={store.variant} />
    }
}

export function withToggleSharedVariantState(Component) {
    return (props) => {
        const [store, setStore] = useStore()

        // Cycles the variant set on the shared store
        function toggleVariant() {
            setStore((prevState) => ({
                variant: prevState.variant === "Active" ? "Inactive" : "Active",
            }))
        }

        return (
            <Component
                {...props}
                variant={store.variant}
                onTap={toggleVariant}
            />
        )
    }
}