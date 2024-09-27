import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list';
import {FolderIcon, TagsIcon, InfoOutlineIcon, EyeClosedIcon} from '@sanity/icons';

export const structure = (S, context) => {
    // prettier-ignore
    return S.list()
        .title("Inhalt")
        .items([
            orderableDocumentListDeskItem({
                type: "islands",
                S,
                context,
                title: "Inseln",
                icon: FolderIcon
            }),
            ...S.documentTypeListItems().filter(item => ["islands", "page-impressum", "page-privacy", "categories"].includes(item.getSchemaType()?.name) === false),
            S.documentTypeListItem("categories")
                .icon(TagsIcon),
            S.documentListItem()
                .id("impressum")
                .schemaType("page-impressum")
                .icon(InfoOutlineIcon),
            S.documentListItem()
                .id("privacy")
                .schemaType("page-privacy")
                .icon(EyeClosedIcon),
        ])
};
