import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Search() {
    const location = useLocation();
    const [query, setQuery] = useState("");

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        setQuery(params.get("query") || ""); // 获取搜索关键词
    }, [location.search]);

    return (
        <div className="search-results">
            <h2>搜索结果</h2>
            {query ? (
                <p>搜索关键词: <strong>{query}</strong></p>
            ) : (
                <p>请输入关键词进行搜索。</p>
            )}
        </div>
    );
}
