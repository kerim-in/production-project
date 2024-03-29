import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TabItem, Tabs } from '@/shared/ui/Tabs';
import { ArticleType } from '@/entities/Article';

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onCangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const { className, value, onCangeType } = props;
    const { t } = useTranslation();

    const typeTab = useMemo<TabItem[]>(
        () => [
            {
                value: ArticleType.ALL,
                content: t('Все статьи'),
            },
            {
                value: ArticleType.IT,
                content: t('Айти'),
            },
            {
                value: ArticleType.ECONOMICS,
                content: t('Экономика'),
            },
            {
                value: ArticleType.SCIENCE,
                content: t('Наука'),
            },
        ],
        [t],
    );

    const onTabClick = useCallback(
        (tab: TabItem) => {
            onCangeType(tab.value as ArticleType);
        },
        [onCangeType],
    );

    return (
        <Tabs
            tabs={typeTab}
            value={value}
            className={classNames('', {}, [className])}
            onTabClick={onTabClick}
        />
    );
});
