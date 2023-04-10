import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from './CommentCard.module.scss';
import { Comment } from '../../module/types/comment';

interface CommentCardProps {
    className?: string;
    comment: Comment;
    isLoading?: boolean
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className])}>
                <div className={cls.hearer}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton className={cls.username} height={16} width={100} border="" />
                </div>
                <Skeleton className={cls.text} width="100%" height={50} border="" />
            </div>
        );
    }

    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <div className={cls.header}>
                {comment.user.avatar ? <Avatar size={30} src={comment.user.avatar} /> : null}
                <Text title={comment.user.username} />
            </div>
            <Text className={cls.text} text={comment.text} />
        </div>
    );
});
