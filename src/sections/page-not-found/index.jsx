import React from 'react'
import { FiHome, FiArrowLeft } from 'react-icons/fi'
import { CommonContainer, CommonGradientButton, RouterLink, useRouter } from '../../components'

const PageNotFoundSection = () => {
    const router = useRouter()

    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <CommonContainer>
                <div className="min-h-[60vh] flex items-center justify-center py-12">
                    <div className="text-center max-w-2xl mx-auto px-4 w-full">
                        {/* 404 Number */}
                        <div className="mb-6">
                            <h1
                                className="xl:text-[12rem] lg:text-[11rem] md:text-[10rem] text-[6rem] font-bold"
                                style={{
                                    fontFamily: 'Pacifico, serif',
                                    background: 'linear-gradient(45deg, rgb(86, 199, 218), rgb(252, 214, 11))',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }}
                            >
                                404
                            </h1>
                        </div>

                        {/* Error Message */}
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Page Not Found
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or
                            you entered the wrong URL.
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <RouterLink
                                to="/"
                                className="w-full block"
                            >
                                <CommonGradientButton
                                    className="w-full"
                                    icon={<FiHome />}
                                    iconPosition="left"
                                    size="lg"
                                    type="button"
                                >
                                    Go to Home
                                </CommonGradientButton>
                            </RouterLink>
                            <CommonGradientButton
                                className="w-full"
                                onClick={() => router.back()}
                                icon={<FiArrowLeft />}
                                iconPosition="left"
                                size="lg"
                            >
                                Go Back
                            </CommonGradientButton>
                        </div>

                        {/* Helpful Links */}
                        <div className="mt-12 pt-8 border-t border-gray-200">
                            <p className="text-sm text-gray-500 mb-4">You might be looking for:</p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <RouterLink
                                    to="/communities"
                                    className="text-sm text-primary hover:text-secondary transition-colors font-medium"
                                >
                                    Communities
                                </RouterLink>
                                <RouterLink
                                    to="/learning"
                                    className="text-sm text-primary hover:text-secondary transition-colors font-medium"
                                >
                                    Learning
                                </RouterLink>
                                <RouterLink
                                    to="/workflows"
                                    className="text-sm text-primary hover:text-secondary transition-colors font-medium"
                                >
                                    Workflows
                                </RouterLink>
                            </div>
                        </div>
                    </div>
                </div>
            </CommonContainer>
        </div>
    )
}

export default PageNotFoundSection

