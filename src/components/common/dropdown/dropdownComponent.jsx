import { useState, useEffect } from 'react';
import { Menu, MenuItem, Box, Typography, Chip, TextField, InputAdornment, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import SearchIcon from '@mui/icons-material/Search';

function DropdownComponent({
    label,
    options = [],
    onSelect,
    fullWidth = false,
    disabled = false,
    placeholder = '',
    value,
    multiple = false,
    searchable = false,
    padding = '14px 16px', // Custom padding prop: 'vertical horizontal' or 'top right bottom left'
    minHeight = '48px', // Custom minHeight prop
}) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedValue, setSelectedValue] = useState(
        multiple ? (value || []) : (value !== undefined ? value : placeholder)
    );
    const [searchTerm, setSearchTerm] = useState('');

    // Sync internal state with external value prop
    useEffect(() => {
        if (value !== undefined) {
            setSelectedValue(multiple ? (value || []) : value);
        }
    }, [value, multiple]);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        if (!disabled) {
            setAnchorEl(event.currentTarget);
        }
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSelect = (option) => {
        const displayValue = typeof option === 'object' ? option.label : option;
        
        if (multiple) {
            const currentValues = Array.isArray(selectedValue) ? selectedValue : [];
            const isAlreadySelected = currentValues.includes(displayValue);
            
            let newValues;
            if (isAlreadySelected) {
                newValues = currentValues.filter(v => v !== displayValue);
            } else {
                newValues = [...currentValues, displayValue];
            }
            
            setSelectedValue(newValues);
            if (onSelect) {
                onSelect(newValues);
            }
        } else {
            setSelectedValue(displayValue);
            handleClose();
            if (onSelect) {
                onSelect(option);
            }
        }
    };

    const removeSelected = (valueToRemove) => {
        if (multiple && Array.isArray(selectedValue)) {
            const newValues = selectedValue.filter(v => v !== valueToRemove);
            setSelectedValue(newValues);
            if (onSelect) {
                onSelect(newValues);
            }
        }
    };

    const handleSelectAll = () => {
        if (multiple) {
            const allValues = options.map(option => typeof option === 'object' ? option.label : option);
            setSelectedValue(allValues);
            if (onSelect) {
                onSelect(allValues);
            }
        }
    };

    const handleClearAll = () => {
        if (multiple) {
            setSelectedValue([]);
            if (onSelect) {
                onSelect([]);
            }
        }
    };

    // Filter options based on search
    const filteredOptions = searchable && searchTerm
        ? options.filter(option => {
            const displayValue = typeof option === 'object' ? option.label : option;
            return displayValue.toLowerCase().includes(searchTerm.toLowerCase());
        })
        : options;

    const hasValue = multiple 
        ? (Array.isArray(selectedValue) && selectedValue.length > 0)
        : (selectedValue !== placeholder);
    const isFocused = open;
    const labelFloated = hasValue || isFocused;

    return (
        <Box sx={{ width: fullWidth ? '100%' : 'auto', position: 'relative' }}>
            {/* Animated Label */}
            {label && (
                <Typography
                    component="label"
                    sx={{
                        position: 'absolute',
                        left: '14px',
                        top: labelFloated ? '-8px' : '16px',
                        fontSize: labelFloated ? '0.75rem' : '0.875rem',
                        color: isFocused ? '#1C252E' : '#637381',
                        bgcolor: labelFloated ? '#FFFFFF' : 'transparent',
                        px: labelFloated ? 1 : 0,
                        py: labelFloated ? 0 : 0,
                        transition: 'all 0.2s',
                        pointerEvents: 'none',
                        zIndex: 1,
                    }}
                >
                    {label}
                </Typography>
            )}

            {/* Dropdown Input Field */}
            <Box
                onClick={handleClick}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    border: isFocused ? '2px solid' : '1px solid',
                    borderColor: isFocused ? '#1C252E' : '#DFE3E8',
                    borderRadius: '8px',
                    minHeight: minHeight,
                    padding: padding,
                    cursor: disabled ? 'not-allowed' : 'pointer',
                    bgcolor: disabled
                        ? 'rgba(0, 0, 0, 0.04)'
                        : '#FFFFFF',
                    transition: 'all 0.2s',
                    '&:hover': !disabled && !isFocused && {
                        borderColor: '#C4CDD5',
                    },
                }}
            >
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, flex: 1 }}>
                    {multiple && Array.isArray(selectedValue) && selectedValue.length > 0 ? (
                        selectedValue.map((val, index) => (
                            <Chip
                                key={index}
                                label={val}
                                size="small"
                                onDelete={(e) => {
                                    e.stopPropagation();
                                    removeSelected(val);
                                }}
                                sx={{
                                    bgcolor: '#00A76F',
                                    color: 'white',
                                    '& .MuiChip-deleteIcon': { color: 'white' },
                                }}
                            />
                        ))
                    ) : !multiple ? (
                        hasValue ? (
                            <Typography
                                sx={{
                                    fontSize: '0.875rem',
                                    color: '#1C252E',
                                    fontWeight: 400,
                                }}
                            >
                                {selectedValue}
                            </Typography>
                        ) : (
                            <Typography
                                sx={{
                                    fontSize: '0.875rem',
                                    color: '#919EAB',
                                    pointerEvents: 'none',
                                }}
                            >
                                {placeholder || label}
                            </Typography>
                        )
                    ) : (
                        isFocused && (
                            <Typography
                                sx={{
                                    fontSize: '0.875rem',
                                    color: '#919EAB',
                                }}
                            >
                                {placeholder || label}
                            </Typography>
                        )
                    )}
                </Box>
                {open ? (
                    <ExpandLessIcon sx={{ fontSize: 20, color: '#1C252E' }} />
                ) : (
                    <ExpandMoreIcon sx={{ fontSize: 20, color: '#1C252E' }} />
                )}
            </Box>

            {/* Dropdown Menu */}
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                PaperProps={{
                    sx: {
                        mt: 0.5,
                        width: anchorEl ? anchorEl.offsetWidth : 'auto',
                        maxHeight: 400,
                        color: '#1C252E',
                        position: 'absolute',
                        overflowY: 'auto',
                        overflowX: 'hidden',
                        minWidth: '150px',
                        minHeight: '16px',
                        maxWidth: 'calc(100% - 32px)',
                        backgroundImage: 'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiBmaWxsPSJ1cmwoI3BhaW50MF9yYWRpYWxfNDQ2NF81NTMzOCkiIGZpbGwtb3BhY2l0eT0iMC4xIi8+CjxkZWZzPgo8cmFkaWFsR3JhZGllbnQgaWQ9InBhaW50MF9yYWRpYWxfNDQ2NF81NTMzOCIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgxMjAgMS44MTgxMmUtMDUpIHJvdGF0ZSgtNDUpIHNjYWxlKDEyMy4yNSkiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMDBCOEQ5Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwQjhEOSIgc3RvcC1vcGFjaXR5PSIwIi8+CjwvcmFkaWFsR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==), url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiBmaWxsPSJ1cmwoI3BhaW50MF9yYWRpYWxfNDQ2NF81NTMzNykiIGZpbGwtb3BhY2l0eT0iMC4xIi8+CjxkZWZzPgo8cmFkaWFsR3JhZGllbnQgaWQ9InBhaW50MF9yYWRpYWxfNDQ2NF81NTMzNyIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgwIDEyMCkgcm90YXRlKDEzNSkgc2NhbGUoMTIzLjI1KSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGRjU2MzAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkY1NjMwIiBzdG9wLW9wYWNpdHk9IjAiLz4KPC9yYWRpYWxHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K)',
                        backgroundSize: '100%, 100%',
                        backgroundRepeat: 'no-repeat',
                        backdropFilter: 'blur(20px)',
                        bgcolor: '#FFFFFF',
                        // boxShadow: 'var(--customShadows-dropdown)',
                        borderRadius: '10px',
                        padding: 'calc(0.5 * var(--spacing))',
                        backgroundPosition: 'right top, left bottom',
                        transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                        outline: '0px',
                    },
                }}
            >
                {/* Search Input */}
                {searchable && (
                    <Box sx={{ p: 1.5, borderBottom: '1px solid', borderColor: 'divider' }}>
                        <TextField
                            fullWidth
                            size="small"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    bgcolor: 'transparent',
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#1C252E',
                                        borderWidth: '2px',
                                    },
                                },
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon sx={{ fontSize: 20, color: '#637381' }} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Box>
                )}

                {/* Select All / Clear All Buttons */}
                {multiple && (
                    <Box sx={{ p: 1, borderBottom: '1px solid', borderColor: 'divider', display: 'flex', gap: 1 }}>
                        <Button
                            size="small"
                            onClick={handleSelectAll}
                            sx={{
                                flex: 1,
                                textTransform: 'none',
                                color: '#00A76F',
                                fontSize: '0.875rem',
                                py: 0.5,
                            }}
                        >
                            Select All
                        </Button>
                        <Button
                            size="small"
                            onClick={handleClearAll}
                            sx={{
                                flex: 1,
                                textTransform: 'none',
                                color: '#637381',
                                fontSize: '0.875rem',
                                py: 0.5,
                            }}
                        >
                            Clear All
                        </Button>
                    </Box>
                )}
                
                <Box sx={{ maxHeight: 300, overflowY: 'auto' }}>
                    {filteredOptions.length > 0 ? (
                        filteredOptions.map((option, index) => {
                            const displayValue = typeof option === 'object' ? option.label : option;
                            const isSelected = multiple
                                ? (Array.isArray(selectedValue) && selectedValue.includes(displayValue))
                                : (selectedValue === displayValue);

                            return (
                                <MenuItem
                                    key={index}
                                    onClick={() => handleSelect(option)}
                                    selected={isSelected}
                                    sx={{
                                        padding: '10px 14px',
                                        margin: '10px 14px',
                                        borderRadius: '8px',
                                        color: '#1C252E',
                                        fontSize: '0.875rem',
                                        bgcolor: isSelected ? 'rgba(0, 0, 0, 0.04)' : 'transparent',
                                        '&:hover': {
                                            bgcolor: 'rgba(0, 0, 0, 0.06)',
                                        },
                                        '&.Mui-selected': {
                                            bgcolor: 'rgba(0, 0, 0, 0.04)',
                                            '&:hover': {
                                                bgcolor: 'rgba(0, 0, 0, 0.06)',
                                            },
                                        },
                                    }}
                                >
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, width: '100%' }}>
                                        {multiple && (
                                            isSelected ? (
                                                <CheckBoxIcon sx={{ fontSize: 20, color: '#00A76F' }} />
                                            ) : (
                                                <CheckBoxOutlineBlankIcon sx={{ fontSize: 20, color: '#637381' }} />
                                            )
                                        )}
                                        <Box sx={{ flex: 1 }}>{displayValue}</Box>
                                    </Box>
                                </MenuItem>
                            );
                        })
                    ) : (
                        <Box sx={{ p: 2, textAlign: 'center' }}>
                            <Typography sx={{ color: '#637381', fontSize: '0.875rem' }}>
                                No results found
                            </Typography>
                        </Box>
                    )}
                </Box>
            </Menu>
        </Box>
    );
}

export default DropdownComponent;

