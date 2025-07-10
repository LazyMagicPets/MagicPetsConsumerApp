export const settings {
    staticAssets: [
        // System
        { "system/base/System/": "PreCache" },
        { "system/en-US/System/": "PreCache" },
        { "system/es-MX/System/": "LazyCache" },

        // StoreApp
        { "system/base/ConsumerApp/": "PreCache" },
        { "system/en-US/ConsumerApp/": "PreCache" },
        { "system/es-MX/ConsumerApp/": "LazyCache" },

        // Tenancy
        { "tenancy/base/System/": "PreCache" },
        { "tenancy/base/ConsumerApp/": "PreCache" },
        { "tenancy/en-US/ConsumerApp/": "PreCache" },
        { "tenancy/es-MX/ConsumerApp/": "LazyCache" },

        // Subtenancy
        { "subtenancy/base/System/": "PreCache" },
        { "subtenancy/base/ConsumerApp/": "PreCache" },
        { "subtenancy/en-US/ConsumerApp/": "PreCache" },
        { "subtenancy/es-MX/ConsumerApp/": "LazyCache" },

    ]
};