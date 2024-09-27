import React, {useContext} from 'react';
import {LayoutContainer} from './context';
import {Box, Card, Stack, Flex, Button, Badge} from '@sanity/ui';
import {ArrowDownIcon, ArrowUpIcon, TrashIcon} from '@sanity/icons';
import {useCurrentUser} from 'sanity';

function SectionItem(props) {
	const layoutContainer = useContext(LayoutContainer);
	const Icon = props?.schemaType?.icon;

	const currentUser = useCurrentUser();
	const allowNavigation =
		currentUser?.roles.find((role) => role.name === 'administrator') !== undefined;
	const {onRemove} = props;

	const moveItem = (moveTo) => {
		const toIndex = Math.max(
			Math.min(props.index + moveTo, layoutContainer.items.length - 1),
			0,
		);
		layoutContainer?.onItemMove({fromIndex: props.index, toIndex});
	};

	const handleMoveItemUp = () => moveItem(-1);
	const handleMoveItemDown = () => moveItem(1);

	const inputProps = props.inputProps;
	const groups =
		inputProps?.groups?.length > 1
			? inputProps.groups.filter((group) => group?.name !== 'all-fields')
			: [];

	const {readOnly = false} = inputProps;

	return (
		<div
			data-custom-field="arrayInlineEditorItem"
			data-custom-allow-navigation={allowNavigation}
			key={props.inputId}
		>
			<Card border={2} margin={2} padding={5} paddingRight={4} shadow={2} radius={3}>
				<Flex>
					<Stack flex={1} space={2}>
						<Flex align={'center'} marginBottom={4}>
							{Icon && (
								<Box marginRight={2} style={{fontSize: '1.6em'}}>
									<Icon></Icon>
								</Box>
							)}
							<Badge tone="primary" fontSize={1} padding={2}>
								{props?.title}
							</Badge>
						</Flex>

						{inputProps.renderInput({...inputProps, groups})}
					</Stack>

					{readOnly === false && (
						<Card
							data-custom-element="arrayInlineEditorItemNavigation"
							marginLeft={4}
							paddingLeft={4}
							borderLeft={1}
							style={{background: 'transparent'}}
						>
							<Flex
								direction="column"
								justify="space-between"
								style={{height: '100%'}}
							>
								<Button
									icon={ArrowUpIcon}
									mode="ghost"
									fontSize={1}
									onClick={handleMoveItemUp}
								></Button>

								<Button
									icon={TrashIcon}
									tone="caution"
									mode="ghost"
									onClick={onRemove}
									fontSize={0}
								></Button>

								<Button
									icon={ArrowDownIcon}
									mode="ghost"
									fontSize={1}
									onClick={handleMoveItemDown}
								></Button>
							</Flex>
						</Card>
					)}
				</Flex>
			</Card>
		</div>
	);
}

export default SectionItem;
