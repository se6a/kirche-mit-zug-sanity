import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list';
import {
    BookIcon,
    HomeIcon,
    FolderIcon,
    TagsIcon,
    InfoOutlineIcon,
    EyeClosedIcon,
    ProjectsIcon,
} from '@sanity/icons';

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
                icon: ProjectsIcon
            }),
            ...S.documentTypeListItems().filter(item => [
                "categories",
                "islands",
                "page-start","page-impressum",
                "page-privacy",
                "footer",
            ].includes(item.getSchemaType()?.name) === false),
            S.documentTypeListItem("categories")
                .icon(TagsIcon),
            S.divider(),
            S.documentListItem()
                .id("start")
                .schemaType("page-start")
                .icon(HomeIcon),
            S.documentListItem()
                .id("impressum")
                .schemaType("page-impressum")
                .icon(InfoOutlineIcon),
            S.documentListItem()
                .id("privacy")
                .schemaType("page-privacy")
                .icon(EyeClosedIcon),
            S.divider(),
            S.documentListItem()
                .id("siteFooter")
                .title("Footer")
                .schemaType("footer")
                .icon(BookIcon),
        ])
};
