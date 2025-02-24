import React from "react";
import { ArrowLongLeftIcon } from '@heroicons/react/24/solid'
import Button from '../Buttons/Button'

import { useRouter } from 'next/router';

const PageHeading: React.FC = () => {
    return (
        <div className="py-7 bg-gray-50 w-full ">
            <div className="flex flex-col items-start justify-between lg:items-center lg:flex-row md:flex-row md:items-center">
            <Button color="secondary" variant="filled" iconLeft={<ArrowLongLeftIcon />}>
                <a href="/">Voltar para as ações</a>
            </Button>
            </div>
        </div>
    );
}

export default PageHeading;
