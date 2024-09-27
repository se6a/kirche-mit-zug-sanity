import {useClient, useFormValue} from 'sanity';
import {unset, set} from 'sanity';
import {React, useEffect, useState, useCallback} from 'react';

import {Card, Stack, Flex, Radio, Text} from '@sanity/ui';

export default function ToPageSection(props) {
	const parent = useFormValue(props?.path?.slice(0, -1) || []);
	const page = parent?.page || null;
	const client = useClient({apiVersion: '2021-03-25'});

	const [sections, setSections] = useState([]);
	const {value = '', onChange} = props?.inputProps || {};

	useEffect(() => {
		if (!page || !page?._ref) {
			onChange(unset());
			return;
		}

		const fetchData = async () => {
			const pageData = await client.fetch(`* [_id == "${page._ref}"][0]`);
			const pageSlug = pageData?.metadata?.de?.slug?.current || '';

			const sections = pageData?.sections || [];

			const pageSections = await sections
				.filter((section) => section?.isNavigable && section?.navigation)
				.map((section) => section)
				// Project Specific
				.reduce(async (all, section) => {
					if (section?._type === 'pageSection_products') {
						const productType = section?.type;
						const products = await client.fetch(
							`* [_type == "offer-${productType}" && _id in path("drafts.**") == false && !isOutlet]`,
							{
								productType,
							},
						);

						const sectionSlug = section?.navigation?.de?.slug?.current || '';

						const productSections = products.map((product, i) => ({
							navigation: {
								de: {
									label: '- ' + product.title,
									slug: {
										current: pageSlug + '-' + sectionSlug + '-' + i,
									},
								},
							},
						}));

						return [...all, section, ...productSections];
					}

					return [...all, section];
				}, []);

			setSections(pageSections);
		};

		fetchData().catch(console.error);
	}, [page]);

	const handleChange = useCallback((section) => {
		onChange(section ? set(section) : unset());
	});

	if (!sections.length) {
		return '';
	}

	return (
		<Card paddingLeft={4}>
			<Stack space={3}>
				<Text size={1}>Scrolle zu:</Text>

				<Flex key={'ops0'} align={'center'} gap={2}>
					<Radio
						id={'ops0'}
						onChange={() => handleChange(null)}
						value={true}
						checked={value === ''}
					></Radio>
					<label htmlFor={'ops0'}>
						<Text size={2}>Seitenanfang</Text>
					</label>
				</Flex>

				{sections.map(({_key, navigation} = {}) => (
					<Flex key={_key} align={'center'} gap={2}>
						<Radio
							id={_key}
							onChange={() => handleChange(navigation)}
							value={false}
							checked={
								value?.de &&
								value?.de?.slug?.current === navigation?.de?.slug?.current
									? true
									: false
							}
						></Radio>
						<label htmlFor={_key}>
							<Text size={2}>{navigation?.de?.label}</Text>
						</label>
					</Flex>
				))}
			</Stack>
		</Card>
	);
}
