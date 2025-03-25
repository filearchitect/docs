<template>
    <div class="folder-structure">
        <template v-for="(item, index) in structure" :key="index">
            <div class="folder-item">
                <div class="folder-content">
                    <Icon
                        :icon="getIcon(item)"
                        class="folder-icon"
                        width="20"
                        height="20"
                    />
                    <span class="folder-text">{{ item.name }}</span>
                </div>
                <div v-if="item.children?.length" class="folder-children">
                    <div
                        v-for="(child, childIndex) in item.children"
                        :key="childIndex"
                        class="folder-item"
                    >
                        <div class="folder-content">
                            <Icon
                                :icon="getIcon(child)"
                                class="folder-icon"
                                width="20"
                                height="20"
                            />
                            <span class="folder-text">{{ child.name }}</span>
                        </div>
                        <div
                            v-if="child.children?.length"
                            class="folder-children"
                        >
                            <div
                                v-for="(
                                    subChild, subChildIndex
                                ) in child.children"
                                :key="subChildIndex"
                                class="folder-item"
                            >
                                <div class="folder-content">
                                    <Icon
                                        :icon="getIcon(subChild)"
                                        class="folder-icon"
                                        width="20"
                                        height="20"
                                    />
                                    <span class="folder-text">{{
                                        subChild.name
                                    }}</span>
                                </div>
                                <div
                                    v-if="subChild.children?.length"
                                    class="folder-children"
                                >
                                    <div
                                        v-for="(
                                            grandChild, grandChildIndex
                                        ) in subChild.children"
                                        :key="grandChildIndex"
                                        class="folder-item"
                                    >
                                        <div class="folder-content">
                                            <Icon
                                                :icon="getIcon(grandChild)"
                                                class="folder-icon"
                                                width="20"
                                                height="20"
                                            />
                                            <span class="folder-text">{{
                                                grandChild.name
                                            }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";

const props = defineProps({
    structure: {
        type: Array,
        required: true,
        validator: (value) => {
            return value.every(
                (item) =>
                    typeof item === "object" &&
                    typeof item.name === "string" &&
                    (!item.type || ["file", "folder"].includes(item.type)),
            );
        },
    },
});

const getIcon = (item) => {
    if (item.type === "file") return "mdi:file";
    if (item.type === "folder") return "mdi:folder";
    if (item.type === "folder-plus") return "mdi:folder-plus";
    return "mdi:folder-open";
};
</script>

<style scoped>
.folder-structure {
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    padding: 1rem;
}

.folder-item {
    margin: 0.5rem 0;
}

.folder-content {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.folder-icon {
    color: #6b7280;
}

.folder-text {
    font-family: -apple-system, system-ui;
    font-size: 16px;
    color: #333;
}

.folder-children {
    margin-left: 10px;
    padding-left: 1rem;
    border-left: 1px dashed #d0d0d0;
}
</style>
